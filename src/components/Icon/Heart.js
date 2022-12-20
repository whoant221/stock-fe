import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Icon.module.scss';
const cx = classNames.bind(styles)

function HeartIcon({activeNoColor }) {
    const icon = () => {
        return(
            <span className={cx('icon')}>
                <i className="fal fa-heart"></i>    
            </span>
        )
    }
    const active_icon = () => {
        return(
            <span className={cx('icon', 'active-icon')}>
                <i className="fas fa-heart"></i>    
            </span>
        )
    }


    return (  
        <>
            <Tippy
                content={title}
                hideOnClick='true'
            >
                <button className={cx('wrapper', {active: isActive, activeNoColor})} onClick={handleClick}>
                    {icon()}
                    {active_icon()}
                </button>
            </Tippy>
        </>
    );
}

export default HeartIcon;