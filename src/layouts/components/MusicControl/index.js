import classNames from 'classnames/bind';
import styles from './MusicControl.module.scss' 

import Media from '~/components/Media';

const cx = classNames.bind(styles)

function MusicControl() {
    return ( 
        <div className={cx('wrapper', 'px-5 flex justify-between items-center')}>
            <div className={cx('control-left', 'flex justify-between items-center')}>
                <Media large/>
            </div>

        </div>
     );
}

export default MusicControl;