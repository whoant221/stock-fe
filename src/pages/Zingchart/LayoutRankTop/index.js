import classNames from 'classnames/bind';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import styles from './LayoutRankTop.module.scss';
const cx = classNames.bind(styles);

function LayoutRankTop() {
    return (
        //trang này sử dụng là Page trung gian để thể hiện các page nhỏ VN-US-KPOP
        <div className={cx('wrapper')}>
            <div className={cx('blur')}></div>
            <div className={cx('alpha')}></div>
            <div className={cx('alpha1')}></div>
            <div className={cx('title')}>
                <h1>Bảng Xếp Hạng Tuần</h1>
                <span>
                    <i className='fas fa-play'></i>
                </span>
            </div>

            {/* the Link sử dung như 1 thẻ a trong HTML su dung để chỉ đến page nhỏ */}

            <div className={cx('container')}>
                <NavLink
                    className={({ isActive }) => (isActive ? cx('active') : '')}
                    to={'/zing-chart-tuan/Bai-hat-Viet-Nam'}
                    data='Hellllllllllllllllllllllllo'
                >
                    <span>VIỆT NAM</span>
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? cx('active') : '')}
                    to={'/zing-chart-tuan/bai-hat-US-UK'}
                >
                    <span> US-UK</span>
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? cx('active') : '')}
                    to={'/zing-chart-tuan/bai-hat-Kpop'}
                >
                    <span> K-POP</span>
                </NavLink>
            </div>

            {/* OutLet là 1 biến sẽ render 1 trong các Pgae trong OUTLet mà mình link tới */}
            <div className={cx('page')}>
                <span className={cx('date')}>
                    Tuần 31 (01/08 - 07/08 ) <i className='far fa-chevron-down'></i>
                </span>
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutRankTop;
