import React from 'react'
import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Left() {
    const [showResult, setShowResult] = useState(false);
  
    const show = () => { setShowResult(true) };
    const hide = () => { 
      setShowResult(false) 
      setHandleClick(handleClick+1);
    };
    const [handleClick, setHandleClick] = useState(0);
  
    useEffect(() => {
      if (handleClick % 2 === 1) setShowResult(true)
      else if (handleClick % 2 === 0) setShowResult(false)
    }, [handleClick]);

    return (
        <div className={cx('zm-dropdown', 'zm-group-dropdown', 'mar-r-10')}
        onClick={()=>{setHandleClick(handleClick+1);}} 
        >
            <HeadlessTippy 
            interactive
            visible={showResult}
            onClickOutside={hide}   
            placement={'bottom'}             
                render={(attrs) => (
                <div 
                onClick={showResult ? hide : show}
                className={cx('zm-dropdown-content')} 
                tabIndex="-1" {...attrs}>
                    <div className={cx('zm-dropdown-list-item')}>Rap / Hip Hop</div>
                    <div className={cx('zm-dropdown-list-item')}>Pop/Pop Ballad</div>
                    <div className={cx('zm-dropdown-list-item')}>Dance Pop</div>
                    <div className={cx('zm-dropdown-list-item')}>R&B</div>
                    <div className={cx('zm-dropdown-list-item')}>Rock</div>
                    <div className={cx('zm-dropdown-list-item')}>Nhạc Phim</div>
                    <div className={cx('zm-dropdown-list-item')}>Children's Music</div>
                </div>
            )}
            >
            <div className={cx('zm-dropdown-trigger')}>
                <i className={cx('icon', 'ic-song', 'mar-r-5', 'fas fa-music')}></i>
                <button className={cx('zm-btn', 'dropdown-button', 'button')}> 
                    <span className={cx('dropdown-name')}>Tất cả</span>
                    {showResult ? <i className="fas fa-chevron-up"></i>: <i className="fas fa-chevron-down"></i>}
                </button>
            </div>

            </HeadlessTippy>       
        </div>
    )
}

export default Left