import classNames from 'classnames/bind';
import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from './MV.module.scss';
const cx = classNames.bind(styles);

function MV() {

  useEffect(() => {
    document.title =
    'Video | Tuyển tập nhạc hay chọn lọc';
  }, [])


  return (
    <div>
        <piv className={cx('flex')}>
            <div className={cx('MV')}>MV</div>
            <div className={cx("hr-right")}></div>

            <div className={cx('item')}>
              <Link to={'/the-loai-video/Viet-Nam'} className={cx('item-VN','action')}>VIỆT NAM</Link>
              <Link to={'/the-loai-video/Au-My'} className={cx('item-AM')}>US-UK</Link>
              <Link to={'/the-loai-video/Han-Quoc'} className={cx('item-HQ')}>KPOP</Link>
              <Link to={'/the-loai-video/Khong-Loi'} className={cx('item-KL')}>HÒA TẤU</Link>
            </div>
            

        </piv>
        <div className={cx('hr-top')}/>

        <Outlet/>
    </div>

    
  )
}

export default MV