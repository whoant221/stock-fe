import React from 'react'
import Media from "~/components/Media";
import styles from '../../User.module.scss';
import images from "~/images";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function HistorySong() {
    const recentPlaylists = [
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
    const recentSongs = [
        {
            id:'ahdn3kd',
            name: 'Người âm phủ',
            singer: 'OSAD',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id:'fgf54',
            name: 'Có em chờ',
            singer: 'Min',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id:'bgxdg3',
            name: 'Ánh sao và bầu trời',
            singer: 'T.R.I',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
        {
            id:'nvg56d',
            name: 'Yêu 5',
            singer: 'OSAD',
            time: '03:15',
            thumbnail: images.defaultAvataSong
        },
    ]
  return (
    <div className={cx('song-list')}>
        {recentSongs.map(song => {
            return (
                <div className={cx('song-item')}>
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
  )
}

export default HistorySong