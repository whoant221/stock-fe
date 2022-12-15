import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import inforStock from "~/api/inforStock";
import inforUser from "~/api/inforUser";
import { ToastContainer, toast } from 'react-toastify';
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
    const nameBank = useSelector(state => state.header.name)
    const detailBank = useSelector(state => state.header.detail)

    if (activeMenu[1] === 'none'){
        dispatch(actions.setLayout(false))
    }

    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [ACB, setACB] = useState();

    const Bid = async () => {
        if ( amount == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await inforUser.postCommand({
                    price: price,
                    amount: amount,
                    type: 'bid',
                    symbol: nameBank[1] ? nameBank[1] :'ACB'
                });
                if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
                else toast.success(`Đặt lệnh mua thành công cổ phiếu ${nameBank[1] ? nameBank[1] :'ACB'} !`);
            }
            catch (err) {
                toast.error('Bạn phải thực hiện đăng nhập !');
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
                    symbol: nameBank[1] ? nameBank[1] :'ACB'
                });
                if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
                else toast.success(`Đặt lệnh bán thành công cổ phiếu ${nameBank[1] ? nameBank[1] :'ACB'}!`);
            }
            catch (err) {
                toast.error('Bạn phải thực hiện đăng nhập !');
            }
        }
    }

    useEffect(() => {
        const money = async ()  =>{
            try{
                const data = await inforStock.getACB()
                setACB(data.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        money()
    }, []);

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
                    <div className={cx('green', 'content-parameter_span')}>{nameBank[1] ? nameBank[1] :'ACB'} <span>( 1.25% )</span></div>
                    <span className={cx('content-parameter_item')}>Đóng cửa</span>
                </div>

                {detailBank[1] ?
                <div className={cx('content-parameter')}>
                    <div>
                        <span className={cx('violet', 'mg_left')}>{detailBank[1].floor_price}</span> 
                        <span className={cx('blue', 'mg_left')}>{detailBank[1].ceil_price}</span> 
                        <span className={cx('yellow', 'mg_left')}>{detailBank[1].ref_price}</span></div>
                    <span className={cx('content-parameter_item')}>Tổng KL: {detailBank[1].total_volume}</span>
                </div> 
                : ACB ? 
                <div className={cx('content-parameter')}>
                    <div>
                        <span className={cx('violet', 'mg_left')}>{ACB.floor_price}</span> 
                        <span className={cx('blue', 'mg_left')}>{ACB.ceil_price}</span> 
                        <span className={cx('yellow', 'mg_left')}>{ACB.ref_price}</span></div>
                    <span className={cx('content-parameter_item')}>Tổng KL: {ACB.total_volume}</span>
                </div>
                : null}

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