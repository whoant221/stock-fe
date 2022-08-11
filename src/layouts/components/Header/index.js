import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Search from '../Search';
import Icon from '~/components/Icon';
import styles from './Header.module.scss';
import images from '~/images';
import Menu from '~/components/Popper/Menu/Menu';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const userMenu = [
        {
            title: 'Nâng cấp VIP',
            leftIcon: <i className='fal fa-gem'></i>,
        },
        {
            title: 'Mua code VIP',
            leftIcon: <i className='fal fa-gem'></i>,
        },
        {
            title: 'Đăng xuất',
            leftIcon: <i className='fal fa-sign-out'></i>,
        },
    ];

    const settingMenu = [
        {
            title: 'Danh sách chặn',
            leftIcon: <i className='fal fa-ban'></i>,
        },
        {
            title: 'Chất lượng nhạc',
            leftIcon: <i className='fas fa-adjust'></i>,
            rightIcon: <i className='far fa-angle-right'></i>,
            children: [{ title: 'SQ: 128' }, { title: 'HD: 320' }],
        },
        {
            title: 'Giao diện',
            leftIcon: <i className='fal fa-play-circle'></i>,
            rightIcon: <i className='far fa-angle-right'></i>,
            children: [{ title: 'a' }, { title: 'b' }],
        },
        {
            title: 'Giới thiệu',
            leftIcon: <i className='fal fa-info-circle'></i>,
        },
        {
            title: 'Góp ý',
            leftIcon: <i className='fal fa-flag-alt'></i>,
            href: 'https://forms.gle/Nvh7kthdvr4a5SBd7',
        },
        {
            title: 'Liên Hệ',
            leftIcon: <i className='fal fa-phone-alt'></i>,
            href: 'https://mp3.zing.vn/huong-dan/contact',
        },
        {
            title: 'Thỏa thuận sử dụng',
            leftIcon: <i className='fal fa-file-alt'></i>,
            href: 'https://mp3.zing.vn/tnc',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <button className={cx('direct-btn')}>
                        <i className='fal fa-long-arrow-left'></i>
                    </button>
                    <button className={cx('direct-btn')}>
                        <i className='fal fa-long-arrow-right'></i>
                    </button>
                    <div className={cx('search')}>
                        <Search />
                    </div>
                </div>
                <div className={cx('right')}>
                    <Tippy content='Chủ đề'>
                        <div className={cx('icon')}>
                            <Icon
                                btn
                                hover
                                icon={<i className='far fa-tshirt'></i>}
                            />
                        </div>
                    </Tippy>
                    <Tippy content='Nâng cấp VIP'>
                        <div className={cx('icon')}>
                            <Icon
                                btn
                                hover
                                icon={<i className='fal fa-gem'></i>}
                            />
                        </div>
                    </Tippy>
                    <Tippy content='Tải lên'>
                        <div className={cx('icon')}>
                            <Icon
                                btn
                                hover
                                icon={
                                    <i
                                        style={{ transform: 'rotate(-90deg)' }}
                                        className='fal fa-sign-out'
                                    ></i>
                                }
                            />
                        </div>
                    </Tippy>
                    <Menu items={settingMenu}>
                        <div className={cx('icon')}>
                            <Icon
                                btn
                                hover
                                icon={<i className='fal fa-cog'></i>}
                            />
                        </div>
                    </Menu>
                    <Menu items={userMenu}>
                        <img
                            alt='avatar'
                            className={cx('user-avatar')}
                            src={images.defaultAvata}
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
