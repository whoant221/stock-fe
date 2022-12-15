import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import blockChainStorage from '~/utils/storage';
import inforStock from "~/api/inforStock";
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
const cx = classNames.bind(styles);

function Table( polling = 5000) {
    const dispatch = useDispatch();

    const [colorGreen, setColorGreen] = useState('green');
    const [colorRed, setColorRed] = useState('red');
    const [colorYellow, setColorYellow] = useState('yellow');

    const [ACB, setACB] = useState();
    const [TCB, setTCB] = useState();
    const [VCB, setVCB] = useState();

    const [priceACB, setPriceACB] = useState();
    const [priceTCB, setPriceTCB] = useState();
    const [priceVCB, setPriceVCB] = useState();

    const [askACB, setAskACB] = useState();
    const [bidACB, setBidACB] = useState();
    const [askTCB, setAskTCB] = useState();
    const [bidTCB, setBidTCB] = useState();
    const [askVCB, setAskVCB] = useState();
    const [bidVCB, setBidVCB] = useState();

    useEffect(() => {
        setInterval(() => {
            const money = async ()  =>{
                try{
                    const data1 = await inforStock.getACB()
                    const data2 = await inforStock.getTCB()
                    const data3 = await inforStock.getVCB()

                    const data4 = await inforStock.getPriceACB()
                    const data5 = await inforStock.getPriceTCB()
                    const data6 = await inforStock.getPriceVCB()

                    const data7 = await inforStock.getOrderAskACB()
                    const data8 = await inforStock.getOrderBidACB()
                    const data9 = await inforStock.getOrderAskTCB()
                    const data10 = await inforStock.getOrderBidTCB()
                    const data11 = await inforStock.getOrderAskVCB()
                    const data12 = await inforStock.getOrderBidVCB()

                    setACB(data1.data);
                    setTCB(data2.data);
                    setVCB(data3.data);

                    setPriceACB(data4.data)
                    setPriceTCB(data5.data)
                    setPriceVCB(data6.data)
                    
                    setAskACB(data7.data.orders)
                    setBidACB(data8.data.orders)
                    setAskTCB(data9.data.orders)
                    setBidTCB(data10.data.orders)
                    setAskVCB(data11.data.orders)
                    setBidVCB(data12.data.orders)
                }
                catch (err) {
                    // console.log(err);
                }
            }
            money()
        }, 1000);
    }, []);

    const acb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('ACB'));
        dispatch(actions.setDetailBank(ACB))
    }

    const tcb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('TCB'));
        dispatch(actions.setDetailBank(TCB))
    }

    const vcb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('VCB'));
        dispatch(actions.setDetailBank(VCB))
    }

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

    const chartTCB = async ()  =>{
        try{
            const res = await inforStock.getChartTCB()
            blockChainStorage.setCharTBank(res.data.charts)
            dispatch(actions.setLayout(''))
            dispatch(actions.setNameBank('TCB'));
            dispatch(actions.setDetailBank(TCB))
        }
        catch (err) {
            console.log(err);
        }
    }

    const chartVCB = async ()  =>{
        try{
            const res = await inforStock.getChartVCB()
            blockChainStorage.setCharTBank(res.data.charts)
            dispatch(actions.setLayout(''))
            dispatch(actions.setNameBank('VCB'));
            dispatch(actions.setDetailBank(VCB))
        }
        catch (err) {
            console.log(err);
        }
    }
    
  return (
    <div className={cx('price-board-table')}>
        <div className={cx('ag-theme-dark')}>
            <div className={cx('ag-layout-normal')}>
                <div className={cx('ag-root-wrapper-body')}>
                    <table>
                        <thead>
                            <tr>  
                                <th rowSpan={2}> </th>  
                                <th rowSpan={2}>CK</th>  
                                <th rowSpan={2}>Trần</th>  
                                <th rowSpan={2}>Sàn</th>  
                                <th rowSpan={2}>TC</th>  
                                <th colSpan={6}>Bên mua</th>  
                                <th colSpan={2}>Khớp lệnh</th>  
                                <th colSpan={6}>Bên bán</th>  
                                <th rowSpan={2}>Tổng KL</th>  
                                <th rowSpan={2}>Cao</th>  
                                <th rowSpan={2}>Thấp</th>  
 
                            </tr>  
                            <tr>  
                                <td>Giá 3</td>  
                                <td>KL 3</td>  
                                <td>Giá 2</td>  
                                <td>KL 2</td>  
                                <td>Giá 1</td>  
                                <td>KL 1</td>  
                                <td>Giá</td>  
                                <td>KL</td>
                                <td>Giá 1</td>  
                                <td>KL 1</td>   
                                <td>Giá 2</td>  
                                <td>KL 2</td>   
                                <td>Giá 3</td>  
                                <td>KL 3</td> 
                        
                            </tr> 
                        </thead>
                        {ACB && TCB && VCB && priceACB && priceTCB && priceVCB && askACB && bidACB && askTCB && bidTCB && askVCB && bidVCB?
                        <tbody id={cx('customers')}>                        
   
                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorYellow)} onClick={chartACB}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={acb}>{ACB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={acb}>{ACB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={acb}>{ACB.ref_price}</th>

                                    {askACB.length == 0 ?  
                                        <>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                        </>                                   
                                    :askACB.length == 1 ? 
                                        askACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                </>
                                            )
                                        })
                                    :askACB.length == 2 ?
                                        askACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                </>
                                            )
                                        })
                                    :askACB.length == 3 ?
                                        askACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}

                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>{priceACB.price_per_unit === undefined ? 0 : priceACB.price_per_unit}</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>{priceACB.coin_amount === '' ? 0 : priceACB.coin_amount}</th>

                                    {bidACB.length == 0 ?  
                                        <>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                            <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                        </>                                   
                                    :bidACB.length == 1 ? 
                                        bidACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidACB.length == 2 ?
                                        bidACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidACB.length == 3 ?
                                        bidACB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorYellow)} onClick={acb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}


                                    <th className={cx('right', 'set_light')} onClick={acb}>{ACB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>{ACB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>
                                        {ACB.lowest_price == 99999999 ? '0' : ACB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>

                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorRed)} onClick={chartTCB}> TCB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={tcb}>{TCB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={tcb}>{TCB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={tcb}>{TCB.ref_price}</th>

                                    {askTCB.length == 0 ?  
                                        <>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                        </>                                   
                                    :askTCB.length == 1 ? 
                                        askTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                </>
                                            )
                                        })
                                    :askTCB.length == 2 ?
                                        askTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                </>
                                            )
                                        })
                                    :askTCB.length == 3 ?
                                        askTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}

                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>{ priceTCB.price_per_unit === undefined ? 0 : priceTCB.price_per_unit}</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>{priceTCB.coin_amount === undefined ? 0 : priceTCB.coin_amount}</th>

                                    {bidTCB.length == 0 ?  
                                        <>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                            <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                        </>                                   
                                    :bidTCB.length == 1 ? 
                                        bidTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidTCB.length == 2 ?
                                        bidTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidTCB.length == 3 ?
                                        bidTCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorRed)} onClick={tcb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}

                                    <th className={cx('right', 'set_light')} onClick={tcb}>{TCB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>{TCB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>
                                        {TCB.lowest_price == 99999999 ? '0' : TCB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>

                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorGreen)} onClick={chartVCB}> VCB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={vcb}>{VCB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={vcb}>{VCB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={vcb}>{VCB.ref_price}</th>

                                    {askVCB.length == 0 ?  
                                        <>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                        </>                                   
                                    :askVCB.length == 1 ? 
                                        askVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                </>
                                            )
                                        })
                                    :askVCB.length == 2 ?
                                        askVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                </>
                                            )
                                        })
                                    :askVCB.length == 3 ?
                                        askVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}

                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>{ priceVCB.price_per_unit === undefined ? 0 : priceVCB.price_per_unit}</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>{priceVCB.coin_amount === undefined ? 0 : priceVCB.coin_amount}</th>
                                    
                                    {bidVCB.length == 0 ?
                                        <>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                            <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                        </>                                   
                                    :bidVCB.length == 1 ? 
                                        bidVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidVCB.length == 2 ?
                                        bidVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                                </>
                                            )
                                        })
                                    :bidVCB.length == 3 ?
                                        bidVCB.map((items, index) => {
                                            return(
                                                <>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.price_per_unit}</th>
                                                    <th className={cx('right', colorGreen)} onClick={vcb}>{items.coin_amount}</th>
                                                </>
                                            )
                                        })
                                    :null}

                                    <th className={cx('right', 'set_light')} onClick={vcb}>{VCB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>{VCB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>
                                        {VCB.lowest_price == 99999999 ? '0' : VCB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>
                        </tbody>
                        :null}
                    </table>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table