import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles)
// icon size 14px 16px 18px 20px 24px
function Icon({ 
    children,
    dblChildren=false,
    isActive=false,
    activeNoColor=false,
    square=false,
    noHover=false,
    
    s14,
    s18,
    s20,
    s24,
    className,
}) {

    const classes = cx('wrapper', {
        [className]: className,
        dblChildren,
        isActive,
        noHover,
        square,
        activeNoColor,
    });

    const classSize = {
        s14,
        s18,
        s20,
        s24,
    }

    return ( 
        <div className={classes}>
            { dblChildren ?
                (isActive ? 
                    <span className={cx('icon', classSize)}>
                        {children[1]}
                    </span> :
                    <span className={cx('icon', classSize)}>
                        {children[0]}
                    </span> 
                ) :
                <span className={cx('icon', classSize)}>{children}</span>
            }
        </div>
    );
}

export default Icon;