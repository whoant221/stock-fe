<<<<<<< HEAD
import axios from 'axios';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 16bf490960f21f3970e36edd7c8710fb5d6e7c47
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Loading from '../Zingchart/Loading/Loading';
import MusicItem from '../Zingchart/MusicItem/MusicItem';
import styles from './NhacMoi.module.scss';
import axios from 'axios';

import Icon from '~/components/Icon';
import MusicItem from '~/components/MusicItem';

const cx = classNames.bind(styles);

function Nhacmoi() {
<<<<<<< HEAD
    const [music, setMusic] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios
                .get(`https://apizingmp3.herokuapp.com/api/newreleasechart`)
                .then((res) => res.data.data);
            setMusic(data);
        };
        fetchData();

        document.title = '#zingchart tuần, #zingchart Zing - Bài hát';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur')}></div>
            <div className={cx('alpha')}></div>
            <div className={cx('alpha1')}></div>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h1>Nhạc Mới</h1>
                    <span>
                        <i className='fas fa-play'></i>
                    </span>
                </div>
                <div>
                    {music.items ? (
                        music.items.map((item, index) => (
                            <LazyLoadComponent key={index}>
                                <MusicItem
                                    num={index + 1}
                                    title={item.title}
                                    name={item.album ? item.album.title : ''}
                                    artistsNames={item.artistsNames}
                                    thumbnail={
                                        item.thumbnail || item.thumbnailM
                                    }
                                />
                            </LazyLoadComponent>
                        ))
                    ) : (
                        <div>
                            <Loading />
                            <Loading />
                        </div>
                    )}
                </div>
                <div className={cx('space')}>

=======
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
>>>>>>> 16bf490960f21f3970e36edd7c8710fb5d6e7c47
                </div>
            </div>
        </div>
    );
}

export default Nhacmoi;
