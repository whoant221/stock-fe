import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

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
                <Tippy content="MV">
                    <div className="icon">
                        <Icon icon={<i className="fal fa-tv-music"></i>}/>
                    </div>
                </Tippy>
                <Tippy content="Xem lời bài hát">
                    <div className="icon">
                        <Icon s14 icon={<i className="fal fa-microphone"></i>}/>
                    </div>
                </Tippy>
                <Tippy content="Chế độ cửa sổ">
                    <div className="icon">
                        <Icon s14 icon={<i className="fal fa-window-restore"></i>}/>
                    </div>
                </Tippy>
                
                
                <div className={cx('control-volume', 'flex items-center')}>
                    <Icon 
                        activeNoColor
                        icon={<i className="fal fa-volume"></i>}    
                        activeIcon={<i className="fal fa-volume-mute"></i>}
                    />
                    <input id="volume" className={cx("volume")} type="range" value="50" step="1" min="0" max="100"></input>
                </div>
                <span className={cx('divide', 'block mx-5')}></span>
                
                <Tippy content="Danh sách phát">
                    <div className="icon">
                        <Icon 
                            s14 hover square activeNoColor
                            icon={<i className="fal fa-list-music"></i>}
                            activeIcon={<i className="fal fa-list-music"></i>}
                        />
                    </div>
                </Tippy>
            </div>

        </div>
     );
}

export default MusicControl;