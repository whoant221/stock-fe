import classNames from 'classnames/bind';
import SlideRadio from './SlideRadio';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Radio.module.scss'
import Loading from './Loading/Loading';
const cx = classNames.bind(styles)

function Radio() {
    const [listRadio, setListRadio] = useState()
    useEffect(() => {
        function homePage5() {
            axios   
                .get('https://zingmp3.vn/api/v2/app/get/config?ctime=1660314862&version=1.7.20&sig=160fa8a4f9115b0f4712b5ae1a7e15b43747f8cdd6076f8646f740550e6b42a0ec9a823e76c5719bf0d9c246a25dc55247c6df28a35c4cbc5e44cf1292d5e50c&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y&fbclid=IwAR3UiPSxjiZQKWDmG6F53X9Z1XW90QSt8H7iLWx_mCcwn6T8WkThRg9etvI')
                .then((res) => {
                    // setListRadio(res.data.data.items[1].items)
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        homePage5()

        document.title =
            'Radio | Xem bài hát, album, MV đang hot nhất hiện tại';
    }, [])

    const renderLoading = () => {
        if(listRadio){
            return(
                <div className={cx('wrapper')}>
                    <div className={cx('section')}>
                        <div className={cx('list-slide')}>
                            <SlideRadio listRadio={listRadio} />
                        </div>
                    </div>
                </div>
            )
        }else return <><Loading/></>
    } 
     
    return <>{renderLoading()}</>
}

export default Radio;