import React from 'react'
import classNames from 'classnames/bind';
import styles from './Film.module.scss';
import { Link, Outlet } from "react-router-dom";
const cx = classNames.bind(styles);

function Film() {
  return (
    <div style={{backgroundImage:`url(https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/4/2/42b2a9729ac01f00652cb4eb5841ba62_1434613466.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className={cx('video-container')}>
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
                    <iframe className={cx('class')} preload='metadata' src='https://vnso-zn-23-tf-mcloud-bf-s7-mv-zmp3.zmdcdn.me/AqGT9yFoe48/6a574b3cbc7855260c69/09e9d50d95487c162559/720/Tim-Piano-Cover.mp4?authen=exp=1660965481~acl=/AqGT9yFoe48/*~hmac=8f2fcaf4597b4f6c1bb761b4511840fa'></iframe>

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
                        <div className={cx('list-playing-header')}>
                          <h3 className={cx('pull-left', 'title')}> Danh Sách Phát </h3>
                          <button className={cx('zm-btn', 'zm-auto-play-switch', 'pull-left', 'button')}>
                            <div> Tự Động Phát</div>
                            <i className={cx('icon_right', 'far fa-toggle-on')}></i>
                            {/* <i className={cx('icon_right', 'far fa-toggle-off')}></i> */}
                          </button>
                        </div>
                        <div className={cx('list-playing-body')}>
                          <div className={cx('list-playing-body-content')}>
                            <div className={cx('zm-carousel-wrapper')}>
                              <div className={cx('zm-carousel')}>
                                <div className={cx('zm-carousel__container')}>
                                  <div className={cx('zm-carousel-item', 'is-fullhd-1.2', 'is-widescreen-2', 'is-desktop-20', 'is-touch-3', 'is-tablet-3')}>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                    <div className={cx('zm-card', 'video-item', 'video-active')}>
                                      <div className={cx('zm-card-image', 'video-image')}>
                                        <figure className={cx('image', 'is-48x48')}>
                                          <img src='https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/2/6/2/8262c9f3b9c6d6fd96cd64bfe5ca0c25.jpg'></img>
                                        </figure>
                                        <div className={cx('opacity')}></div>
                                        <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                          <button className={cx('zm-btn', 'action-play', 'button')}>
                                            <i className={cx('icon', 'action-play', 'fas fa-play')}></i>
                                          </button> 
                                        </div>
                                        {/* <div className={cx('zm-brand')}>03:33</div> */}
                                        <div className={cx('zm-brand-playing')}>Đang phát</div>
                                      </div>
                                      <div className={cx('media')}>
                                        <div className={cx('media-content')}>
                                          <div className={cx('title')}>
                                            <Link className={cx('name_header')} to={'#'}>
                                              <span>Cum Cắc Cùm Cum</span>
                                            </Link>
                                          </div>
                                          <div className={cx('subtitle', 'is-one-line')}>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>Nguyễn Đình Vũ</Link>
                                            <Link className={cx('is-ghost', 'hover')} to={'#'}>, ACV</Link>
                                          </div>
                                          
                                        </div>                                  
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className={cx('track-horizontal')}>
                              <div className={cx('track-horizontal_mini')}></div>
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

export default Film