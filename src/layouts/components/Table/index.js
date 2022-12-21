import React from 'react'
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Stock from '../Stock';

const cx = classNames.bind(styles);

function Table( polling = 5000) {
    
  return (
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
                                <th colSpan={2}>Khớp lệnh</th>  
                                <th colSpan={6}>Bên bán</th>  
                                <th rowSpan={2}>Tổng KL</th>  
                                <th rowSpan={2}>Cao</th>  
                                <th rowSpan={2}>Thấp</th>  
 
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
                                <td>Giá 1</td>  
                                <td>KL 1</td>   
                                <td>Giá 2</td>  
                                <td>KL 2</td>   
                                <td>Giá 3</td>  
                                <td>KL 3</td> 
                        
                            </tr> 
                        </thead>

                        <Stock/>


                    </table>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table