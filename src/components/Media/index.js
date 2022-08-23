import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Media.module.scss';
import Icon from '~/components/Icon';
import HeartIcon from "../Icon/Heart";

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
            <div className={cx('media-content')}>
                <div className={cx('media-info')}>
                    <div className={cx('song-name','text-sm', {nowrap})}>{songName}</div>
                    <div className={cx('singer-name', 'text-xs')}>{singerName}</div>
                </div>
                <div className={cx('action')}>
                    <HeartIcon />
                    
                    <Tippy content="Xem thêm">
                        <div className="icon">
                            <Icon icon={<i className="far fa-ellipsis-h"></i>}/>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
     );
}

export default Media;