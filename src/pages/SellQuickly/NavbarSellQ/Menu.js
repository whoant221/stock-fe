import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


function Menu({ children }) {
    return <nav className={cx('item')}>{children}</nav>;
}

export default Menu;