import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Nav from '~/layouts/components/Header/nav';
import Chart from '../Home/Chart';
import styles from './SellPro.module.scss';
const cx = classNames.bind(styles);

function SellPro() {
  return (
    <div className={cx('main-page')}>
      <Nav/>
      <div className={cx('main-page')}>
        <div className={cx('market-container')}>
          <div className={cx('area-item', 'trading-pair')}>
            <div className={cx('pair-switcher')}>
              <div className={cx('toggle', 'current-coin-name')}>
                <img src="https://static.coinall.ltd/cdn/assets/imgs/221/CF408EA4DD2B5F00.png" alt="AVAX" width="28px" height="28px"></img>
                AVAX
                <i class={cx('fix',"fas fa-sort-down")}></i>
              </div>
            </div>
            <div className={cx('ticker-last', 'c-up')}>
              <div className={cx('market24h')}>
                <span>1.11%</span>
              </div>
              <div className={cx('lastestPrice')}>
                <span>17.35</span>
              </div>
            </div>
            <div className={cx('ticker-list')}>

              <div className={cx('ticket-item')}>
                <span className={cx('label')}>24h thấp nhất</span>
                <span className={cx('value')}>16.7</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>24h cao nhất</span>
                <span className={cx('value')}>17.47</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>KL 24h (AVAX)</span>
                <span className={cx('value')}>142401.59</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>KL 24h (USDT)</span>
                <span className={cx('value')}>2.43M</span>
              </div>
              
            </div>
 
          </div>

          <div className={cx('area-item', 'chart-container')}>
            <div className={cx('app')}>
              <div className={cx('k-line-chart-container')}>
                <div className={cx('chart-top-bar')}>
                  <div className={cx('common-intervals')}>
                    <span className={cx('period', 'line')}>Nến</span>
                    <span className={cx('period','active')}>15m</span>
                    <span className={cx('period')}>1H</span>
                    <span className={cx('period')}>4H</span>
                    <span className={cx('period')}>1D</span>
                  </div>
                </div>
                            
                <div className={cx('k-line-chart')}>
                  <Chart style={{height: 350}}/>
                </div>

              </div>
            </div>
          </div>

          <div className={cx('orders-container', 'on-market', 'tabs-light')}>
            <div className={cx('tabs')}> 
              <div className={cx('nav-tabs-wrapper')}>
                <div className={cx('nav-tabs-container')}>
                  <div className={cx('nav-tabs')}>
                    <div className={cx('tab-link', 'tab-link-active')}>
                      Lệnh mở
                    </div>
                    <div className={cx('tab-link')}>
                      Lịch sử đặt lệnh
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('tab-content', 'tab-content-visible')}>
                <div className={cx('trade-history-wrapper')}>
                  <div className={cx('no-orders')}>
                    <i class="fas fa-file-search"></i>
                    <div>Chưa có lệnh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        
        
        
        
        <div className={cx('')}></div>
        <div className={cx('')}></div>
      </div>
    </div>
  )
}

export default SellPro