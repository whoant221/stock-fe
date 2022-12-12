import React from 'react'
import classNames from 'classnames/bind';
import styles from './Refills.module.scss';
import blockChainStorage from '~/utils/storage';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import inforUser from "../../api/inforUser";
const cx = classNames.bind(styles);

function Refills() {
    const navigate = useNavigate();
    const infoClient = blockChainStorage.getInfoClient()
    const [amount, setAmount] = useState('');

    const addAmount = async () => {
        if ( amount === '') toast.error("Vui lòng nhập thông tin đầy đủ !");
        else {
            try {
                const res = await inforUser.postRefills({
                    amount: parseInt(amount),
                });
                if (res.success === false) toast.error("Số tiền nhập vào không đúng !");
                else {  
                    toast.success("Nạp thành công !");
                    navigate('/');
                }
            }
            catch (err) {
                toast.error('Không thể thực hiện nạp !');
                console.log(err);
            }
        }
    }

  return (
    <div className={cx('container')}>
        <div className={cx('left')}>
            <div className={cx('box')}><input type="file" className={cx('box-input')}></input></div>
            <div className={cx('text')}>
                <div className={cx('text-icon')}><i className="fas fa-map-marker-exclamation"></i></div>
                <i className={cx('text-note')}>Bằng chứng giao dịch cần phải to rõ, không chỉnh sửa và chứa thông tin chuyển khoản</i>
            </div>
        </div>
        <div className={cx('right')}>
            <div className={cx('right-text')}>HƯỚNG DẪN NẠP VÍ</div>
            <div className={cx('text')}>
                <div className={cx('text-icon')}><i className="fas fa-map-marker-exclamation"></i></div>
                <i className={cx('text-note')}>Vui lòng kiểm tra chính xác tài khoản chuyển tiền. Người chuyển phải chịu phí chuyển tiền phát sinh từ ngân hàng nếu có </i>
            </div>
            <div className={cx('line')}>
                <div className={cx('line-name')}>Số CMDN</div>
                <div className={cx('line-input')}>
                    <input className={cx('line-name')} 
                    type={'text'} placeholder="nhập số tài khoản" 
                    value={infoClient.data.identification_number.trim()}></input>
                </div>
            </div>
            <div className={cx('line')}>
                <div className={cx('line-name')}>Tên tài khoản</div>
                <div className={cx('line-input')}>
                    <input className={cx('line-name')} 
                    type={'text'} placeholder="nhập tên tài khoản"
                    value={infoClient.data.username}></input>
                </div>
            </div>
            <div className={cx('line')}>
                <div >Số tiền</div>
                <div className={cx('line-input')}>
                    <input className={cx('line-color')} type={'text'} placeholder="số tiền nạp" 
                    onChange={(e)=> setAmount(e.target.value) }></input></div>
            </div>
            <div className={cx('line_button')}>
                <div className={cx('orange')} onClick={() => navigate('/')}>Hủy giao dịch</div>
                <div className={cx('green')} onClick={addAmount}>Xác nhận nạp</div>
            </div>
        </div>
    </div>
  )
}

export default Refills