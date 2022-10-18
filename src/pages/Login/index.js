import React from 'react';
import styles from './login.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Login() {
  useEffect(() => {
    document.title = 'Bitbank | Đăng nhập,Đăng ký tài khoản';
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("screen")}>
        <div className={cx("screen__content")}>
          <form className={cx("login")}>
            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-user")}></i>
              <input type="text" className={cx("login__input")} placeholder="User name / Email"></input>
            </div>
            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-lock")}></i>
              <input type="password" className={cx("login__input")} placeholder="Password"></input>
            </div>
            <button className={cx("button", "login__submit")}>
              <span className={cx("button__text")}>Log In Now</span>
              <i className={cx("button__icon", "fas fa-chevron-right")}></i>
            </button>				
          </form>
          <div className={cx("social-login")}>
            <h3>log in via</h3>
            <div className={cx("social-icons")}>
              <a href="#"  className={cx("social-login__icon", "fab fa-google")}></a>
              <a href="#"  className={cx("social-login__icon", "fab fa-facebook")}></a>
              <a href="#"  className={cx("social-login__icon", "fab fa-github")}></a>
            </div>
          </div>
        </div>
        <div className={cx("screen__background")}>
          <span className={cx("screen__background__shape", "screen__background__shape4")}></span>
          <span className={cx("screen__background__shape", "screen__background__shape3")}></span>		
          <span className={cx("screen__background__shape", "screen__background__shape2")}></span>
          <span className={cx("screen__background__shape", "screen__background__shape1")}></span>
        </div>		
      </div>
    </div>
  )
}

export default Login