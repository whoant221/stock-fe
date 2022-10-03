import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, noActive}) {
    return (
        <NavLink className={(nav) => cx('item_nav',{ action: nav.isActive})} to={to}>
            <span>{title}</span>
        </NavLink>
    );
}

export default MenuItem;