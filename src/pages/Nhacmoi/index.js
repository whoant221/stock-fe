import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NhacMoi.module.scss';
import axios from 'axios';

import Icon from '~/components/Icon';
import MusicItem from '~/components/MusicItem';

const cx = classNames.bind(styles);

function Nhacmoi() {
    const [newSongs, setNewSongs] = useState()

    useEffect(() => {
        function getNewSongs() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/newreleasechart`)
                .then((res) => {
                    setNewSongs(res.data.data.items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getNewSongs()   
    }, [])

    return (
        <div className={cx('wrapper')} >
            <div className={cx('banner')}>
                <div className={cx('blur')}></div>
                <div className={cx('alpha')}></div>
                <div className={cx('alpha1')}></div>
            </div>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>
                    Nhạc Mới
                    <Icon
                        btn
                        className={cx('icon-play')}
                        hover activeNoColor
                        icon={<i className="fas fa-play"></i>}
                    />
                </h2>
                <div className={cx('mb-5')}>
                    {
                        newSongs?.map((song, index) => (
                            <MusicItem 
                                key={song.encodeId}
                                song={song}
                                ranking
                                number={index+ 1}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Nhacmoi;
