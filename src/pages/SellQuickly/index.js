import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Search from '../../layouts/components/Search';
import Table from '../../layouts/components/Table';
import styles from './SellQuickly.module.scss';
const cx = classNames.bind(styles);

function SellQuickly() {

  useEffect(() => { 
    document.title = 'Bitbank | Mua bán nhanh, Ethereum tại Việt Nam nhanh chóng';
    window.scrollTo(0, 0)
  }, []);

  const data = [
    {name: 'Danh mục của tôi'},
    {name: 'VN30'},
    {name: 'HNX30'},
    {name: 'HOSE'},
    {name: 'HNX'},
    {name: 'UPCOM'},
    {name: 'CP Ngành'},
    {name: 'Thỏa thuận'},
    {name: 'Phái sinh'},
    {name: 'Chứng quyền'},
    {name: 'ETF'},
    {name: 'Lô lẻ'},
  ]

  

  return (
    <div className={cx('main-wrapper')}>
      <div className={cx('home-page')}>
        <div className={cx('section-price-board')}>
          <div className={cx('price-board-wrapper')}>
            <div className={cx('price-board-header')}>
              <div className={cx('search')}>
                <div className={cx('input-group')}>
                  <Search/>
                </div>
              </div>
              <div className={cx('price-board-menu-root')}>
                {data.map((items, index)=>{
                  return(<div className={cx('menu_items')} key={index}>{items.name}</div>)
                })}
              </div>
              <div className={cx('space-x-2')}>
                <i className="fas fa-cog"></i>
                <div className={cx('left_icon')}>
                  <i className="fas fa-ellipsis-v"></i>
                </div>
                <div className={cx('left_botton')}>
                  <div className={cx('button_buy')}>Đặt lệnh</div>
                </div>
              </div>
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellQuickly