import React from 'react'
import classNames from 'classnames/bind';
import styles from './Withdraw.module.scss';
const cx = classNames.bind(styles);

function Withdraw() {
  return (
    <div className={cx('container')}>
        <div className={cx('text')}>Thông tin người nhận & giao dịch</div>

        <div className={cx('line')}>
            <div className={cx('line-name')}>Số tiền có thể chuyển</div>
            <div className={cx('right')}>0 VND</div>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Loại tài khoản</div>
            <input type={'text'} placeholder='Tài khoản ngân hàng cùng tên'></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Số tài khoản thụ hưởng</div>
            <input type={'text'} ></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Ngân hàng thụ hưởng</div>
            <input type={'text'} ></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Số tiền chuyển</div>
            <input type={'text'} ></input>
        </div>
        <div className={cx('line')}>
            <div className={cx('line-name')}>Phí chuyển tiền</div>
            <div className={cx('right')}>0 VND</div>
        </div>
        <div className={cx('line_button')}>
            <div className={cx('orange')}>Hủy giao dịch</div>
            <div className={cx('green')}>Xác nhận rút</div>
        </div>
    </div>
  )
}

export default Withdraw