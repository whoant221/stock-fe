import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';
import { Chart } from './chart';
import Loading from './Loading/Loading';
import MusicItem from './MusicItem/MusicItem';
import TopMusic from './TopMusic/TopMusic';
import styles from './Zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
    const [music, setMusic] = useState([]);
    const [chartInfo, setChartInfo] = useState();
    const [visible, setVisible] = useState(10);
    const [offBtn, setOffBtn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios
                .get(`https://apizingmp3.herokuapp.com/api/charthome`)
                .then((res) => res.data.data);
            setMusic(data);
            setChartInfo(data.RTChart.chart);
        };
        fetchData();

        document.title =
            '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, []);
    const handleShowMoreItems = () => {
        setVisible((prev) => prev + 90);
        setOffBtn(true);
    };
    console.log(music.weekChart);
    return (
        <div>
            <div className={cx('wrapper-chart')}>
                <div className={cx('blur')}></div>
                <h1>#zingchart </h1>
                <div className={cx('chart')}>
                    {chartInfo && <Chart chart={chartInfo} />}
                </div>
            </div>
            <div className={cx('list-music')}>
                {music.RTChart ? (
                    music.RTChart.items.slice(0, visible).map((item, index) => (
                        <LazyLoadComponent key={index}>
                            <MusicItem
                                num={index + 1}
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
                    </div>
                )}
                {!offBtn && (
                    <div className={cx('btn-box')}>
                        <button
                            onClick={handleShowMoreItems}
                            className={cx('btn')}
                        >
                            Xem top 100
                        </button>
                    </div>
                )}
            </div>
            {music.weekChart ? (
                <div className={cx('top-100')}>
                    <div className={cx('blur')}></div>
                    <div className={cx('alpha')}></div>
                    <div className={cx('title')}>
                        <Link to='/zing-chart'>Bảng Xếp Hạng Tuần</Link>
                    </div>
                    <div className={cx('top-board')}>
                        <TopMusic
                            to='/zing-chart/top100'
                            country='Việt Nam'
                            data={music.weekChart.vn}
                        />
                        <TopMusic
                            to='/zing-chart/top100'
                            country='US-UK'
                            data={music.weekChart.us}
                        />
                        <TopMusic
                            to='/zing-chart/top100'
                            country='K-Pop'
                            data={music.weekChart.korea}
                        />
                    </div>
                </div>
            ) : (
                <div className={cx('loading-img')}></div>
            )}
        </div>
    );
}

export default Zingchart;
