import React from 'react'
import classNames from 'classnames/bind';
import styles from './Refills.module.scss';
const cx = classNames.bind(styles);

function Refills() {
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
                <div >Ngân hàng</div>
                <div className={cx('line-input')}><input type={'text'} placeholder="nhập ngân hàng"></input></div>
            </div>
            <div className={cx('line')}>
                <div className={cx('line-name')}>Số tài khoản</div>
                <div className={cx('line-input')}><input className={cx('line-name')} type={'text'} placeholder="nhập số tài khoản"></input></div>
            </div>
            <div className={cx('line')}>
                <div className={cx('line-name')}>Tên tài khoản</div>
                <div className={cx('line-input')}><input className={cx('line-name')} type={'text'} placeholder="nhập tên tài khoản"></input></div>
            </div>
            <div className={cx('line')}>
                <div >Số tiền</div>
                <div className={cx('line-input')}><input className={cx('line-color')} type={'text'} placeholder="nhập số tiền"></input></div>
            </div>
            <div className={cx('line_button')}>
                <div className={cx('orange')}>Hủy giao dịch</div>
                <div className={cx('green')}>Xác nhận nạp</div>
            </div>
        </div>
    </div>
  )
}

export default Refills