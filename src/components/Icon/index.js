import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles)

function Icon({ 
    className,
    icon,
    activeIcon,
    isActive=false,
    activeNoColor=false,
    square=false,
    hover=false,
    
    btn,
    s14,
    s18,
    s20,
    s24,
}) {

    const classes = cx('wrapper', {
        [className]: className,
        active: isActive,
        hover,
        square,
        activeNoColor,
        btn,
        s14,
        s18,
        s20,
        s24,
    });

    return (
        <div className={classes}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon', 'active-icon')}>{activeIcon}</span>
        </div>
    );
}

export default Icon;