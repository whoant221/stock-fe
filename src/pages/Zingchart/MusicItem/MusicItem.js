import React from 'react';
import classNames from 'classnames/bind';
import styles from './MusicItem.module.scss';

const cx = classNames.bind(styles);

const MusicItem = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('music-rank')}>
                <span
                    className={
                        props.num < 4 ? cx(`num-${props.num}`) : cx('num')
                    }
                >
                    {props.num}
                </span>
                <span className={cx('line')}></span>
                <img src={props.thumbnail} alt={props.title} />
                <i className='fas fa-play'></i>
                <div className={cx('music-details')}>
                    <p>{props.title}</p>
                    <a>{props.artistsNames}</a>
                </div>
                {props.name && <p>{props.name}</p>}
            </div>
            <div className={cx('music-hover')}>
                <div className={cx('music-hover-icon')}>
                    <span>
                        <i className='far fa-microphone'></i>
                    </span>
                    <span>
                        <i className='far fa-heart'></i>
                    </span>
                    <span>...</span>
                </div>
                <p>05:03</p>
            </div>
        </div>
    );
};

export default MusicItem;
