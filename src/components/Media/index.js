import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Media.module.scss';
import Icon from '~/components/Icon';

const cx = classNames.bind(styles)

function Media({ largeCd, largeContent, nowrap }) {

    const [heart, setHeart] = useState(false)

    const handleToggleHeart = () => {
        if(heart === false) {
            setHeart(true)
        } else {
            setHeart(false)
        }
    }

    const classes = cx('wrapper', {
        largeCd,
        largeContent,
    });

    return ( 
        <div className={classes}>
            <div className={cx('cd')}>
                <img className={cx('cd-thumb')} src='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg' alt='cd thumb' />
            </div>
            <div className={cx('media-content', 'flex-auto')}>
                <div className={cx('song-name','text-sm', {nowrap})}>Ánh Nắng Của Anh</div>
                <div className={cx('singer-name', 'text-xs')}>Đức Phúc</div>
            </div>
            <div className={cx('action','flex')}>
                <Tippy content="Thêm vào thư viện" hideOnClick='false'>
                    <div 
                        className="icon"
                    >
                        <Icon 
                            onClick={handleToggleHeart}
                            isActive={heart}
                            icon={<i className="fal fa-heart"></i>}
                            activeIcon={<i className="fas fa-heart"></i>}
                        />
                    </div>
                </Tippy>
                
                <Tippy content="Xem thêm">
                    <div className="icon">
                        <Icon icon={<i className="far fa-ellipsis-h"></i>}/>
                    </div>
                </Tippy>
            </div>
        </div>
     );
}

export default Media;