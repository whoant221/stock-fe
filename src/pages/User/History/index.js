import classNames from "classnames/bind";
import { NavLink, Outlet } from "react-router-dom";
import styles from '../User.module.scss';
import { useState, useEffect } from 'react';
import * as actions from '~/redux/actions';
import {useSelector, useDispatch} from 'react-redux';
const cx = classNames.bind(styles)

function UserHistory() {

    const dispatch = useDispatch();
    const [getNameUrl, setGetNameUrl] = useState('');
  
    const handleGetName = () => {
      if(window.location.href === 'http://localhost:3000/history/song') setGetNameUrl('song')
      if(window.location.href === 'http://localhost:3000/history/playlist') setGetNameUrl('playlist')
      if(window.location.href === 'http://localhost:3000/history/video') setGetNameUrl('video')
      if(window.location.href === 'http://localhost:3000/history/radio') setGetNameUrl('radio')
      if(window.location.href === 'http://localhost:3000/history/podcast') setGetNameUrl('podcast')
    }
    useEffect(() => {
      dispatch(actions.addNameHistory(getNameUrl));
    }, [getNameUrl]);

    return ( 
        <div className={cx('child-container')}>
            <nav className={cx('navbar-wrap')}>
                <div className={cx('navbar-container')}>
                    <h4 className={cx('title')}>Phát gần đây</h4>
                    <nav onClick={handleGetName} className="flex">
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='./song'>
                            Bài hát
                        </NavLink>
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='./playlist'>
                            Playlist
                        </NavLink>
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='./video'>
                            MV
                        </NavLink>
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='./radio'>
                            RADIO
                        </NavLink>
                        <NavLink className={(nav) => cx('navbar-item', { active: nav.isActive })} to='./podcast'>
                            PODCAST
                        </NavLink>
                    </nav>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

export default UserHistory;