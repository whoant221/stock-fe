import React from 'react'
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './History.module.scss';
const cx = classNames.bind(styles);
function History() {
    const [checkOpen, setCheckOpen] = useState('tab-link-active');
    const [checkHistory, setCheckHistory] = useState();
  return (
    <div className={cx('orders-container')}>
        <div className={cx('tabs')}> 
            <div className={cx('nav-tabs-wrapper')}>
                <div className={cx('nav-tabs-container')}>
                    <div className={cx('nav-tabs')}>
                        <div className={cx('tab-link', checkOpen)} onClick={() => {
                            setCheckOpen('tab-link-active')
                            setCheckHistory(null)
                        }}> Lệnh mở
                        </div>
                        <div className={cx('tab-link', checkHistory)} onClick={() => {
                            setCheckOpen(null)
                            setCheckHistory('tab-link-active')
                        }}> Lịch sử đặt lệnh
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tab-content', 'tab-content-visible')}>
                <div className={cx('trade-history-wrapper')}>
                    <div className={cx('no-orders')}>
                        <i className="fas fa-file-search"></i>
                        <div>Chưa có lệnh</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History