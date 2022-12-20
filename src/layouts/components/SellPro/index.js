
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import * as actions from '~/redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import OrderBook from '~/layouts/components/OrderBook';
import Chart from '~/layouts/components/Chart';
import styles from './SellPro.module.scss';
import History from '../History';
import HistoryStock from '../HistoryStock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import inforUser from "~/api/inforUser";
const cx = classNames.bind(styles);

function SellPro() {
  const thanhMV = useSelector(state => state.header.active)
  const nameBank = useSelector(state => state.header.name)
  const detailBank = useSelector(state => state.header.detail)

  const dispatch = useDispatch();
  

  const [checkChart, setCheckChart] = useState('candle_solid');
  const [check1m, setCheck1m] = useState('active');
  const [check5m, setCheck5m] = useState('');
  const [check15m, setCheck15m] = useState('');
  const [check30m, setCheck30m] = useState('');

  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  
  useEffect(() => {
    document.title = 'Bitbank | Giao dịch chứng khoán';
    window.scrollTo(0, 0)
  }, [])

  const Bid = async () => {
    if ( amount == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
    else {
        try {
            const res = await inforUser.postCommand({
                price: price,
                amount: amount,
                type: 'bid',
                symbol: nameBank[1] ? nameBank[1] :'ACB'
            });
            if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
            else toast.success(`Đặt lệnh mua thành công cổ phiếu ${nameBank[1] ? nameBank[1] :'ACB'} !`);
        }
        catch (err) {
            toast.error('Bạn phải thực hiện đăng nhập !');
        }
    }
  }

  const Ask = async () => {
      if ( amount == '' || price == '') toast.error("Vui lòng nhập thông tin đầy đủ !");
      else {
          try {
              const res = await inforUser.postCommand({
                  price: price,
                  amount: amount,
                  type: 'ask',
                  symbol: nameBank[1] ? nameBank[1] :'ACB'
              });
              if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
              else toast.success(`Đặt lệnh bán thành công cổ phiếu ${nameBank[1] ? nameBank[1] :'ACB'}!`);
          }
          catch (err) {
              toast.error('Bạn phải thực hiện đăng nhập !');
          }
      }
  }


  return (
      <div className={cx('main-page')} style={{display: `${thanhMV[1]===undefined ? 'none' : thanhMV[1]}`}}>

        <div className={cx('main-page-map')} onClick={()=>{dispatch(actions.setLayout('none'))}}></div>

        <div className={cx('market-container')}>    
        
          <div className={cx('market-container-icon')} onClick={()=>{dispatch(actions.setLayout('none'))}}> 
            <i className="fal fa-times"></i>  
          </div>
          {detailBank[1] || nameBank[1]?
                      <div className={cx('trading-pair')}>
              <div className={cx('pair-switcher')}>
                <div className={cx('toggle', 'current-coin-name')}>
                  {nameBank[1]}
                </div>
              </div>
              <div className={cx('ticker-last', 'c-up')}>
                <div className={cx('market24h')}>
                  <span>1.11%</span>
                </div>
                <div className={cx('lastestPrice')}>
                  <span>{detailBank[1].ref_price}</span>
                </div>
              </div>
              <div className={cx('ticker-list')}>

                <div className={cx('ticket-item')}>
                  <span className={cx('label')}>24h thấp nhất</span>
                  <span className={cx('value')}>{detailBank[1].lowest_price}</span>
                </div>
                <div className={cx('ticket-item')}>
                  <span className={cx('label')}>24h cao nhất</span>
                  <span className={cx('value')}>{detailBank[1].highest_price}</span>
                </div>
                <div className={cx('ticket-item')}>
                  <span className={cx('label')}>KL 24h (AVAX)</span>
                  <span className={cx('value')}>{detailBank[1].total_volume}</span>
                </div>
                <div className={cx('ticket-item')}>
                  <span className={cx('label')}>Giá sàn 24h (VND)</span>
                  <span className={cx('value')}>{detailBank[1].ceil_price}</span>
                </div>
                <div className={cx('ticket-item')}>
                  <span className={cx('label')}>Giá trần 24h (VND)</span>
                  <span className={cx('value')}>{detailBank[1].floor_price}</span>
                </div>
                
              </div>
  
            </div>
          : null}


          <div className={cx('chart-container')}>
            <div className={cx('app')}>
              <div className={cx('k-line-chart-container')}>
                <div className={cx('chart-top-bar')}>
                  <div className={cx('common-intervals')}>
                    {checkChart === 'candle_solid'
                    ? <span className={cx('period', 'line')} onClick={() => {setCheckChart('area')}}>Nến</span>
                    : <span className={cx('period', 'line')} onClick={() => {setCheckChart('candle_solid')}}>Đường</span>}
                    <span className={cx('period', check1m)} onClick={() => {
                      setCheck1m('active')
                      setCheck5m(null)
                      setCheck15m(null)
                      setCheck30m(null)
                    }}>1m</span>
                    <span className={cx('period', check5m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m('active')
                      setCheck15m(null)
                      setCheck30m(null)
                    }}>5m</span>
                    <span className={cx('period', check15m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m(null)
                      setCheck15m('active')
                      setCheck30m(null)
                    }}>15m</span>
                    <span className={cx('period', check30m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m(null)
                      setCheck15m(null)
                      setCheck30m('active')
                    }}>30m</span>
                  </div>
                </div>
                            
                <div className={cx('k-line-chart')}>
                  <Chart style={{height: 330}} checkChart={checkChart}/>
                </div>

              </div>
            </div>
          </div>

          <History/>

          <OrderBook/>

          <HistoryStock/>

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
                      <div className={cx('tab-link', 'tab-link-mua')} onClick={Bid}>Mua</div>
                      <div className={cx('tab-link', 'tab-link-ban')} onClick={Ask}>Bán</div>
                    </div>

                    <div className={cx('tab-content')}> 
                      <div className={cx('buyform')}>

                        <div className={cx('form-inline')}>
                          {/* <div className={cx('field-text')}>
                            <label>Số dư khả dụng:</label>                     
                            <span>0 USDT</span>
                          </div> */}
                          <div className={cx('field')}>
                            <label>Giá</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder={'0'} onChange={(e) => setPrice(e.target.value)}></input>
                            </div>
                            <label className={cx('unit')}>VND</label>
                          </div>
                          <div className={cx('field')}>
                            <label>Khối lượng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder={'Min 0.01'} onChange={(e) => setAmount(e.target.value)}></input>
                            </div>
                            <label className={cx('unit')}></label>
                          </div>
                          <div className={cx('field')}>
                            <label>Tổng cộng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} value={`${amount*price}`}></input>
                            </div>
                            <label className={cx('unit')}>VND</label>
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

      </div>
  )
}

export default SellPro