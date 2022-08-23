import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { useSelector } from 'react-redux';

import styles from './Icon.module.scss';

const cx = classNames.bind(styles)

function HeartIcon({ library = 'librarySong', data }) {
    //lấy ra danh sách librarySong/libraryPlaylist từ store
    const librarySong = useSelector(state => state.songReducer.librarySong) 
    //kiểm tra bài hát/playlist có trong library chưa

    return (  
        <>
            <Tippy 
                content={""}
                hideOnClick='true'
            >
                <div className={cx('wrapper')} >
                    <span className={cx('icon')}>
                        <i className="fal fa-heart"></i>    
                    </span>
                    <span className={cx('icon', 'active-icon')}>
                        <i className="fas fa-heart"></i>    
                    </span>
                </div>
            </Tippy>
        </>
    );
}

export default HeartIcon;