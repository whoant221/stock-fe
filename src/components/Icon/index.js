import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles)

function Icon({ 
    className,
    icon,
    activeIcon,
    mediaActive,
    isActive=false,
    activeNoColor=false,
    square=false,
    hover=false,
    onClick,
    btn,
    s14,
    s18,
    s20,
    s24,
}) {

    const classes = cx('wrapper', {
        [className]: className,
        active: isActive,
        mediaActive,
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
        <div className={classes} onClick={onClick}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon', 'active-icon')}>{activeIcon}</span>
        </div>
    );
}

export default Icon;