import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchMini.module.scss';
const cx = classNames.bind(styles);

function SearchMini() {
  return (
    <>
      <div className={cx('area-thead')}>
          <div className={cx('item-td')}>Tên</div>
          <div className={cx('item-td', 'a-right')}>Giá VNT</div>
          <div className={cx('item-td', 'a-right')}>Bđ giá 24h</div>
      </div>
      <div className={cx('orderbooklist-container')}>
            <div className={cx('area-tbody')}>
                <div className={cx('orderbook-progress')}>
                    <div className={cx('item-tr')}>
                        <div className={cx('name')}>BTC</div>
                        <div className={cx('a-right', 'c-down')}>1256.475</div>
                        <div className={cx('a-right', 'c-down')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('name')}>BTC</div>
                        <div className={cx('a-right', 'c-up')}>1256.475</div>
                        <div className={cx('a-right', 'c-up')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('name')}>BTC</div>
                        <div className={cx('a-right', 'c-up')}>1256.475</div>
                        <div className={cx('a-right', 'c-up')}>35386.591</div>
                    </div>
                </div>
            </div>
        </div>
    </>


  )
}

export default SearchMini