import { useState, useEffect, useRef, Fragment } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import {
    searchByKeyword,
    getTopKeyword
  } from "nhaccuatui-api-full";

import Wrapper from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import images from "~/images";
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    
    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);
    
    const [topSearchs, setTopSearchs] = useState([]);

    useEffect(() => {
        const getTopSearch = async () => {
            try {
                const res = await getTopKeyword()
                setTopSearchs(res.listKeyValue)
            } catch (error) {
                alert(error);
            }
        };
        getTopSearch();
    },[])


    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult()
            return; 
        }
        
        const getSearchResult = async () => {
            try {
                const result = await searchByKeyword(searchValue);
                console.log(result["search"]["song"]["song"]);
                setSearchResult(result)
            } catch (error) {
                alert(error);
            }
        };
        getSearchResult();
    }, [debouncedValue])

    function renderTopSearch() {
        if(topSearchs) {
            return topSearchs.map((item, index) => {
                return (
                    <h4 key={index} className={cx('suggest-item')}>
                        <i className="fal fa-search"></i>
                        <span>{item.title}</span>
                    </h4>
                )
            })
        }
    }

    function renderSearchResult() {
        if(searchResult && searchResult !== '') {
            return (
                searchResult["search"]["song"]["song"].map(item => {
                    return (
                        <div key={item.key} className={cx('result-item')}>
                            <div className={cx('cd')}>
                                <Image 
                                    className={cx('cd-thumb')}
                                    src={item.thumbnail || item['artists'][0]['imageUrl']}
                                    alt={item.title}
                                    defaultAvt={images.defaultAvataSong}
                                />
                            </div>
                            <div className={cx('media-content')}>
                                <div className={cx('song-name','text-sm')}>{item.title}</div>
                                <div className={cx('singer-name', 'text-xs')}>
                                    {item["artists"].map((artist, index) => (
                                        <span>
                                            {artist.name}
                                            {item["artists"].length === index + 1 ? "" : ", "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }
    
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
                                {searchValue ? (
                                    <Fragment>
                                        <h3 className={cx('search-title','search-key')}>
                                            <i className="fal fa-search"></i>
                                            Tìm kiếm {!!searchValue && `"${searchValue}"`}
                                        </h3>
                                        {renderSearchResult()}
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <h3 className={cx('search-title')}>Tìm kiếm nhiều nhất</h3>
                                        {renderTopSearch()}
                                    </Fragment>
                                )}
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('wrapper', {activeSearch: showResult } )}>
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
                    {!!searchValue && (
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