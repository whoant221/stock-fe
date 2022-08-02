import { useState } from "react";
import classNames from "classnames/bind";

import Icon from "~/components/Icon";
import Media from "~/components/Media";
import styles from './SidebarRight.module.scss'

const cx = classNames.bind(styles)

function SidebarRight({playlistActive}) {

    const [activePlaylist, setActivePlaylist] = useState(true)
    const [activeHistory, setActiveHistory] = useState(false)

    const handleActivePlaylist = () => {
        if(!activePlaylist) {
            setActivePlaylist(true)
            setActiveHistory(false)
        }
    }
    const handleActiveHistory = () => {
        if(!activeHistory) {
            setActivePlaylist(false)
            setActiveHistory(true)
        }
    }

    return ( 
        <div className={cx('wrapper', {active: playlistActive})}>
            <div className={cx('header')}>
                <div className={cx('tabbars')}>
                    <div 
                        className={cx('tabbar-item', {active: activePlaylist})}
                        onClick={handleActivePlaylist}
                    >
                        <h5 className={cx('tabbar-heading')}>Danh sách phát</h5>
                    </div>
                    <div 
                        className={cx('tabbar-item', {active: activeHistory})}
                        onClick={handleActiveHistory}
                    >
                        <h5 className={cx('tabbar-heading')}>Nghe gần đây</h5>
                    </div>
                </div>
                <div className={cx('header-btn')}>
                    <Icon 
                        s14 hover
                        icon={<i className="fal fa-alarm-clock"></i>}
                    />
                </div>
                <div className={cx('header-btn')}>
                    <Icon 
                        hover
                        icon={<i className="far fa-ellipsis-h"></i>}
                    />
                </div>
            </div>
            <div className={cx('playlist-wrapper', 'playlist', {active: activePlaylist})}>
                <div className={cx('song-playing')}>
                    <Media 
                        image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                        songName="Nguời âm phủ"
                        singerName="OSAD"
                        isActive
                        mediaActive
                    />
                </div>
                <div className={cx('playlist-title')}>
                    <h3 className={cx('title')}>Tiếp theo</h3>
                    <h4 className={cx('subtitle')}>Từ playlist <span> Top 100 nhạc VPOP hay nhất</span></h4>
                </div>
                <div className={cx('next-songs')}>
                    <Media 
                        image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                        songName="Nguời âm phủ"
                        singerName="OSAD"
                    />
                    <Media 
                        image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                        songName="Nguời âm phủ"
                        singerName="OSAD"
                    />
                </div>
            </div>

            <div className={cx('playlist-wrapper', 'history-playlist', {active: activeHistory})}>
                <div className={cx('playlist')}>
                    <div className={cx('next-songs')}>
                        <Media 
                            image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                            songName="Nguời âm phủ"
                            singerName="OSAD"
                        />
                        <Media 
                            image='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp…over/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg'
                            songName="Nguời âm phủ"
                            singerName="OSAD"
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SidebarRight;