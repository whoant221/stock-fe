import classNames from 'classnames/bind';
import Footer from '../../layouts/components/Footer';
import styles from './SellQuickly.module.scss';
import { Link, Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './NavbarSellQ/Menu';
import MenuItem from './NavbarSellQ/MenuItem';
const cx = classNames.bind(styles);

function SellQuickly() {

  const [all, setAll] = useState();
  const [basic, setBasic] = useState();
  const [defi, setDefi] = useState();
  const [layer, setLayer] = useState();

  useEffect(() => {
    document.title = 'Bitbank | Mua Bán Nhanh, Ethereum tại Việt Nam nhanh chóng';
  }, [window.location.href]);

  return (
    <div className={cx('maxW','layout')}>
      <div className={cx('main-contentWrapper')}>
        <div className={cx('main-content')}>
          <div className={cx('tabs')}>
            <div className={cx('segmented-bar')}>
              <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <Menu>
                  <MenuItem title={"Tất cả"} to={'/sellquickly/all'}/>
                  <MenuItem title={"Basic"} to={'/sellquickly/basic'}/>
                  <MenuItem title={"Defi & NFT"} to={'/sellquickly/defi'}/>
                  <MenuItem title={"Layer 1"} to={'/sellquickly/layer'}/>
                </Menu>
              </form>
              <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                  aria-label="Search"></input>
              </form>
            </div>
              <Outlet/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SellQuickly