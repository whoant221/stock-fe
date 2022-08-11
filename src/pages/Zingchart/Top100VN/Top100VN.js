import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Loading from '../Loading/Loading';
import MusicItem from '../MusicItem/MusicItem';

import classNames from 'classnames/bind';
import styles from './Top100VN.module.scss';

const cx = classNames.bind(styles);

const Top100VN = (props) => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios
                .get(`https://apizingmp3.herokuapp.com/api/charthome`)
                .then((res) => res.data.data);
            setMusic(data);
        };
        fetchData();

        document.title =
            '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, []);
    return (
        <div className={cx('wrapper')}>
            {music.weekChart ? (
                music.weekChart.vn.items.map((item, index) => (
                    <LazyLoadComponent key={index}>
                        <MusicItem
                            number={index + 1}
                            title={item.title}
                            name={item.album ? item.album.title : ''}
                            artistsNames={item.artistsNames}
                            thumbnail={item.thumbnail || item.thumbnailM}
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
    );
};

export default Top100VN;
