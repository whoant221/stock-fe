import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Nav from '~/layouts/components/Header/nav';
import Chart from '../Home/Chart';
import OrderBook from './OrderBook';
import styles from './SellPro.module.scss';
const cx = classNames.bind(styles);

function SellPro() {
  const [checkChart, setCheckChart] = useState('candle_solid');
  useEffect(() => {
    document.title =
    'Bitbank | Giao dịch chứng khoán';
  }, [])


  return (
    <div className={cx('main-page')}>
      <Nav/>
      <div className={cx('main-page')}>
        <div className={cx('market-container')}>
          <div className={cx('trading-pair')}>
            <div className={cx('pair-switcher')}>
              <div className={cx('toggle', 'current-coin-name')}>
                <img src="https://static.coinall.ltd/cdn/assets/imgs/221/CF408EA4DD2B5F00.png" alt="AVAX" width="28px" height="28px"></img>
                AVAX
                <i className={cx('fix',"fas fa-sort-down")}></i>
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

          <div className={cx('chart-container')}>
            <div className={cx('app')}>
              <div className={cx('k-line-chart-container')}>
                <div className={cx('chart-top-bar')}>
                  <div className={cx('common-intervals')}>

                    {checkChart === 'candle_solid'
                    ? <span className={cx('period', 'line')} onClick={() => {setCheckChart('area')}}>Nến</span>
                    : <span className={cx('period', 'line')} onClick={() => {setCheckChart('candle_solid')}}>Đường</span>}

                    <span className={cx('period','active')}>15m</span>
                    <span className={cx('period')}>1H</span>
                    <span className={cx('period')}>4H</span>
                    <span className={cx('period')}>1D</span>
                  </div>
                </div>
                            
                <div className={cx('k-line-chart')}>
                  <Chart style={{height: 330}} checkChart={checkChart}/>
                </div>

              </div>
            </div>
          </div>

          <div className={cx('orders-container')}>
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
                    <i className="fas fa-file-search"></i>
                    <div>Chưa có lệnh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <OrderBook/>

          <div className={cx('trades')}>
            <div className={cx('area-title')}>Giao dịch thị trường</div>

            <div className={cx('area-thead')}>
              <div className={cx('item-td')}>Giá (USDT)</div>
              <div className={cx('item-td', 'a-right')}>Số lượng (AVAX)</div>
              <div className={cx('item-td', 'a-right')}>Thời gian</div>
            </div>

            <div className={cx('area-tbody')}>
              <div className={cx('orderbook-progress')}>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
              </div>
            </div>

            
            
          </div>

          <div className={cx('trade-container')}>
            <div className={cx('purchase-container')}>
              <div className={cx('tabs')}>
                <div className={cx('trade-type-wrapper')}>
                  <div className={cx('nav-tabs-wrapper')}>
                    <div className={cx('nav-tabs-container')}>
                      <div className={cx('nav-tabs')}>
                        <div className={cx('tab-link')}>Lệnh</div>
                      </div>
                    </div>
                  </div>            
                </div>

                <div className={cx('tab-content', 'tab-content-visible')}>
                  <div className={cx('trading-tabs')}>
                    <div className={cx('trading-nav-tabs')}>
                      <div className={cx('tab-link', 'tab-link-mua')}>Mua</div>
                      <div className={cx('tab-link', 
                      // 'tab-link-ban'
                      )}>Bán</div>
                    </div>

                    <div className={cx('tab-content')}> 
                      <div className={cx('buyform')}>

                        <from className={cx('form-inline')}>
                          <div className={cx('field-text')}>
                            <label>Số dư khả dụng:</label>                     
                            <span>0 USDT</span>
                          </div>
                          <div className={cx('field')}>
                            <label>Tỉ giá</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} value={0} placeholder></input>
                            </div>
                            <label className={cx('unit')}>USDT</label>
                          </div>
                          <div className={cx('field')}>
                            <label>Số lượng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder={'Min 0.01'}></input>
                            </div>
                            <label className={cx('unit')}>AVAX</label>
                          </div>
                          <div className={cx('field')}>
                            <label>Tổng cộng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder></input>
                            </div>
                            <label className={cx('unit')}>USDT</label>
                          </div>
                        </from>

                        <from className={cx('form-control')}>
                          <div className={cx('primary-actions')}>
                            <div className={cx('btn-medium_bid')}>Mua</div>
                          </div>
                        </from>

                        <from className={cx('form-control')}>
                          <div className={cx('primary-actions')}>
                            <div className={cx('btn-medium_ask')}>Bán</div>
                          </div>
                        </from>


                      </div>
                    </div>
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

export default SellPro