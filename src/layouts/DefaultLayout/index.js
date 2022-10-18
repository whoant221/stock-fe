import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Nav from '~/layouts/components/Header/nav';
import styles from './DefaultLayout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const location = useLocation();
    return (
        (location.pathname === '/'
        ? <div className={cx('wrapper')}>
            <Header />         
            <div className={cx('page')}>
                <Outlet />
            </div> 
        </div>
        : <div className={cx('main-page')}>
            <Nav/>  
            <div className={cx('content')}>
                <Outlet />
            </div> 
        </div>)
    );
}

export default DefaultLayout;
