import classNames from 'classnames/bind';
import React from 'react'
import { Link, Outlet } from "react-router-dom";

import styles from './LayoutRankTop.module.scss';
const cx = classNames.bind(styles);

function LayoutRankTop() {
  return (
    //trang này sử dụng là Page trung gian để thể hiện các page nhỏ VN-US-KPOP
    <div>
        
        <div>Bảng Xếp Hạng Tuần</div>


        {/* the Link sử dung như 1 thẻ a trong HTML su dung để chỉ đến page nhỏ */}

        <Link to={'/zing-chart-tuan/Bai-hat-Viet-Nam'} className={cx('red')}>VN</Link>
        <Link to={'/zing-chart-tuan/bai-hat-US-UK'} className={cx('yellow')}>US-UK</Link>
        <Link to={'/zing-chart-tuan/bai-hat-Kpop'} className={cx('green')}>Kpop</Link>




        {/* OutLet là 1 biến sẽ render 1 trong các Pgae trong OUTLet mà mình link tới */}
        <Outlet/>
        

        
    </div>
  )
}

export default LayoutRankTop