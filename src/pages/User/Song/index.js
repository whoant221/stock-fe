import styles from '../User.module.scss';
import zingStorage from "~/utils/storage";
import MusicItemUser from "~/components/MusicItemUser";
import classNames from "classnames/bind";
const cx = classNames.bind(styles)

function UserSong() {

    const mySongs = zingStorage.getLibrarySong()?.slice().reverse() || []
    console.log(mySongs);

    return (
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
                    {mySongs.map((song,index) => {
                        return (
                            <MusicItemUser
                                key={index}
                                song={song}
                            />
                        )   
                    })}
                </div>
            </div>
        </div>
    );
}

export default UserSong;