import classNames from 'classnames/bind';
import SlideRadio from './SlideRadio';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Radio.module.scss'
const cx = classNames.bind(styles)

function Radio() {
    const [listRadio, setListRadio] = useState()
    useEffect(() => {
        function homePage5() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/home`, {params: {page: 5}})
                .then((res) => {
                    setListRadio(res.data.data.items[1].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        homePage5()

        document.title =
            'Radio | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, [])
    
    return <div className={cx('wrapper')}>
        <div className={cx('section')}>
            <div className={cx('list-slide')}>
                <SlideRadio listRadio={listRadio} />
            </div>
        </div>
    </div>;
}

export default Radio;