import classNames from 'classnames/bind';
import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from './MV.module.scss';
import Menu from './NavbarMV/Menu';
import MenuItem from './NavbarMV/MenuItem';
const cx = classNames.bind(styles);

function MV() {

  let classAction = ''
  const [checkAction, setCheckAction] = useState(false);
  

  useEffect(() => {
    document.title =
    'Video | Tuyển tập nhạc hay chọn lọc';
  }, [])


  return (
    <div>
        <div className={cx('flex')}>
            <div className={cx('MV')}>MV</div>
            <div className={cx("hr-right")}></div>

            <Menu>
              <MenuItem title={"VIỆT NAM"} to={'/the-loai-video/Viet-Nam'}/>
              <MenuItem title={"US-UK"} to={'/the-loai-video/Au-My'}/>
              <MenuItem title={"KPOP"} to={'/the-loai-video/Han-Quoc'}/>
              <MenuItem title={"HÒA TẤU"} to={'/the-loai-video/Khong-Loi'}/>
            </Menu>
            

        </div>
        <div className={cx('hr-top','mar-b-30')}/>
        <Outlet/>
    </div>

    
  )
}

export default MV