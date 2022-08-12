import React from 'react'
import classNames from 'classnames/bind';
import styles from './VN.module.scss';
import { useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function MVVN() {
  const [showResult, setShowResult] = useState(false);
  
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div className={cx('search-nav')}>
      <div className={cx('zm-dropdown', 'zm-group-dropdown', 'mar-r-10')}>
        <HeadlessTippy 
          interactive
          visible={showResult}  
          onClickOutside={handleHideResult}   
          placement={'bottom'}             
            render={(attrs) => (
              <div className={cx('zm-dropdown-content')} tabIndex="-1" {...attrs}>
                <div className={cx('zm-dropdown-list-item')}>Rap Việt</div>
                <div className={cx('zm-dropdown-list-item')}>Rock Việt</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Trữ Tình</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Cách Mạng</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Dân Ca - Quê Hương</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Trịnh</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Thiếu Nhi</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Không Lời</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Phim</div>
                <div className={cx('zm-dropdown-list-item')}>Dance Việt</div>
                <div className={cx('zm-dropdown-list-item')}>Cải Lương</div>
                <div className={cx('zm-dropdown-list-item')}>R&B Việt</div>
                <div className={cx('zm-dropdown-list-item')}>TV Show</div>
                <div className={cx('zm-dropdown-list-item')}>V-Pop</div>
                <div className={cx('zm-dropdown-list-item')}>EDM Việt</div>
                <div className={cx('zm-dropdown-list-item')}>Nhạc Tôn Giáo</div>
                <div className={cx('zm-dropdown-list-item')}>Radio Online</div>  
              </div>
          )}
        >
          <div className={cx('zm-dropdown-trigger')}>
              <i className={cx('icon', 'ic-song', 'mar-r-5', 'fas fa-music')}></i>
              <button className={cx('zm-btn', 'dropdown-button', 'button')}> 
                <span className={cx('dropdown-name')}>Tất cả</span>
                <i className="fas fa-chevron-down"></i>
                {/* <i className="fas fa-chevron-up"></i> */}
              </button>
          </div>

        </HeadlessTippy>       
      </div>

      



      <div className={cx('zm-dropdown', 'mar-r-10')}>
        <div className={cx('zm-dropdown-trigger')}>
          <i className={cx('icon', 'ic-song', 'mar-r-5', 'fas fa-bars')}></i>
          <button className={cx('zm-btn', 'dropdown-button', 'button')}> 
            <span className={cx('dropdown-name')}>Nghe nhiều</span>
            <i className="fas fa-chevron-down"></i>
            {/* <i className="fas fa-chevron-up"></i> */}
          </button>
        </div>
        {/* <div className={cx('zm-dropdown-content')}>
          <div className={cx('zm-dropdown-list-item')}>rap viet</div>
        </div> */}
      </div>


    </div>
  )
}

export default MVVN