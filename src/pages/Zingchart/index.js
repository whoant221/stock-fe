import { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Zingchart.module.scss';
import { Chart } from './chart';

const cx = classNames.bind(styles);

function Zingchart() {
    const [music, setMusic] = useState([]);
    const [chartInfo, setChartInfo] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            await axios
                .get('https://apizingmp3.herokuapp.com/api/charthome')
                .then((res) => {
                    setMusic(res.data.data);
                    setChartInfo(res.data.data.RTChart.chart)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchApi()
    }, [])

    // console.log(chartInfo);

    useEffect(() => {
        document.title =
            '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, []);
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur')}></div>
            <h1>#zingchart </h1>
            <div className={cx('chart')}>
                
                {chartInfo && <Chart chart={chartInfo} />}
                
            </div>
        </div>
    );
}

export default Zingchart;
