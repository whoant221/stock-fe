import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from '../User.module.scss';
import Playlist from "~/components/Playlist";
import images from "~/images";

const cx = classNames.bind(styles)

function UserPlaylist() {
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

    return ( 
        <div className={cx('child-container')}>
            <nav className={cx('navbar-wrap')}>
                <div className={cx('navbar-container')}>
                    <h4 className={cx('title')}>Playlist</h4>
                    <nav>
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='#'>
                            Tất cả
                        </NavLink>
                    </nav>
                </div>
            </nav>
            <div className={cx('list-playlist')}>
                <div className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'>
                    <div className={cx('empty-playlist')}>
                        <div className={cx('content')}>
                            <i className="fal fa-plus-circle"></i>
                            <span>Tạo playlist mới</span>
                        </div>
                    </div>
                </div>
                {userPlaylists.map((playlist) => {
                        return (
                            <Playlist 
                                key={playlist.id}
                                className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
     );
}

export default UserPlaylist;