import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Top100Item.module.scss';

const cx = classNames.bind(styles);

const Top100Item = ({ title, to, icon }) => {
    return (
        <div>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={to}
            >
                <li className='item'>
                    <span>{icon}</span>
                    <span className='title'>{title}</span>
                </li>
            </NavLink>
        </div>
    );
};

export default Top100Item;
