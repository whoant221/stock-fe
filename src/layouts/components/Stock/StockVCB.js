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

function StockVCB( polling = 1000 ) {
    const dispatch = useDispatch();
    const [VCB, setVCB] = useState();
    const [priceVCB, setPriceVCB] = useState();
    const [askVCB, setAskVCB] = useState();
    const [bidVCB, setBidVCB] = useState();

    const [orderBookAskVCB, setOrderBookAskVCB] = useState();
    const [orderBookBidVCB, setOrderBookBidVCB] = useState();

    useEffect(() => {
        // setInterval(() => {
            const money = async ()  =>{
                try{
                    const data3 = await inforStock.getVCB()
                    const data6 = await inforStock.getPriceVCB()
                    const data11 = await inforStock.getOrderAskVCB()
                    const data12 = await inforStock.getOrderBidVCB()
                    setVCB(data3.data);
                    setPriceVCB(data6.data)
                    setAskVCB(data11.data.orders)
                    setBidVCB(data12.data.orders)
                }
                catch (err) {
                    // window.location.reload();
                }
            }
            money()
        // }, 300);

        const orderBook = async () => {
            try{
                const data1 = await inforStock.getOrderBookAskVCB()
                const data2 = await inforStock.getOrderBookBidVCB()
                setOrderBookAskVCB(data1.data.orders);
                setOrderBookBidVCB(data2.data.orders);
            }
            catch (err) {
                console.log(err);
            }
        }
        orderBook()

    }, [VCB || priceVCB || askVCB || bidVCB]);

    const vcb =() => {
        dispatch(actions.setLayout(true))
        dispatch(actions.setNameBank('VCB'))
        dispatch(actions.setDetailBank(VCB))
        dispatch(actions.setOrderBookAsk( orderBookAskVCB))
        dispatch(actions.setOrderBookBid( orderBookBidVCB))
        dispatch(actions.setPriceStock(priceVCB))
    }

    const chartVCB = async ()  =>{
        try{
            const res = await inforStock.getChartVCB()
            blockChainStorage.setCharTBank(res.data.charts)
            dispatch(actions.setLayout(''))
            dispatch(actions.setNameBank('VCB'));
            dispatch(actions.setDetailBank(VCB))
            dispatch(actions.setOrderBookAsk( orderBookAskVCB))
            dispatch(actions.setOrderBookBid( orderBookBidVCB))
            dispatch(actions.setPriceStock(priceVCB))
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
        {VCB && priceVCB && askVCB && bidVCB?
        <tr>     
            <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
            <Tippy 
            content='Công ty | ACBsdasdasd' 
            arrow={false}
            followCursor={true}
            plugins={[followCursor]} 
            theme={'tomato'}>
                <th className={cx('left', 'green')} onClick={chartVCB}> VCB </th> 
            </Tippy>
            <th className={cx('right', 'violet', 'set_light')} onClick={vcb}>{VCB.floor_price}</th>
            <th className={cx('right', 'blue', 'set_light')} onClick={vcb}>{VCB.ceil_price}</th>
            <th className={cx('right', 'yellow', 'set_light')} onClick={vcb}>{VCB.ref_price}</th>

            {bidVCB.length == 2 ?  
                <>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th> 
                </>
            :null}

            {bidVCB.length == 0 ?  
                <>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                </>                                   
            :bidVCB.length == 1 ? 
                bidVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>

                        </>
                    )
                })
            :bidVCB.length == 2 ?
                bidVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :bidVCB.length == 3 ?
                bidVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :null}


            <th className={cx('right', 'set_light', 'green')} onClick={vcb}>{ priceVCB.price_per_unit === undefined ? 0 : priceVCB.price_per_unit}</th>
            <th className={cx('right', 'set_light', 'green')} onClick={vcb}>{priceVCB.coin_amount === undefined ? 0 : priceVCB.coin_amount}</th>
   

            
            {askVCB.length == 0 ?
                <>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                </>                                   
            :askVCB.length == 1 ? 
                askVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                            <th className={cx('right', 'green')} onClick={vcb}>-</th>
                        </>
                    )
                })
            :askVCB.length == 2 ?
                askVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :askVCB.length == 3 ?
                askVCB.map((items, index) => {
                    return(
                        <>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.price_per_unit}</th>
                            <th className={cx('right', 'green')} onClick={vcb}>{items.coin_amount}</th>
                        </>
                    )
                })
            :null}

            {askVCB.length == 2 ?  
                <>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th>
                    <th className={cx('right', 'green')} onClick={vcb}>-</th> 
                </>
            :null}

            <th className={cx('right', 'set_light')} onClick={vcb}>{VCB.total_volume}</th>
            <th className={cx('right', 'set_light', 'green')} onClick={vcb}>{VCB.highest_price}</th>
            <th className={cx('right', 'set_light', 'green')} onClick={vcb}>
                {VCB.lowest_price == 99999999 ? '0' : VCB.lowest_price}
            </th>
        </tr> 
        :null}
    </Tippy>
  )
}

export default StockVCB