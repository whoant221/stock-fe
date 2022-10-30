import classNames from 'classnames/bind';
import Nav from '~/layouts/components/Header/nav';
import styles from './DefaultLayout.module.scss';
import { Outlet } from 'react-router-dom';
import SellPro from '~/layouts/components/SellPro';
const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('main-page')}>
            <SellPro/>
            <Nav/>  
            <div className={cx('content')}>
                <Outlet />
            </div> 
        </div>
    )
    
}

export default DefaultLayout;
