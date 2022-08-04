import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";

import styles from './User.module.scss';
import Icon from "~/components/Icon";
import Playlist from "~/components/Playlist";
import images from "~/images";

const cx = classNames.bind(styles)

function User() {
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
                    <Playlist 
                        className='max-w-[25%] px-3 md:max-w-[20%] md:px-3.5'
                        name='Demo Playlist '
                        describe='Zing mp3 Demo Playlist Demo Playlist Demo Playlist Demo Playlist'
                        link='#'
                        iconLeft={<i className="fal fa-times"></i>}
                        titleIconLeft='Xóa'
                        image='https://photo-zmp3.zmdcdn.me/album_default.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default User;