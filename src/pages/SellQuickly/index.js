import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Search from '../../layouts/components/Search';
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
                <i class="fas fa-cog"></i>
                <div className={cx('left_icon')}>
                  <i class="fas fa-ellipsis-v"></i>
                </div>
                <div className={cx('left_botton')}>
                  <div className={cx('button_buy')}>Đặt lệnh</div>
                </div>
              </div>
            </div>
            <div className={cx('price-board-table')}>
              <div className={cx('ag-theme-dark')}>
                <div className={cx('ag-layout-normal')}>
                  <div className={cx('ag-root-wrapper-body')}>
                    <table>

                      <thead>
                        <tr>  
                          <th rowSpan={2}> </th>  
                          <th rowSpan={2}>CK</th>  
                          <th rowSpan={2}>Trần</th>  
                          <th rowSpan={2}>Sàn</th>  
                          <th rowSpan={2}>TC</th>  
                          <th colSpan={6}>Bên mua</th>  
                          <th colSpan={4}>Khớp lệnh</th>  
                          <th colSpan={6}>Bên bán</th>  
                          <th rowSpan={2}>Tổng KL</th>  
                          <th rowSpan={2}>Cao</th>  
                          <th rowSpan={2}>Thấp</th>  
                          <th colSpan={3}>ĐTNN</th>  
                        </tr>  
                        <tr>  
                          <td>Giá 3</td>  
                          <td>KL 3</td>  
                          <td>Giá 2</td>  
                          <td>KL 2</td>  
                          <td>Giá 1</td>  
                          <td>KL 1</td>  
                          <td>Giá</td>  
                          <td>KL</td>  
                          <td>+/-</td>  
                          <td>+/- (%)</td> 
                          <td>Giá 1</td>  
                          <td>KL 1</td>   
                          <td>Giá 2</td>  
                          <td>KL 2</td>   
                          <td>Giá 3</td>  
                          <td>KL 3</td> 
                          <td>NN mua</td>  
                          <td>NN bán</td>  
                          <td>Room</td>  
                        </tr> 
                      </thead>

                      <tbody id={cx('customers')}>
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'green')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'red')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'yellow')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'green')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'red')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'yellow')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'green')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'red')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'yellow')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'green')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'red')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'yellow')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                                                <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'green')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right', 'set_light', 'green')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'red')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right', 'set_light', 'red')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                        <tr>
                          <th className={cx('center')}><i class="fas fa-thumbtack"></i></th>
                          <th className={cx('left', 'yellow')}>ACB</th>
                          <th className={cx('right', 'violet', 'set_light')}>22.40</th>
                          <th className={cx('right', 'blue', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow', 'set_light')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right', 'set_light', 'yellow')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                          <th className={cx('right')}>22.40</th>
                        </tr> 
                      </tbody>

                    </table>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellQuickly