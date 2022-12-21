import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../redux/actions';
import blockChainStorage from '~/utils/storage';
import inforStock from "~/api/inforStock";
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
import styles from './Stock.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function StockACB(polling = 1000) {

    const id = useSelector(state => state.header.name)
    
    const dispatch = useDispatch();

    const [ACB, setACB] = useState();
    const [priceACB, setPriceACB] = useState();
    const [askACB, setAskACB] = useState();
    const [bidACB, setBidACB] = useState();
    const [color, setcolor] = useState('yellow');

    const [listStock, setinforStock] = useState();
    const [infoStock, setInfoStock] = useState('');


    useEffect(() => {
        // setInterval(() => {
            const money = async ()  =>{
                try{   
                    const arr = []
                    const data3 = await inforStock.getListStock()
                    
                    const listStocksymbol = data3.data.stocks;

                    const listDetail = await Promise.all(listStocksymbol.map((item) => {return inforStock.getinforStock(item.symbol);}));
                    const listDetail1 = await Promise.all(listStocksymbol.map((item) => {return inforStock.getPrice(item.symbol);}));
                    const listDetail2 = await Promise.all(listStocksymbol.map((item) => {return inforStock.getOrderAsk(item.symbol);}));
                    const listDetail3 = await Promise.all(listStocksymbol.map((item) => {return inforStock.getOrderBid(item.symbol);}));
                    listStocksymbol.map((i) => {
                        arr.push([{
                            symbol: `${i.symbol}`,
                            name: `${i.name}`,
                        }]);
                    })
                    listDetail.map((i, index) => {
                        arr[index].push({
                            ceil_price: `${i.data.ceil_price}`,
                            floor_price: `${i.data.floor_price}`,
                            ref_price: `${i.data.ref_price}`,
                            total_volume: `${i.data.total_volume}`,
                            highest_price: `${i.data.highest_price}`,
                            lowest_price: `${i.data.lowest_price}`,
                        });
                    })
                    listDetail1.map((i, index) => {
                        arr[index].push({
                            coin_amount: `${i.data.coin_amount}`,
                            price_per_unit: `${i.data.price_per_unit}`,
                        });
                    })
                    listDetail2.map((i, index) =>arr[index].push(
                        i.data.orders.map(it => it ))
                    )
                    listDetail3.map((i, index) =>arr[index].push(
                        i.data.orders.map(it => it ))
                    )
                    setinforStock(arr);
                }
                catch (err) {
                    window.location.reload();
                }
            }
            money()
        // }, 300);
        const orderBook = async () => {
            try{
                const data1 = await inforStock.getOrderBookAsk(`${id[1] ? id[1] : 'ACB'}`)
                const data2 = await inforStock.getOrderBookBid(`${id[1] ? id[1] : 'ACB'}`)
                dispatch(actions.setOrderBookAsk(data1.data.orders));
                dispatch(actions.setOrderBookBid(data2.data.orders));
            }
            catch (err) {
                console.log(err)
            }
        }
        orderBook()
    }, [listStock]);

    const chartACB = async(e)  =>{
        try{
            const res = await inforStock.getChart(e)
            blockChainStorage.setCharTBank(res.data.charts)
        }
        catch (err) {
            console.log(err);
        }
        dispatch(actions.setLayout(''))
        dispatch(actions.setNameBank(e));
    }

    const acb =(e) => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank(e));
    }


  return (
    <tbody id={cx('customers')}>
        {listStock ? listStock.map((i, index) => (
            <Tippy  
            content='Click để đặt lệnh' 
            arrow={false}
            followCursor={true}
            plugins={[followCursor]} 
            theme={'table'}
            key ={ index }
            >
                <tr className={cx('tr')}>     
                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                    <Tippy 
                    content={`Công ty | ${i[0].name}`} 
                    arrow={false}
                    followCursor={true}
                    plugins={[followCursor]} 
                    theme={'tomato'}>
                        <th className={cx('left', color)} onClick={e => {chartACB( i[0].symbol)} }> {i[0].symbol} </th> 
                    </Tippy>
                    
                    <th className={cx('right', 'blue', 'set_light')} onClick={e => {acb( i[0].symbol)} }>
                        {i[1].ceil_price === 'undefined' ? '-' : parseFloat(i[1].ceil_price).toFixed(2) }
                    </th>
                    <th className={cx('right', color, 'set_light')} onClick={e => {acb( i[0].symbol)} }>
                        {i[1].ref_price === 'undefined' ? '-' : parseFloat(i[1].ref_price).toFixed(2)}
                    </th>
                    <th className={cx('right', 'violet', 'set_light')} onClick={e => {acb( i[0].symbol)} } >
                        {i[1].floor_price === 'undefined' ? '-' : parseFloat(i[1].floor_price).toFixed(2)}
                    </th>

                    {i[4].length == 2 ?  
                        <>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th> 
                        </>
                    :null}

                    {i[4].length == 0 ?  
                        <>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                        </>                                   
                    :i[4].length == 1 ? 
                        i[4].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>

                                </>
                            )
                        }).reverse()
                    :i[4].length === 2 ?
                        i[4].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>
                                </>
                            )
                        }).reverse()
                    :i[4].length == 3 ?
                        i[4].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>
                                </>
                            )
                        }).reverse()
                    :null}


                    <th className={cx('right', 'set_light', color)} onClick={e => {acb( i[0].symbol)} }>
                        {i[2].price_per_unit === 'undefined' ? '-' : i[2].price_per_unit}
                    </th>
                    <th className={cx('right', 'set_light', color)} onClick={e => {acb( i[0].symbol)} }>
                        {i[2].coin_amount === 'undefined' ? '-' : i[2].coin_amount}
                    </th>


                    {i[3].length == 0 ?  
                        <>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                        </>                                   
                    :i[3].length == 1 ? 
                        i[3].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                                </>
                            )
                        })
                    :i[3].length == 2 ?
                        i[3].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>
                                </>
                            )
                        })
                    :i[3].length == 3 ?
                        i[3].map((items, index) => {
                            return(
                                <>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.price_per_unit}</th>
                                    <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>{items.coin_amount}</th>
                                </>
                            )
                        })
                    :null}

                    {i[3].length == 2 ?  
                        <>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th>
                            <th className={cx('right', color)} onClick={e => {acb( i[0].symbol)} }>-</th> 
                        </>
                    :null}
                    

                    <th className={cx('right', 'set_light')} onClick={e => {acb( i[0].symbol)} }>
                        {i[1].total_volume === 'undefined' ? '-' : i[1].total_volume}
                    </th>
                    <th className={cx('right', 'set_light', color)} onClick={e => {acb( i[0].symbol)} }>
                        {i[1].highest_price === 'undefined' ? '-' : i[1].highest_price}
                    </th>
                    <th className={cx('right', 'set_light', color)} onClick={e => {acb( i[0].symbol)} }>
                        {i[1].lowest_price === '99999999' || i[1].lowest_price === 'undefined' ? '0' : i[1].lowest_price}
                    </th>
                </tr> 
            </Tippy>
        )) : null}
    </tbody>

  )
}

export default StockACB