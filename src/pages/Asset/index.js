import React from 'react'
import styles from './Asset.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Asset() {
  return (
    <div className={cx('container')}>

        <div className={cx('asset-total-basic')}>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    Tài sản ròng
                </div>
                <div className={cx('asset-total-item-value')}>
                    -
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    TS ròng TKCK
                </div>
                <div className={cx('asset-total-item-value')}>
                    -
                </div>
            </div>
            <div className={cx('asset-total-item')}>
                <div className={cx('asset-total-item-label')}>
                    TS ròng S-Products
                </div>
                <div className={cx('asset-total-item-value')}>
                    -
                </div>
            </div>  
        </div>
        
        <div className={cx('asset-total-info')}>
            <div className={cx('asset-full')}>
                <table className={cx('border-table-border')}>
                    <thead className={cx('bg-table-border')}>
                        <tr rowSpan={5}>
                            <th >Tổng tài sản (VNĐ)</th>
                        </tr>
                    </thead>
                    <tbody className={cx('border-table-border-tbody')}>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Sức mua tối đa</td>
                                <td className={cx('td_2', 'focus', 'right')}>-</td>
                                <td className={cx('td_1')}>Chờ khớp M/B</td>
                                <td className={cx('td_1', 'green', 'right')}>-</td>
                                <td className={cx('td_1', 'red', 'right')}>-</td>
                            </tr>
                        </div>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Số dư tiền</td>
                                <td className={cx('td_2', 'focus', 'right')}>-</td>
                                <td className={cx('td_1')}>T0 M/B</td>
                                <td className={cx('td_1', 'green', 'right')}>-</td>
                                <td className={cx('td_1', 'red', 'right')}>-</td>
                            </tr>
                        </div>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Tiền có thể rút</td>
                                <td className={cx('td_2', 'right')}>-</td>
                                <td className={cx('td_1')}>T1 M/B</td>
                                <td className={cx('td_1', 'green', 'right')}>-</td>
                                <td className={cx('td_1', 'red', 'right')}>-</td>
                            </tr>
                        </div>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Tổng GTCK</td>
                                <td className={cx('td_2', 'right')}>-</td>
                                <td className={cx('td_1')}>Tiền bán đã ứng</td>
                                <td className={cx('td_1', 'right')}>-</td>
                                <td className={cx('td_1', 'right')}>-</td>
                            </tr>
                        </div>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Tổng tài sản</td>
                                <td className={cx('td_2', 'focus', 'right')}>-</td>
                                <td className={cx('td_1')}>ĐK quyền mua</td>
                                <td className={cx('td_1', 'right')}>-</td>
                                <td className={cx('td_1', 'right')}>-</td>
                            </tr>
                        </div>
                        <div className={cx('asset-total-info-div')}>
                            <tr className={cx('border-table-border-tr')}>
                                <td className={cx('td_1')}>Tổng tài sản thực có</td>
                                <td className={cx('td_2', 'focus', 'right')}>-</td>
                                <td className={cx('td_1')}>Tổng nợ</td>
                                <td className={cx('td_1', 'right')}>-</td>
                                <td className={cx('td_1', 'right', 'focus' )}>-</td>
                            </tr>
                        </div>
                       

                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
  )
}

export default Asset