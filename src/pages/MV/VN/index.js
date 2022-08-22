import React from 'react'
import classNames from 'classnames/bind';
import styles from './VN.module.scss';
import { useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Wrapper from '~/components/Popper';

const cx = classNames.bind(styles);

function MVVN() {
  const [checkOpen, setCheckOpen] = useState(false);
  const [handleClick, setHandleClick] = useState(1);


  useEffect(() => {
    if (handleClick % 2 === 1) setCheckOpen(false)
    else if (handleClick % 2 === 0) setCheckOpen(true)
  }, [handleClick]);

  let classAction = ''

  const checkOpenClose = () => {
    
    return (
      <div 
        className={cx('zm-dropdown-trigger')}
        onClick={()=>{setHandleClick(handleClick+1);}} 
        >
          <i className={cx('icon', 'ic-song', 'mar-r-5', 'fas fa-music')}></i>
          <button className={cx('zm-btn', 'dropdown-button', 'button')}> 
            <span className={cx('dropdown-name')}>Tất cả</span>
            <i class="fas fa-chevron-down"></i>
            {/* <i class="fas fa-chevron-up"></i> */}
          </button>
      </div>
    )
  }

  console.log(checkOpen);

  return (
    <div className={cx('search-nav')}>
      <div className={cx('zm-dropdown', 'zm-group-dropdown', 'mar-r-10')}>
        {checkOpenClose()}
        <HeadlessTippy className={cx('zm-dropdown-content', 'close'
        // checkOpen ? classAction='' : classAction='close'
        )}
        placement={'bottom'}
        visible={true}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <Wrapper className="suggest">
                  <div>thanh</div>
              </Wrapper>
          </div>
      )}
        >

          
          {/* <div className={cx('zm-dropdown-list-item')}>Rap Việt</div>
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
          <div className={cx('zm-dropdown-list-item')}>Radio Online</div> */}

        </HeadlessTippy>
        
      </div>

      <div className={cx('zm-dropdown', 'mar-r-10')}>
        <div className={cx('zm-dropdown-trigger')}>
          <i className={cx('icon', 'ic-song', 'mar-r-5', 'fas fa-bars')}></i>
          <button className={cx('zm-btn', 'dropdown-button', 'button')}> 
            <span className={cx('dropdown-name')}>Nghe nhiều</span>
            <i class="fas fa-chevron-down"></i>
            {/* <i class="fas fa-chevron-up"></i> */}
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