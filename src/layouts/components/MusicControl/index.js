import classNames from 'classnames/bind';
import styles from './MusicControl.module.scss' 

import Media from '~/components/Media';
import PlayerBar from '~/layouts/components/PlayerBar';
import Icon from '~/components/Icon';

const cx = classNames.bind(styles)

function MusicControl() {
    return ( 
        <div className={cx('wrapper', 'px-5 flex justify-between items-center')}>
            <div className={cx('control-left', 'flex items-center justify-start')}>
                <Media largeCd/>
            </div>
            <PlayerBar/>
            <div className={cx('control-right', 'flex items-center justify-end')}>
                <Icon>
                    <i className="fal fa-tv-music"></i>
                </Icon>
                <Icon s14>
                    <i className="fal fa-microphone"></i>
                </Icon>
                <Icon s14>
                    <i className="fal fa-window-restore"></i>
                </Icon>
                <div className={cx('control-volume', 'flex items-center')}>
                    <Icon dblChildren isActive activeNoColor>
                        <i class="fal fa-volume"></i>
                        <i class="fal fa-volume-mute"></i>
                    </Icon>
                    <input id="volume" class={cx("volume")} type="range" value="50" step="1" min="0" max="100"></input>
                </div>
                <span className={cx('divide', 'block mx-5')}></span>
                <Icon noHover s14 square activeNoColor isActive>
                    <i class="fal fa-list-music"></i>
                </Icon>
            </div>

        </div>
     );
}

export default MusicControl;