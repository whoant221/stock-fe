import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { NavLink } from 'react-router-dom';

import styles from '../User.module.scss';
import Icon from "~/components/Icon";
import Playlist from "~/components/Playlist";
import images from "~/images";
import Media from "~/components/Media";

const cx = classNames.bind(styles)

function UserSong() {
    //Fake user playlist
    const userPlaylists = [
        {
            id: 1,
            name: 'My playlist',
            describe: 'Zing mp3',
            image: images.defaultAvataAlbum,
            link: '#'
        },
        {
            id: 2,
            name: 'Demo',
            describe: 'Tuan, Thanh, Vu',
            image: images.defaultAvataSong,
            link: '#'
        }
    ]

    //fake library songs
    const mySongs = [
        {
            id: 'ahdn3kd',
            name: 'Người âm phủ',
            singer: 'OSAD',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id: 'fgf54',
            name: 'Có em chờ',
            singer: 'Min',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id: 'bgxdg3',
            name: 'Ánh sao và bầu trời',
            singer: 'T.R.I',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id: 'nvg56d',
            name: 'Yêu 5',
            singer: 'OSAD',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
    ]


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
                <h3 className={cx('title')}>
                    PLAYLIST
                    <Tippy content='Tạo playlist mới'>
                        <div className={cx('icon')}>
                            <Icon hover icon={<i className="fal fa-plus"></i>} />
                        </div>
                    </Tippy>
                </h3>
                <div className={cx('list-playlist')}>
                    {userPlaylists.map((playlist) => {
                        return (
                            <Playlist
                                key={playlist.id}
                                className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                                name={playlist.name}
                                describe={playlist.describe}
                                link={playlist.link}
                                image={playlist.image}
                                iconLeft={<i className="fal fa-times"></i>}
                                titleIconLeft='Xóa'
                            />
                        )
                    })}
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
                        <div className={cx('lib-header')}>
                            <h4 className={cx('lib-heading')}>Bài hát</h4>
                            <h4 className={cx('lib-heading')}>Thời gian</h4>
                        </div>
                        <div className={cx('song-list')}>
                            {mySongs.map(song => {
                                return (
                                    <div className={cx('song-item')}>
                                        <i className="fal fa-music"></i>
                                        <Media
                                            key={song.id}
                                            largeContent
                                            noHover
                                            image={song.thumbnail}
                                            songName={song.name}
                                            singerName={song.singer}
                                        />
                                        <span className={cx('time')}>{song.time}</span>
                                    </div>
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