import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout() {

    return (
        <div className={cx('wrapper')}>
            <Header />         
            <div className={cx('page')}>
                <Outlet />
            </div> 
        </div>
    );
}

export default DefaultLayout;
