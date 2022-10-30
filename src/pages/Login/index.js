
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('container')}>
        <div className={cx("content-w3ls")}>
            <div className={cx("content-agile1")}>
                <h2 className={cx("agileits1")}>BitBank</h2>
                <p className={cx("agileits2")}>Sàn giao dịch thương mại điện tử lớn nhất Huflit.</p>
            </div>
            <div className={cx("content-agile2")}>
                <div className={cx('content-agile2_img')}>
                    <img src={'https://bit-bank.io/wp-content/uploads/2021/10/BIT-BANK-_final-logo-3-01-1.png'} alt="logo"></img>
                </div>

                <div className={cx('content-agile2_header')}>Đăng nhập</div>


                <div className={cx('content-agile2_content')}>
                    <div className={cx('name')}>Mã khách hàng</div>
                    <div className={cx("form-control")}>
                        <i className="fal fa-user"></i>
                        <input type="text" className={cx("lock")} ></input>
                    </div>
                </div>


                <div className={cx('content-agile2_content')}>
                    <div className={cx('name')}>Mật khẩu</div>
                    <div className={cx("form-control")}>
                        <i className="far fa-lock-alt"></i>
                        <input type="password" className={cx("lock")}></input>
                    </div>	
                </div>
		
                
                <div className={cx("signIn")}>Đăng nhập</div>

                <div className={cx('register')}>Bạn chưa có tài khoản? 
                    <Link to={'/register'}> Mở tài khoản</Link>
                </div>
            </div>
            <div className={cx("clear")}></div>
        </div>
    </div>

  )
}

export default Login