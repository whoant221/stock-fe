import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Media.module.scss';
import Icon from '~/components/Icon';

const cx = classNames.bind(styles)

function Media({ 
    image,
    songName,
    singerName,
    mediaActive,

    largeCd, 
    largeContent, 
    nowrap,
    isActive,
    noHover,
}) {

    const [heart, setHeart] = useState(false)

    const handleToggleHeart = () => {
        if(heart === false) {
            setHeart(true)
        } else {
            setHeart(false)
        }
    }

    const classes = cx('wrapper', {
        active: isActive,
        noHover,
        largeCd,
        largeContent,
    });

    return ( 
        <div className={classes}>
            <div className={cx('cd')}>
                <img className={cx('cd-thumb')} src={image} alt='cd thumb' />
            </div>
            <div className={cx('media-content', 'flex-auto')}>
                <div className={cx('song-name','text-sm', {nowrap})}>{songName}</div>
                <div className={cx('singer-name', 'text-xs')}>{singerName}</div>
            </div>
            <div className={cx('action')}>
                <Tippy 
                    content={heart ? "Xóa khỏi thư viện" : "Thêm vào thư viện"}
                    hideOnClick='true'
                >
                    <div className="icon">
                        <Icon 
                            mediaActive={mediaActive}
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