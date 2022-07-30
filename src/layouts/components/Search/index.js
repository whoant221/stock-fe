import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Wrapper from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        
    }, [searchValue])

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return ( 
        <div>
            <HeadlessTippy
                interactive
                placement={'bottom'}
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper className="suggest">
                            <div className={cx('suggest-list')}>
                                <h3 className={cx('search-title')}>Từ khóa liên quan</h3>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                                <h4 className={cx('suggest-item')}>Nguyen Dung Tuan</h4>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <button className={cx('search-btn')}>
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
                        <button className={cx('clear')}>
                            <i className="fal fa-times"></i>
                        </button>
                    )}

                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;