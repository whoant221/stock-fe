import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './OrderBook.module.scss';
const cx = classNames.bind(styles);

function OrderBook() {
    const [checkCover, setCheckCover] = useState('active');
    const [checkUp, setCheckUp] = useState();
    const [checkDown, setCheckDown] = useState();
    const [checkHandelUp, setCheckHandeUp] = useState();
    const [checkHandeDown, setCheckHandeDown] = useState();
  return (
    <div className={cx('order-book')}>
        <div className={cx('area-title')}>Sổ lệnh</div>
        <div className={cx('orderbook-header')}>
            <div className={cx('orderbook-view', checkCover)} onClick={() => {
                    setCheckCover('active')
                    setCheckUp(null)
                    setCheckDown(null)
                    setCheckHandeUp(null)
                    setCheckHandeDown(null)
                }}> 
                <i className={cx("fas fa-water",'view_cover')}></i>
            </div>
            <div className={cx('orderbook-view', checkUp)} onClick={() => {
                    setCheckCover(null)
                    setCheckUp('active')
                    setCheckDown(null)
                    setCheckHandeUp('hide')
                    setCheckHandeDown(null)
                }}> 
                <i className={cx("fas fa-water-rise",'view_up')}></i>
            </div>
            <div className={cx('orderbook-view', checkDown)} onClick={() => {
                    setCheckCover(null)
                    setCheckUp(null)
                    setCheckDown('active')
                    setCheckHandeUp(null)
                    setCheckHandeDown('hide')
                }}> 
                <i className={cx("fas fa-water-lower",'view_down')}></i>
            </div> 
        </div>
        <div className={cx('area-thead')}>
            <div className={cx('item-td')}>Giá (USDT)</div>
            <div className={cx('item-td', 'a-right')}>Số lượng (AVAX)</div>
            <div className={cx('item-td', 'a-right')}>Tổng (USDT)</div>
        </div>
        <div className={cx('orderbooklist-container')}>
            <div className={cx('area-tbody', checkHandelUp)}>
                <div className={cx('orderbook-progress')}>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-down')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                </div>
            </div>
            <div className={cx('orderbook-ticker', 'c-down')}>
                <Tippy content='Giá khớp lệnh gần nhất' placement={'right-end'}>
                    <span>17.05</span>
                </Tippy>
            </div>
            <div className={cx('area-tbody', checkHandeDown)}>
                <div className={cx('orderbook-progress')}>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                    <div className={cx('item-tr')}>
                        <div className={cx('c-up')}>17.04</div>
                        <div className={cx('a-right')}>1256.475</div>
                        <div className={cx('a-right')}>35386.591</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default OrderBook