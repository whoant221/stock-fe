import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '~/redux/actions';
import zingStorage from '~/utils/storage';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles)

function HeartIcon({activeNoColor, library = 'librarySong', data = {encodeId: null} }) {
    // console.log(data.encodeId);
    
    const dispatch = useDispatch()
    const librarySong = useSelector(state => state.songReducer.librarySong)
    const libraryPlaylist = useSelector(state => state.playlistReducer.libraryPlaylist)

    const checkSong = () => {
        if(library === 'librarySong') {
            return librarySong.findIndex(song => song.encodeId === data.encodeId) !== -1;
        }
        else if(library === 'libraryPlaylist') {
            return libraryPlaylist.findIndex(playlist => playlist.encodeId === data.encodeId) !== -1;
        }
    }
    
    const [isActive, setIsActive] = useState(checkSong)

    let title = isActive ? 'Xóa khỏi thư viện' : 'Thêm vào thư viện'

    const handleClick = () => {
        !isActive ? handleAdd(data): handleRemove(data);
        setIsActive(!isActive)
    }

    const handleAdd = (data) => {
        if(library === 'librarySong') {
            dispatch(actions.addSongToLibrary(data))
        }
        else if(library === 'libraryPlaylist') {
            dispatch(actions.addPlaylistToLibrary(data))
        }
    }

    const handleRemove = (data) => {
        if(library === 'librarySong') {
            const position = librarySong.findIndex(song => song.encodeId === data.encodeId);
            librarySong.splice(position, 1);
            zingStorage.setLibrarySong(librarySong);
        }
        else if(library === 'libraryPlaylist') {
            const position = libraryPlaylist.findIndex(playlist => playlist.encodeId === data.encodeId);
            libraryPlaylist.splice(position, 1);
            zingStorage.setLibraryPlaylist(libraryPlaylist);
        }
    }

    
    const icon = () => {
        return(
            <span className={cx('icon')}>
                <i className="fal fa-heart"></i>    
            </span>
        )
    }
    const active_icon = () => {
        return(
            <span className={cx('icon', 'active-icon')}>
                <i className="fas fa-heart"></i>    
            </span>
        )
    }


    return (  
        <>
            <Tippy
                content={title}
                hideOnClick='true'
            >
                <button className={cx('wrapper', {active: isActive, activeNoColor})} onClick={handleClick}>
                    {icon()}
                    {active_icon()}
                </button>
            </Tippy>
        </>
    );
}

export default HeartIcon;