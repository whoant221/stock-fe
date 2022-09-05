import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

import styles from '../User.module.scss';
import Icon from "~/components/Icon";
import Playlist from "~/components/Playlist";
import zingStorage from "~/utils/storage";
import MusicItem from "~/components/MusicItem";

const cx = classNames.bind(styles)

function UserSong() {

    useEffect(() => {
        axios.get('https://zingmp3.vn/api/v2/app/get/config?ctime=1660314862&version=1.7.20&sig=160fa8a4f9115b0f4712b5ae1a7e15b43747f8cdd6076f8646f740550e6b42a0ec9a823e76c5719bf0d9c246a25dc55247c6df28a35c4cbc5e44cf1292d5e50c&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y&fbclid=IwAR3Ype2BR5xp3D_Cj3mmZO8PzPyxub-iO8RTj45bjtfMjoYOFf6rjac_ijM') 
        .then(res => {
            console.log(res);
        })
    }, [])
    //.slice().reverse(): đảo ngược mảng mà không thay đổi mảng ban đầu
    const userPlaylists = zingStorage.getLibraryPlaylist()?.slice().reverse() || []

    const mySongs = zingStorage.getLibrarySong()?.slice().reverse() || []

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>
                Thư viện
                <Icon
                    btn
                    className={cx('icon-play')}
                    hover activeNoColor
                    icon={<i className="fas fa-play"></i>}
                />
            </h2>
            <div className={cx('playlist-wrapper')}>
                <div className={cx('header', 'flex justify-between')}>
                    <h3 className={cx('title')}>
                        PLAYLIST
                        <Tippy content='Tạo playlist mới'>
                            <div className={cx('icon')}>
                                <Icon hover icon={<i className="fal fa-plus"></i>} />
                            </div>
                        </Tippy>
                    </h3>
                    <Link to={"/user/playlist"} className={cx('section-link')}>Tất cả</Link>
                </div>
                <div className={cx('list-playlist')}>
                    {userPlaylists.map((playlist, index) => {
                        if(index<5) {
                            return (
                                <Playlist
                                    key={playlist.encodeId}
                                    className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                                    name={playlist.title}
                                    describe={playlist.sortDescription}
                                    link={"#"}
                                    image={playlist.thumbnail || playlist.thumbnailM}
                                    data={playlist}
                                />
                            )
                        }
                    })}
                    <Playlist
                        key={0}
                        className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                        name='For U'
                        describe='Zing mp3'
                        link={"#"}
                    />
                </div>
            </div>
            <div className={cx('songs-wrapper')}>
                <div className={cx('nav-wrapper')}>
                    <nav className={cx('nav-list')}>
                        <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to='/user/music/song'>
                            <h5 className={cx('nav-title')}>Bài hát</h5>
                        </NavLink>
                        <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to='/user/music/podcast'>
                            <h5 className={cx('nav-title')}>Podcast</h5>
                        </NavLink>
                        <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to='/user/music/album'>
                            <h5 className={cx('nav-title')}>Album</h5>
                        </NavLink>
                        <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to='/user/music/mv'>
                            <h5 className={cx('nav-title')}>MV</h5>
                        </NavLink>
                    </nav>
                </div>
                <div>
                    <a href="#" className={cx('nav-btn', 'active')}>Yêu thích</a>
                    <div className={cx('library-song')}>
                        <div className={cx('lib-header', 'media')}>
                            <div className={cx('media-left')}>
                                <h4 className={cx('lib-heading')}>Bài hát</h4>
                            </div>
                            <div className={cx('media-content')}>
                                <h4 className={cx('lib-heading')}>Album</h4>
                            </div>
                            <div className={cx('media-right')}>
                                <h4 className={cx('lib-heading')}>Thời gian</h4>
                            </div>
                        </div>
                        <div className={cx('song-list')}>
                            {mySongs.map(song => {
                                return (
                                    <MusicItem 
                                        key={song.end}
                                        song={song}
                                    />
                                )   
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSong;