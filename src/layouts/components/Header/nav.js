import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './NavbarHeader/Menu';
import MenuItem from './NavbarHeader/MenuItem';
import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Nav(className) {
    const name = useSelector(state => state.header.name)
    return (
        <section className={cx("header", "navigation", "top_margin", 'className')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to={'/'}>
                                <img src={'https://bit-bank.io/wp-content/uploads/2021/10/BIT-BANK-_final-logo-3-01-1.png'} alt="logo"></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="tf-ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Menu>
                                        <li className={cx("nav-item")}>
                                            <MenuItem 
                                            to={`/sellquickly/${name[1] === undefined || name[1] === '' ? 'all' : name[1]}`} 
                                            title = {'Mua Bán Nhanh'}>                                                  
                                            </MenuItem>
                                        </li>
                                        <li className={cx("nav-item")}>
                                            <MenuItem 
                                            to={'/sellpro'} 
                                            title = {'Mua Bán Chứng Khoán'}>                                                    
                                            </MenuItem>
                                        </li>
                                        <li className="nav-item">
                                            <MenuItem to={'/login'} title = {'Sign In'}></MenuItem>
                                        </li>
                                    </Menu> 
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav