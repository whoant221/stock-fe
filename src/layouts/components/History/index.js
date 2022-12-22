import React from 'react'
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import classNames from 'classnames/bind';
import styles from './History.module.scss';
import inforStock from '~/api/inforStock';
import moment from 'moment-timezone';
import Icon from '~/components/Icon'
import Tippy from "@tippyjs/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);

function History() {

    const [checkOpen, setCheckOpen] = useState('tab-link-active');
    const [checkHistory, setCheckHistory] = useState();
    const [LayoutOrderOpen, setLayoutOrderOpen] = useState('none');
    const [HistoryOrder, setHistoryOrder] = useState('');

    const [listrender, setListrender] = useState();
    const [listrender1, setListrender1] = useState();

    const id = useSelector(state => state.header.name)

    useEffect(() => {
        const HistoryOrder = async () => {
            try {
                const res = await inforStock.getHistotyOrder(`${id[1]}`);
                const res1 = await inforStock.getOpenOrder(`${id[1]}`);
                setListrender(res.data.orders);
                setListrender1(res1.data.orders);
            } catch (error) {
                // toast.error('Vui lòng thực hiện đăng nhập !');
            }
        };
        HistoryOrder();
    },[id[1] && checkOpen && listrender && listrender1])

    // console.log(listrender);

    const Cancle = async (e) => {
        try {
            const res = await inforStock.postCancleOrderBook({
                orderId: e,
            });
            if (res.success === false) toast.error("Bạn phải thực hiện đăng nhập !");
            else toast.success(`Hủy thành công lệnh ${e} !`);
        }
        catch (err) {
            toast.error('Không hỗ trợ khách hàng hủy !');
        }
    }

  return (
    <div className={cx('orders-container')}>
        <div className={cx('tabs')}> 
            <div className={cx('nav-tabs-wrapper')}>
                <div className={cx('nav-tabs-container')}>
                    <div className={cx('nav-tabs')}>
                        <div className={cx('tab-link', checkOpen)} onClick={() => {
                            setCheckOpen('tab-link-active')
                            setCheckHistory(null)
                            setLayoutOrderOpen('none')
                            setHistoryOrder('')
                        }}> Lệnh mở
                        </div>
                        <div className={cx('tab-link', checkHistory)} onClick={() => {
                            setCheckOpen(null)
                            setCheckHistory('tab-link-active')
                            setLayoutOrderOpen('')
                            setHistoryOrder('none')
                        }}> Lịch sử đặt lệnh
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('tab-content', 'tab-content-visible')} style={{display: LayoutOrderOpen}}>
                <div className={cx('trade-history-wrapper')} >
                    {listrender1 && listrender1 != '' ?                    
                    <div className={cx('area-thead')}>
                        <div className={cx('item-td')}>Giá</div>
                        <div className={cx('item-td')}>Trạng thái</div>
                        <div className={cx('item-td', 'a-right')}>SL đầu</div>
                        <div className={cx('item-td', 'a-right')}>Thời gian</div>
                    </div>
                    : null }
                
                    <div className={cx('area-tbody')}>
                        <div className={cx('orderbook-progress')}>
                            {listrender1 && listrender1 != ''?      
                            listrender1.map((items, index) => {
                                return(
                                <div className={cx('item-tr', items.type === 'ask' ? 'c-down' : 'c-up')} key={index}>
                                    <div className={cx()}>{items.price_per_unit}</div>
                                    <div className={cx()}>{items.state === 'enabled' ? 'đang mở' : 'thành công'}</div>
                                    <div className={cx('a-right')}>{items.original_coin_amount}</div>
                                    <div className={cx('a-right')}>{ moment(items.created_at).tz("Asia/Ho_Chi_Minh").format('HH:mm') }</div>
                                </div>
                            )})
                            : <div className={cx('no-orders')}>
                                <i className="fas fa-file-search"></i>
                                <div>Chưa có lệnh</div>
                            </div> }
                        </div>
                    </div>
                </div> 
            </div>




            <div className={cx('tab-content', 'tab-content-visible')} style={{display: HistoryOrder}}>
                <div className={cx('trade-history-wrapper')} >

                    {listrender && listrender != ''?                    
                    <div className={cx('area-thead')}>
                        <div className={cx('item-td')}>Giá</div>
                        <div className={cx('item-td')}>Trạng thái</div>
                        <div className={cx('item-td', 'a-right')}>SL</div>
                        <div className={cx('item-td', 'a-right')}>SL đầu</div>
                        <div className={cx('item-td', 'a-right')}>Thời gian</div>
                        <div className={cx('item-td', 'a-right')}></div>
                    </div>
                    : null }

                    <div className={cx('area-tbody')}>
                        <div className={cx('orderbook-progress')}>
                            {listrender && listrender != '' ?      
                            listrender.map((items, index) => {
                                return(
                                <div className={cx('item-tr', items.type === 'ask' ? 'c-down' : 'c-up')} key={index}>
                                    <div className={cx()}>{items.price_per_unit}</div>
                                    <div className={cx()}>{items.state === 'enabled' ? 'đang mở' : 'thành công'}</div>
                                    <div className={cx('a-right')}>{items.coin_amount}</div>
                                    <div className={cx('a-right')}>{items.original_coin_amount}</div>                                  
                                    <div className={cx('a-right')}>{moment(items.created_at).tz("Asia/Ho_Chi_Minh").format('HH:mm') }</div>
                            
                                    <div className={cx('a-right', 'c-button')}>
                                        <Tippy placement= {'right'} content={'Hủy lệnh'} theme={'table'} duration={0}>
                                            <div className={cx('header-btn')}>
                                                <Icon 
                                                    hover
                                                    onClick={e => Cancle(items.order_id)}
                                                    icon={<i className="fal fa-times"></i>}
                                                />
                                            </div>
                                        </Tippy>
                                    </div>
                                </div>
                            )})
                            : <div className={cx('no-orders')}>
                                <i className="fas fa-file-search"></i>
                                <div>Chưa có lệnh</div>
                            </div> }
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default History