import React from 'react'
import classNames from 'classnames/bind';
import blockChainStorage from '~/utils/storage';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import inforUser from "../../api/inforUser";
import styles from './Withdraw.module.scss';
const cx = classNames.bind(styles);

function Withdraw() {
    const navigate = useNavigate();
    const infoClient = blockChainStorage.getInfoClient()
    const [amount, setAmount] = useState('');
    const [assets, setAssets] = useState();


    

    useEffect(() => {
        const money = async ()  =>{
            try{
                const data = await inforUser.getListAssets()
                let coinVND = Intl.NumberFormat("vi-US", {
                    style: "currency",
                    currency: "VND",
                });
                setAssets(coinVND.format(data?.data.assets.slice(-1)[0].free_asset));
            }
            catch (err) {
                alert(err);
            }
        }
        money()
        
    }, []);

    const addAmount = async () => {
        if ( amount === '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await inforUser.postWithdraw({
                    amount: parseInt(amount),
                });
                if (res.success === false) toast.error("Số tiền nhập vào không đúng !");
                else {  
                    toast.success("Rút thành công !");
                    navigate('/');
                }
            }
            catch (err) {
                toast.error('Không thể thực hiện rút !');
                console.log(err);
            }
        }
    }


    

  return (
    <div className={cx('container')}>
        <div className={cx('text')}>Thông tin người nhận & giao dịch</div>

        <div className={cx('line')}>
            <div className={cx('line-name')}>Số tiền có thể chuyển</div>
            <div className={cx('right')}>{assets}</div>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Tên người chuyển</div>
            <input type={'text'} placeholder='Tài khoản ngân hàng cùng tên' value={infoClient.data.username}></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Số CMND</div>
            <input type={'text'} value={infoClient.data.identification_number.trim()}></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Ngân hàng thụ hưởng</div>
            <input type={'text'} value={'Agribank'}></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Số tiền chuyển</div>
            <input type={'text'} onChange={(e)=> setAmount(e.target.value)}></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Phí chuyển tiền</div>
            <div className={cx('right')}>0 VND</div>
        </div>
        <div className={cx('line_button')}>
            <div className={cx('orange')} onClick={() => navigate('/')}>Hủy giao dịch</div>
            <div className={cx('green')} onClick={addAmount}>Xác nhận rút</div>
        </div>
    </div>
  )
}

export default Withdraw