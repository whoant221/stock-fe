import classNames from 'classnames/bind';
import { getChart } from 'nhaccuatui-api-full/dist';
import { useEffect, useState } from 'react';
import { Chart } from './chart';
import styles from './Zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const a = await getChart();
                setMusic(a.ranking.song);
            } catch (error) {
                alert(error);
            }
        };
        getDetails();
    }, []);
    useEffect(() => {
        document.title =
            '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur')}></div>
            <h1>#zingchart </h1>
            <div className={cx('chart')}>
                {/*  */}
                <Chart music={music} />
                {/*  */}
            </div>
        </div>
    );
}

export default Zingchart;
