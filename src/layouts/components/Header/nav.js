import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Menu from './NavbarHeader/Menu';
import MenuItem from './NavbarHeader/MenuItem';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import blockChainStorage from '~/utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Nav(className) {
    const navigate = useNavigate();
    const [setUser, setSetUser] = useState(null);
    const [setUserLogin, setSetUserLogin] = useState(null);


    const infoRegister = blockChainStorage.getInfoClient()
    console.log(infoRegister.data.name);



    const logout = () => { 
        blockChainStorage.removeInfoClient()
        blockChainStorage.removeInfoFirebase()
        blockChainStorage.removeInfoRegister()
    }

    useEffect(() => {
        if (!blockChainStorage.getInfoFirebase() || !blockChainStorage.getInfoClient()) setSetUser('none')
        else setSetUserLogin('none')
        
    }, []);

    return (
        <section className={cx("header", "navigation", "top_margin", 'className')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to={'/'}>
                                <img src={'https://bit-bank.io/wp-content/uploads/2021/10/BIT-BANK-_final-logo-3-01-1.png'} alt="logo"></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="tf-ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Menu>
                                        <li className={cx("nav-item")}>
                                            <MenuItem to={`/`} title = {'Bảng Giá'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUserLogin)}>
                                            <MenuItem to={'/login'} title = {'Sign In'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/profile'} title = {'Profile'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/asset'} title = {'Tài Sản'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/refills'} title = {'Nạp Ví'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/withdraw'} title = {'Rút Ví'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)} onClick={logout}>
                                            <MenuItem to={'/login'} title = {'Đăng xuất'}></MenuItem>
                                        </li>
                                    </Menu> 
                                </ul>
                            </div>

                            {infoRegister ? infoRegister.data.name : null}

                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav