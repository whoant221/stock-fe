import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Basic.module.scss';
const cx = classNames.bind(styles);

function Basic() {
  return (
    <table className= {cx("table")}>
        <thead className="grey lighten-2">
            <tr>
                <th scope="col">Coin</th>
                <th scope="col">Giá Mua (VNT)	</th>
                <th scope="col">Giá Bán (VNT)</th>
                <th scope="col">24h	</th>
                <th scope="col">Thao Tác	</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th> 
                    <img src={'https://fiahub-assets.s3.ap-southeast-1.amazonaws.com/coin/ETH.png'} className = {cx('set_img')}> 
                    </img>
                    ETH
                </th>
                <td className={cx('grean')}>32,009,314 VNT</td>
                <td className={cx('orange')}>31,269,534 VNT</td>
                <td className={cx('orange')}>-1.62 %</td>
                <td className={'flex'}>
                    <Tippy content='MUA' placement={'left-end'}><a className={cx('a')}>MUA</a></Tippy>
                    <Tippy content='BAN' placement={'left-end'}><a className={cx('a')}>BAN</a></Tippy>
                    <Tippy content='NAP' placement={'left-end'}><a className={cx('a')}>NAP</a></Tippy>
                    <Tippy content='RUT' placement={'left-end'}><a className={cx('a')}>RUT</a></Tippy>
                </td>         
            </tr>
        </tbody>
    </table>
  )
}

export default Basic