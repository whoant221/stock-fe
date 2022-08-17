import React from 'react'
import classNames from 'classnames/bind';
import styles from './Film.module.scss';
import { Link, Outlet } from "react-router-dom";
const cx = classNames.bind(styles);

function Film() {
  return (
    <div className={cx('video-container')}>
        <div className={cx('video-header')}>
            <div className={cx('level')}>
                <div className={cx('level-left')}>
                  <div className={cx('level-item')}>
                    <div className={cx('media')}>
                      <div className={cx('media-left')}>
                        <figure className={cx('image', 'is-40x40', 'is-rounded')}>
                          <img src='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg'></img>
                        </figure>

                      </div>
                      <div className={cx('media-content')}>
                        <div className={cx('title')}>Túp Lều Vàng</div>
                        <div className={cx('subtitle', 'is-one-line')}>
                          <Link to={'#'} className={cx('is-ghost')}>Nguyễn Đình Vũ</Link>
                          <Link to={'#'} className={cx('is-ghost')}>, ACV</Link>
                        </div>
                      </div>
                      <div className={cx('media-right')}>
                        <button className={cx('zm-btn', 'zm-tooltip-btn')}>
                          <i className={cx('icon','fal fa-heart')}></i>
                        </button>
                        <button className={cx('zm-btn', 'zm-tooltip-btn')}>
                          <i className={cx('icon','fal fa-music')}></i>
                        </button>
                        <button className={cx('zm-btn', 'zm-tooltip-btn')}>
                          <i className={cx('icon','far fa-ellipsis-h')}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('level-right')}>
                  <button className={cx('zm-btn', 'zm-tooltip-btn')}>
                    <i className={cx('icon','fal fa-compress-wide')}></i>
                  </button>
                  <button className={cx('zm-btn', 'zm-tooltip-btn')}>
                    <i className={cx('icon','fal fa-times')}></i>
                  </button>
                </div>
            </div>
        </div>
        <div className={cx('video-body')}>
          <div className={cx('container')}>
            <div className={cx('columns', 'is-multiline')}>
              <div className={cx('video-player', 'column', 'mar-b-0')}>
                <div id={cx('videoPlayer')}>
                  <div className={cx('player-button-minimize')}>
                    <button className={cx('zm-btn', 'zm-tooltip-btn', 'mar-r-5', 'is-hover-circle', 'button')}>
                      <i className={cx('icon','fal fa-spinner-third')}></i>
                    </button>
                    <button className={cx('zm-btn', 'zm-tooltip-btn', 'is-hover-circle', 'button')}>
                      <i className={cx('icon','fal fa-spinner-third')}></i>
                    </button>
                  </div>
                  <div className={cx('player-info-fullscreen')}>
                    Cuộn trang để xem nhiều hơn
                    <i className={cx('icon','fal fa-chevron-down')}></i>
                  </div>
                  {/* <div className={cx('--z--player')}> */}
                    <iframe className={cx('class')} preload='metadata' src='https://vnso-zn-23-tf-mcloud-bf-s7-mv-zmp3.zmdcdn.me/AqGT9yFoe48/6a574b3cbc7855260c69/09e9d50d95487c162559/720/Tim-Piano-Cover.mp4?authen=exp=1660791034~acl=/AqGT9yFoe48/*~hmac=d087ed3b1c152e90db3de49d12c50112'></iframe>

                    {/* <div className={cx('--z--zpl-settings-menu', 
                    '--z--show'
                    )}>
                      <div className={cx('--z--zpl-panel')}>
                        <div className={cx('--z--panel-scroll-wrapper')}>
                          <div className={cx('--z--zpl-panel-inner')}>
                            <div className={cx('--z--zpl-menu-item')}>
                              <div className={cx('--z--zpl-item-label')}>Chất lượng</div>
                              <div className={cx('--z--zpl-item-content')}>
                                <div className={cx('--z--zpl-has-expand')}>
                                  <span>Auto 1080p</span>
                                  <i className={cx('icon_menu', 'fal fa-angle-right')}></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      
                    
                    </div>

                    <div className={cx('--z--controls-wrapper')}>
                      <div className={cx('--z--controls')}>
                        <div className={cx('--z--progress-bar')}>
                          <span className={cx('--z--bar', '--z--bar-bg')}></span>
                          <span className={cx('--z--bar', '--z--bar-fill-load',)}></span>
                          <span className={cx('--z--bar', '--z--bar-fill-recent',)}>
                            <span className={cx('--z--bullet')}></span>
                          </span>
                          <span className={cx('--z--seek-time', 
                          // '--z--hide'
                          )}>02:06</span>
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                  
                             
                 


                </div>
              </div>
              <div className={cx('queue-player', 'column', 'mar-b-0')}>
                  <div className={cx('video-queue', 'is-vertical')}>
                    <div className={cx('list-playing')}>
                      <div className={cx('container', 'mar-b-30')}>
                        <div className={cx('list-playing-header')}></div>
                      </div>
                    </div>
                  </div>
                  
                  
                  
                  <div className={cx('')}></div>
                  <div className={cx('')}></div>
                  <div className={cx('')}></div>
                  <div className={cx('')}></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Film