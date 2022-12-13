import classNames from "classnames/bind";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import inforUser from "~/api/inforUser";
import 'react-toastify/dist/ReactToastify.css';
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

    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    console.log(amount, price);

    const Bid = async () => {
        if ( amount == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await inforUser.postCommand({
                    price: price,
                    amount: amount,
                    type: 'bid',
                    symbol: "ACB"
                });
                if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
                else toast.success("Đặt lệnh mua thành công !");
            }
            catch (err) {
                toast.error('Không thể hỗ trợ khách hàng !');
            }
        }
    }

    const Ask = async () => {
        if ( amount == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await inforUser.postCommand({
                    price: price,
                    amount: amount,
                    type: 'ask',
                    symbol: "ACB"
                });
                if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
                else toast.success("Đặt lệnh bán thành công !");
            }
            catch (err) {
                toast.error('Không thể hỗ trợ khách hàng !');
            }
        }
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
                    <input placeholder="Nhập số lượng lệnh" onChange={(e) => setAmount(e.target.value)}></input>
                </div>
                <div className={cx('content-input')}>
                    <div className={cx('content-input_lable')}>Giá (x1000 VNĐ)</div>
                    <input placeholder="Nhập giá" onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className={cx('trading-nav-tabs')}>
                    <div className={cx('tab-link', 'tab-link-mua')} onClick={Bid}>Mua</div>
                    <div className={cx('tab-link', 'tab-link-ban')} onClick={Ask}>Bán</div>
                </div>
                <OrderBook style={{height: '370px'}}/>
            </div>
            
        </div>
     );
}

export default SidebarRight;