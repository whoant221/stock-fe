import classNames from 'classnames/bind';
import styles from './NhacMoi.module.scss';

const cx = classNames.bind(styles);

function Nhacmoi() {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('blur')}></div>
            <div className={cx('alpha')}></div>
            <div className={cx('alpha1')}></div>
        </div>
    );
}

export default Nhacmoi;
