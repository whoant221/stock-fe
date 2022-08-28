import classNames from 'classnames/bind';

import styles from './MusicItem.module.scss';
import Icon from '../Icon';
import HeartIcon from '../Icon/Heart';
import Image from '../Image';

const cx = classNames.bind(styles)

function MusicItem({ className, song, number, ranking }) {

    const formatTime = (time) => {
        if(time < 10) {
            return `0${time}`
        } else {
            return time
        }
    }
    const minuteTime = formatTime(Math.floor(song.duration / 60))
    const secondTime = formatTime(song.duration - (minuteTime * 60))

    return (
        <div className={cx('wrapper', {[className]: className})}>
            <div className={cx('media')}>
                <div className={cx('media-left')}>
                    
                        {ranking ? (
                            <div className={cx('prefix', 'mr-[15px]')}>
                                <span className={
                                        number < 3 ? cx(`num-${number}`) : cx('num')
                                    }
                                >
                                    {number}
                                </span>
                                <span className={cx('line')}></span>
                            </div>
                        ) : (
                            <div className={cx('prefix', 'mr-[10px]')}>
                                <i className="fal fa-music"></i>
                            </div>
                        )}
                    <div className={cx('thumb-wrap')}>
                        <Image className={cx('thumb-img')} src={song.thumbnail} alt={song.title} />
                    </div>
                    <div className={cx('song-infor')}>
                        <h3 className={cx('song-name','text-sm')}>{song.title}</h3>
                        <h5 className={cx('singer-name', 'text-xs')}>{song.artistsNames}</h5>
                    </div>
                </div>
                <div className={cx('media-content')}>
                    <div className={cx('album-infor', 'text-xs')}>
                        <span>{song.album.title}</span>
                    </div>
                </div>
                <div className={cx('media-right')}>
                    <div className={cx('hover-items')}>
                        <div className='flex items-center content-between'>
                            {song.mvlink ? (
                                <div className={cx('item')}>
                                    <Icon icon={<i className="fal fa-tv-music"></i>}/>
                                </div>
                            ) : ''}
                            <div className={cx('item')}>
                                <Icon icon={<i className="fal fa-microphone"></i>}/>
                            </div>
                            <div className={cx('item')}><HeartIcon data={song} /></div>
                            <div className={cx('item')}>
                                <Icon icon={<i className="far fa-ellipsis-h"></i>}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx('items')}>
                        <div className='flex items-center content-between'>
                            <div className={cx('item')}><HeartIcon data={song} /></div>
                            <div className={cx('item', 'duration')}>{minuteTime}:{secondTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicItem;