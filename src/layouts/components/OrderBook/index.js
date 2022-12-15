import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './OrderBook.module.scss';
import inforStock from "~/api/inforStock";
const cx = classNames.bind(styles);

function OrderBook({style}) {

    const [checkCover, setCheckCover] = useState('active');
    const [checkUp, setCheckUp] = useState();
    const [checkDown, setCheckDown] = useState();
    const [checkHandelUp, setCheckHandeUp] = useState();
    const [checkHandeDown, setCheckHandeDown] = useState();

    const [orderBookAskACB, setOrderBookAskACB] = useState();
    const [orderBookBidACB, setOrderBookBidACB] = useState();
    console.log(orderBookAskACB);


    useEffect(() => {
        const money = async ()  =>{
            try{
                const data1 = await inforStock.getOrderBookAskACB()
                const data2 = await inforStock.getOrderBookBidACB()
                setOrderBookAskACB(data1.data.orders);
                setOrderBookBidACB(data2.data.orders);
            }
            catch (err) {
                console.log(err);
            }
        }
        money()
    }, []);
    

  return (
    <div className={cx('order-book')} style={ style }>
        <div className={cx('area-title')}>Sổ lệnh</div>
        <div className={cx('orderbook-header')}>
            <div className={cx('orderbook-view', checkCover)} onClick={() => {
                    setCheckCover('active')
                    setCheckUp(null)
                    setCheckDown(null)
                    setCheckHandeUp(null)
                    setCheckHandeDown(null)
                }}> 
                <i className={cx("fas fa-water",'view_cover')}></i>
            </div>
            <div className={cx('orderbook-view', checkUp)} onClick={() => {
                    setCheckCover(null)
                    setCheckUp('active')
                    setCheckDown(null)
                    setCheckHandeUp('hide')
                    setCheckHandeDown(null)
                }}> 
                <i className={cx("fas fa-water-rise",'view_up')}></i>
            </div>
            <div className={cx('orderbook-view', checkDown)} onClick={() => {
                    setCheckCover(null)
                    setCheckUp(null)
                    setCheckDown('active')
                    setCheckHandeUp(null)
                    setCheckHandeDown('hide')
                }}> 
                <i className={cx("fas fa-water-lower",'view_down')}></i>
            </div> 
        </div>
        <div className={cx('area-thead')}>
            <div className={cx('item-td')}>Giá (USDT)</div>
            <div className={cx('item-td', 'a-right')}>Số lượng</div>
            <div className={cx('item-td', 'a-right')}>Tổng</div>
        </div>
        <div className={cx('orderbooklist-container')}>
            <div className={cx('area-tbody', checkHandelUp)}>
                <div className={cx('orderbook-progress')}>

                    {orderBookAskACB ? 
                    orderBookAskACB.map((items, index) => {
                        return(
                            <div className={cx('item-tr')} key={index}>
                                <div className={cx('c-down')}>{items.price_per_unit}</div>
                                <div className={cx('a-right')}>{items.coin_amount}</div>
                                <div className={cx('a-right')}>{parseInt(items.price_per_unit) * parseInt(items.coin_amount)}</div>
                            </div>
                    )}): null}

                </div>
            </div>
            <div className={cx('orderbook-ticker', 'c-down')}>
                <Tippy content='Giá khớp lệnh gần nhất' placement={'right-end'}>
                    <span>17.05</span>
                </Tippy>
            </div>
            <div className={cx('area-tbody', checkHandeDown)}>
                <div className={cx('orderbook-progress')}>
                    {orderBookBidACB ? 
                        orderBookBidACB.map((items, index) => {
                            return(
                                <div className={cx('item-tr')} key={index}>
                                    <div className={cx('c-up')}>{items.price_per_unit}</div>
                                    <div className={cx('a-right')}>{items.coin_amount}</div>
                                    <div className={cx('a-right')}>{parseInt(items.price_per_unit) * parseInt(items.coin_amount)}</div>
                                </div>
                    )}): null}
                </div>
            </div>
        </div>

    </div>
  )
}

export default OrderBook