import classNames from 'classnames/bind';
import styles from './PlayerBar.module.scss' 

import Icon from '~/components/Icon';

const cx = classNames.bind(styles)

function PlayerBar() {
    return ( 
        <div className={cx('wrapper', 'grow')}>
            <div className={cx('control-btns', 'flex justify-center grow')}>
                <Icon 
                    s18 className={cx('icon')}
                    icon={<i className="fal fa-random"></i>}   
                    activeIcon={<i className="fal fa-random"></i>}   
                />
                <Icon 
                    s18 className={cx('icon')}
                    icon={<i className="fal fa-step-backward"></i>}
                />
                <Icon 
                    s14 activeNoColor isActive
                    className={cx('icon', 'icon-play')}
                    icon={<i className="fas fa-play"></i>}   
                    activeIcon={<i className="fas fa-pause"></i>}   
                />
                <Icon 
                    s18 className={cx('icon')}
                    icon={<i className="fal fa-step-forward"></i>}   
                />
                <Icon 
                    s18 className={cx('icon')}
                    icon={<i className="fal fa-repeat"></i>}   
                    activeIcon={<i className="fal fa-repeat"></i>}   
                />
            </div>

            <div className={cx('control-time', 'flex grow justify-center items-center')}>
                <div className={cx('current-time')}>00:12</div>
                <input id="progress" className={cx("progress")} type="range" value="50" step="1" min="0" max="100"></input>
                <div className={cx('total-time')}>03:12</div>
            </div>
        </div>
     );
}

export default PlayerBar;