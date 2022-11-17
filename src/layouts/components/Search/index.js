import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Wrapper from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import SearchMini from '../SearchMini';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);
    
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return ( 
        <HeadlessTippy
            interactive
            placement={'bottom'}
            visible={showResult}
            onClickOutside={()=>{setShowResult(false);}}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Wrapper className="suggest">
                        <div className={cx('suggest-list')}>
                            <SearchMini/>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('wrapper', {activeSearch: showResult } )}>
                <div className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <i className="fal fa-search"></i>
                </div>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm CK"
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <div className={cx('clear')} onClick={handleClear}>
                        <i className="fal fa-times"></i>
                    </div>
                )}

            </div>
        </HeadlessTippy>
    );
}

export default Search;