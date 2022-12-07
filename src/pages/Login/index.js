import { signInWithPopup } from '@firebase/auth';
import { auth, googleProvider, facebookProvider, githubAuthProvider } from '~/firebase/config';
import blockChainStorage from '~/utils/storage';
import { getUser, addNewUser } from '~/firebase/firebaseHandler';
import { onAuthStateChanged } from '@firebase/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log(name, password);
        const userData = {
            name,
            password,
        };
        blockChainStorage.setInfoClient(userData)
        setName('');
        setPassword('');
    };

    const checkUser = async (user) => {
        try {
            const result = await getUser(user.uid);
            if (result.size === 0) {
                await addNewUser(user);
            }
            } catch (err) {
                console.log(err);
            }
      };

    const handleLogin = async (provider) => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            checkUser(user);
            navigate('/');
            blockChainStorage.setInfoFirebase(user)
        } catch (error) {
            alert(error);
        }
    };
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            }
            console.log(user);
        })
    }, [navigate]);

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
                        <input type="text" className={cx("lock")} placeholder={'Họ và tên'} 
                        onChange={(e) => setName(e.target.value)}
                        value={name}></input>
                    </div>
                </div>


                <div className={cx('content-agile2_content')}>
                    <div className={cx('name')}>Mật khẩu</div>
                    <div className={cx("form-control")}>
                        <i className="far fa-lock-alt"></i>
                        <input type="password" className={cx("lock")} placeholder={'Mật khẩu'}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}></input>
                    </div>	
                </div>
		
                
                <div className={cx("signIn")}>Đăng nhập</div>

                <div className={cx('register')}>Bạn chưa có tài khoản? 
                    <Link to={'/register'}> Mở tài khoản </Link>
                    hoặc                     
                    <span className={cx("icon_login")} onClick={() => handleLogin(facebookProvider)}>
                        <i className="fab fa-facebook-f"></i>
                    </span>
                    <span className={cx("icon_login")} onClick={() => handleLogin(googleProvider)}>
                        <i className="fab fa-google"></i>
                    </span>
                </div>
            </div>
            <div className={cx("clear")}></div>
        </div>
    </div>

  )
}

export default Login