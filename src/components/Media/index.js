import classNames from "classnames/bind";
import styles from './Media.module.scss';

import Icon from '~/components/Icon';

const cx = classNames.bind(styles)

function Media({ largeCd, largeContent, nowrap }) {

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
                <Icon dblChildren>
                    <i className="fal fa-heart"></i>
                    <i className="fas fa-heart"></i>
                </Icon>
                <Icon >
                    <i className="far fa-ellipsis-h"></i>
                </Icon>
            </div>
        </div>
     );
}

export default Media;