import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import blockChainStorage from '~/utils/storage';
import inforStock from "~/api/inforStock";
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
import styles from './Stock.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function StockACB(polling = 1000) {
    const dispatch = useDispatch();

    const [ACB, setACB] = useState();
    const [priceACB, setPriceACB] = useState();
    const [askACB, setAskACB] = useState();
    const [bidACB, setBidACB] = useState();

    useEffect(() => {
            const money = async ()  =>{
                try{
                    const data1 = await inforStock.getACB()
                    const data4 = await inforStock.getPriceACB()
                    const data7 = await inforStock.getOrderAskACB()
                    const data8 = await inforStock.getOrderBidACB()
                    setACB(data1.data)
                    setPriceACB(data4.data)  
                    setAskACB(data7.data.orders)
                    setBidACB(data8.data.orders)
                }
                catch (err) {
                    // console.log(err);
                }
            }
            money()
    }, [ACB || priceACB || askACB || bidACB]);

    const chartACB = async ()  =>{
        try{
            const res = await inforStock.getChartACB()
            blockChainStorage.setCharTBank(res.data.charts)
            dispatch(actions.setLayout(''))
            dispatch(actions.setNameBank('ACB'));
            dispatch(actions.setDetailBank(ACB))
        }
        catch (err) {
            console.log(err);
        }
    }

    const acb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('ACB'));
        dispatch(actions.setDetailBank(ACB))
    }

  return (
    <Tippy 
    content='Click để đặt lệnh' 
    arrow={false}
    followCursor={true}
    plugins={[followCursor]} 
    theme={'table'}
    >
        {ACB && priceACB && askACB && bidACB?
        <tr>     
            <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
            <Tippy 
            content='Công ty | ACBsdasdasd' 
            arrow={false}
            followCursor={true}
            plugins={[followCursor]} 
            theme={'tomato'}>
                <th className={cx('left', 'yellow')} onClick={chartACB}> ACB </th> 
            </Tippy>
            <th className={cx('right', 'violet', 'set_light')} onClick={acb}>{ACB.floor_price}</th>
            <th className={cx('right', 'blue', 'set_light')} onClick={acb}>{ACB.ceil_price}</th>
            <th className={cx('right', 'yellow', 'set_light')} onClick={acb}>{ACB.ref_price}</th>

            {askACB.length == 2 ?  
                <>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th> 
                </>
            :null}

            {askACB.length == 0 ?  
                <>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                </>                                   
            :askACB.length == 1 ? 
                askACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>

                        </>
                    )
                })
            :askACB.length === 2 ?
                askACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>
                        </>
                    )
                }).reverse()
            :askACB.length == 3 ?
                askACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>
                        </>
                    )
                }).reverse()
            :null}

            <th className={cx('right', 'set_light', 'yellow')} onClick={acb}>{priceACB.price_per_unit === undefined ? 0 : priceACB.price_per_unit}</th>
            <th className={cx('right', 'set_light', 'yellow')} onClick={acb}>{priceACB.coin_amount === '' ? 0 : priceACB.coin_amount}</th>

            {bidACB.length == 0 ?  
                <>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                </>                                   
            :bidACB.length == 1 ? 
                bidACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                        </>
                    )
                })
            :bidACB.length == 2 ?
                bidACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :bidACB.length == 3 ?
                bidACB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'yellow')} onClick={acb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :null}

            {bidACB.length == 2 ?  
                <>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th>
                    <th className={cx('right', 'yellow')} onClick={acb}>-</th> 
                </>
            :null}
            

            <th className={cx('right', 'set_light')} onClick={acb}>{ACB.total_volume}</th>
            <th className={cx('right', 'set_light', 'yellow')} onClick={acb}>{ACB.highest_price}</th>
            <th className={cx('right', 'set_light', 'yellow')} onClick={acb}>
                {ACB.lowest_price == 99999999 ? '0' : ACB.lowest_price}
            </th>
        </tr> 
        :null}
    </Tippy>
  )
}

export default StockACB