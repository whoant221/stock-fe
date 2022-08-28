import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '~/redux/actions';
import zingStorage from '~/utils/storage';

import styles from './Icon.module.scss';

const cx = classNames.bind(styles)

function HeartIcon({activeNoColor, data = {encodeId: null} }) {
    const dispatch = useDispatch()
    const librarySong = useSelector(state => state.songReducer.librarySong)

    const checkSong = () => {
        return librarySong.findIndex(song => song.encodeId === data.encodeId) != -1; 

    }
   
    const [isActive, setIsActive] = useState(checkSong)

    let title = isActive ? 'Xóa khỏi thư viện' : 'Thêm vào thư viện'

    const handleClick = () => {
        !isActive ? handleAdd(data): handleRemove(data);
        setIsActive(!isActive)
    }

    const handleAdd = (data) => {
        dispatch(actions.addSongToLibrary(data))
    }

    const handleRemove = (data) => {
        const position = librarySong.findIndex(song => song.encodeId === data.encodeId);
        librarySong.splice(position, 1);
        zingStorage.setLibrarySong(librarySong);
    }

    return (  
        <>
            <Tippy
                content={title}
                hideOnClick='true'
            >
                <button className={cx('wrapper', {active: isActive, activeNoColor})} onClick={handleClick}>
                    <span className={cx('icon')}>
                        <i className="fal fa-heart"></i>    
                    </span>
                    <span className={cx('icon', 'active-icon')}>
                        <i className="fas fa-heart"></i>    
                    </span>
                </button>
            </Tippy>
        </>
    );
}

export default HeartIcon;