import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Menu from './NavbarHeader/Menu';
import MenuItem from './NavbarHeader/MenuItem';
import {useSelector} from 'react-redux';
const cx = classNames.bind(styles);

function Header() {
    const name = useSelector(state => state.header.name)
    console.log(name[1]);

    const [getNameUrl, setGetNameUrl] = useState('');
    const handleGetName = () => {
        if(window.location.href === 'http://localhost:3000/sellquickly/all') setGetNameUrl('all')
        if(window.location.href === 'http://localhost:3000/sellquickly/basic') setGetNameUrl('basic')
        if(window.location.href === 'http://localhost:3000/sellquickly/defi') setGetNameUrl('defi')
        if(window.location.href === 'http://localhost:3000/sellquickly/layer') setGetNameUrl('layer')
    }

    const propsSlide6 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        // arrows: false,
    };

    const san = [
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'ETH/USD',
            price: 843.0005,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
    ]

    return ( 
        <div className={cx('top_header')}>
            <section className={cx("top_margin", "top-header")}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={cx("col-md-12", 'center')}>
                            <ul className="currency-status">
                                <Slider {...propsSlide6}>
                                    {san.map((items, index) => {  return (
                                        <li className={cx('li_header')} key={index}>
                                            <a className={cx('items_header')} href="#" >
                                                {items.status === 'down' 
                                                ? <i className="fas fa-caret-down down-status"></i>
                                                : <i className="fas fa-caret-up up-status"></i>}                 
                                                <span>{items.name}</span>
                                                <span>{items.price}</span>
                                            </a>  
                                        </li>)                
                                    })}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 

            <section className={cx("header", "navigation", "top_margin")}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to={''}>
                                    <img src={'https://bit-bank.io/wp-content/uploads/2021/10/BIT-BANK-_final-logo-3-01-1.png'} alt="logo"></img>
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="tf-ion-android-menu"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto" onClick={handleGetName}>
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
                                                <MenuItem to={'/'} title = {'Sign In'}></MenuItem>
                                            </li>
                                        </Menu> 


                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
