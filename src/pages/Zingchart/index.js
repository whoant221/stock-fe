import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Zingchart.module.scss';
import { Chart } from './chart';
import { getChart, getHome } from 'nhaccuatui-api-full/dist';
import ListMusic from './ListMusic/ListMusic';

const cx = classNames.bind(styles);

function Zingchart() {
    const [music, setMusic] = useState([]);
    const [key, setKey] = useState('');

    useEffect(() => {
        document.title =
            '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';

        const getDetails2 = async () => {
            try {
                const a = await getChart();
                setMusic(a.ranking.song);
            } catch (error) {
                alert(error);
            }
        };
        getDetails2();
        const getDetails = async () => {
            try {
                const s = await getHome();
                setKey(s.top100[0].key);
            } catch (error) {
                alert(error);
            }
        };
        getDetails();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur')}></div>
            <h1>#zingchart </h1>
            <div className={cx('chart')}>
                <Chart music={music} />
            </div>
            <ListMusic list={key} />
        </div>
    );
}

export default Zingchart;
