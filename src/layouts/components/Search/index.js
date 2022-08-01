import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Wrapper from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {

    }, [debouncedValue])
    
    //"zingmp3-api-full": "^1.0.14"
    // const { ZingMp3 } = require("zingmp3-api-full")
    // ZingMp3.getSong("ZOACFBBU").then((data) => {
    //     console.log(data)
    // })

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return ( 
        <div>
            <HeadlessTippy
                interactive
                placement={'bottom'}
                visible={showResult}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper className="suggest">
                            <div className={cx('suggest-list')}>
                                <h3 className={cx('search-title')}>Từ khóa liên quan {!!searchValue && `"${searchValue}"`}</h3>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <i className="fal fa-search"></i>
                    </button>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue  && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <i className="fal fa-times"></i>
                        </button>
                    )}

                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;