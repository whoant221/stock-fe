import classNames from "classnames/bind";
import { useState } from "react";
import OrderBook from '~/layouts/components/OrderBook';
import Search from '~/layouts/components/Search';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import styles from './SidebarRight.module.scss'
import Icon from '~/components/Icon'
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles)

function SidebarRight() {
    const dispatch = useDispatch();
    const activeMenu = useSelector(state => state.header.active)

    if (activeMenu[1] === 'none'){
        dispatch(actions.setLayout(false))
    }

    return ( 
        <div className={cx('wrapper', {active: activeMenu[1]})}>
            <div className={cx('header')}>
                <div className={cx('tabbars')}>
                    <div className={cx('tabbar-item')}>
                            <Search/>
                    </div>
                </div>
                <Tippy content={'Đóng Menu'} theme={'table'}>
                    <div className={cx('header-btn')}>
                        <Icon 
                            hover
                            onClick={()=>{dispatch(actions.setLayout(false))}}
                            icon={<i className="fal fa-times"></i>}
                        />
                    </div>
                </Tippy>
            </div>

            <div className={cx('content')}>
                <div className={cx('content-parameter')}>
                    <div className={cx('green', 'content-parameter_span')}>ACB <span>( 7.70 )</span></div>
                    <span className={cx('content-parameter_item')}>Đóng cửa</span>
                </div>
                <div className={cx('content-parameter')}>
                    <div>
                        <span className={cx('violet', 'mg_left')}>17.00</span> 
                        <span className={cx('yellow', 'mg_left')}>15.90</span> 
                        <span className={cx('blue', 'mg_left')}>14.80</span></div>
                    <span className={cx('content-parameter_item')}>Tổng KL: 20,501,900</span>
                </div>
                <div className={cx('content-input')}>
                    <div className={cx('content-input_lable')}>Khối lượng</div>
                    <input placeholder="Nhập số lượng lệnh"></input>
                </div>
                <div className={cx('content-input')}>
                    <div className={cx('content-input_lable')}>Giá (x1000 VNĐ)</div>
                    <input placeholder="Nhập giá"></input>
                </div>
                <div className={cx('trading-nav-tabs')}>
                    <div className={cx('tab-link', 'tab-link-mua')}>Mua</div>
                    <div className={cx('tab-link', 'tab-link-ban')}>Bán</div>
                </div>
                <OrderBook style={{height: '370px'}}/>
            </div>
            
        </div>
     );
}

export default SidebarRight;