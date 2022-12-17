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

function StockTCB(polling = 1000) {
    const dispatch = useDispatch();
    const [TCB, setTCB] = useState();
    const [priceTCB, setPriceTCB] = useState();
    const [askTCB, setAskTCB] = useState();
    const [bidTCB, setBidTCB] = useState();

    const [orderBookAskTCB, setOrderBookAskTCB] = useState();
    const [orderBookBidTCB, setOrderBookBidTCB] = useState();

    useEffect(() => {
        // setInterval(() => {
            const money = async ()  =>{
                try{
                    const data2 = await inforStock.getTCB()
                    const data5 = await inforStock.getPriceTCB()
                    const data9 = await inforStock.getOrderAskTCB()
                    const data10 = await inforStock.getOrderBidTCB()

                    setTCB(data2.data);
                    setPriceTCB(data5.data)
                    setAskTCB(data9.data.orders)
                    setBidTCB(data10.data.orders)
                }
                catch (err) {
                    window.location.reload();
                }
            }
            money()
        // }, 300);
        const orderBook = async () => {
            try{
                const data1 = await inforStock.getOrderBookAskTCB()
                const data2 = await inforStock.getOrderBookBidTCB()
                setOrderBookAskTCB(data1.data.orders);
                setOrderBookBidTCB(data2.data.orders);
            }
            catch (err) {
                console.log(err);
            }
        }
        orderBook()
    }, [TCB || priceTCB || askTCB || bidTCB]);

    const tcb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('TCB'));
        dispatch(actions.setDetailBank(TCB))
        dispatch(actions.setOrderBookAsk( orderBookAskTCB))
        dispatch(actions.setOrderBookBid( orderBookBidTCB))
        dispatch(actions.setPriceStock(priceTCB))
    }

    const chartTCB = async ()  =>{
        try{
            const res = await inforStock.getChartTCB()
            blockChainStorage.setCharTBank(res.data.charts)
            dispatch(actions.setLayout(''))
            dispatch(actions.setNameBank('TCB'));
            dispatch(actions.setDetailBank(TCB))
            dispatch(actions.setOrderBookAsk( orderBookAskTCB))
            dispatch(actions.setOrderBookBid( orderBookBidTCB))
            dispatch(actions.setPriceStock(priceTCB))
        }
        catch (err) {
            console.log(err);
        }
    }

  return (
    <Tippy 
    content='Click để đặt lệnh' 
    arrow={false}
    followCursor={true}
    plugins={[followCursor]} 
    theme={'table'}
    >
        {TCB && priceTCB && askTCB && bidTCB?
        <tr>     
            <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
            <Tippy 
            content='Công ty | ACBsdasdasd' 
            arrow={false}
            followCursor={true}
            plugins={[followCursor]} 
            theme={'tomato'}>
                <th className={cx('left', 'red')} onClick={chartTCB}> TCB </th> 
            </Tippy>
            <th className={cx('right', 'violet', 'set_light')} onClick={tcb}>{TCB.floor_price}</th>
            <th className={cx('right', 'blue', 'set_light')} onClick={tcb}>{TCB.ceil_price}</th>
            <th className={cx('right', 'yellow', 'set_light')} onClick={tcb}>{TCB.ref_price}</th>

            {bidTCB.length == 2 ?  
                <>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th> 
                </>
            :null}

            {bidTCB.length == 0 ?  
                <>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                </>                                   
            :bidTCB.length == 1 ? 
                bidTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
 
                        </>
                    )
                })
            :bidTCB.length == 2 ?
                bidTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :bidTCB.length == 3 ?
                bidTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :null}





            <th className={cx('right', 'set_light', 'red')} onClick={tcb}>{ priceTCB.price_per_unit === undefined ? 0 : priceTCB.price_per_unit}</th>
            <th className={cx('right', 'set_light', 'red')} onClick={tcb}>{priceTCB.coin_amount === undefined ? 0 : priceTCB.coin_amount}</th>







            {askTCB.length == 0 ?  
                <>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                </>                                   
            :askTCB.length == 1 ? 
                askTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                            <th className={cx('right', 'red')} onClick={tcb}>-</th>
                        </>
                    )
                })
            :askTCB.length == 2 ?
                askTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :askTCB.length == 3 ?
                askTCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'red')} onClick={tcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :null}

            
            {askTCB.length == 2 ?  
                <>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th>
                    <th className={cx('right', 'red')} onClick={tcb}>-</th> 
                </>
            :null}

            <th className={cx('right', 'set_light')} onClick={tcb}>{TCB.total_volume}</th>
            <th className={cx('right', 'set_light', 'red')} onClick={tcb}>{TCB.highest_price}</th>
            <th className={cx('right', 'set_light', 'red')} onClick={tcb}>
                {TCB.lowest_price == 99999999 ? '0' : TCB.lowest_price}
            </th>
        </tr> 
        
        :null}
    </Tippy>
  )
}

export default StockTCB