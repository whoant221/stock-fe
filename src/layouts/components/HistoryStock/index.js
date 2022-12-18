import classNames from 'classnames/bind';
import styles from './HistoryStock.module.scss';
import inforStock from '~/api/inforStock';
import React from 'react'
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import moment from 'moment';
const cx = classNames.bind(styles);


function HistoryStock() {
    const [listrender, setListrender] = useState();
    const id = useSelector(state => state.header.name)
    
    useEffect(() => {
        const HistoryStock = async () => {
            try {
                const res = await inforStock.getHistoryStock(`${id[1]}`);
                setListrender(res.data.orders);
            } catch (error) {
                console.log(error);
            }
        };
        HistoryStock();
    },[id[1]])

  return (
    <div className={cx('trades')}>
        <div className={cx('area-title')}>Giao dịch thị trường</div>
        <div className={cx('area-thead')}>
            <div className={cx('item-td')}>Giá</div>
            <div className={cx('item-td', 'a-right')}>Số lượng</div>
            <div className={cx('item-td', 'a-right')}>Thời gian</div>
        </div>
        <div className={cx('area-tbody')}>
            <div className={cx('orderbook-progress')}>
                {listrender ? listrender.map((items, index) => {
                    return(
                        <div className={cx('item-tr')} key={index}>
                            <div className={cx(items.type === 'ask' ? 'c-up' : 'c-down')}>{items.price_per_unit}</div>
                            <div className={cx('a-right')}>{items.original_coin_amount}</div>
                            <div className={cx('a-right')}>{moment(items.matched_at).utc().format('HH:mm')}</div>
                        </div>
                    )})

                : null }
            </div>
        </div>
    </div>
  )
}

export default HistoryStock