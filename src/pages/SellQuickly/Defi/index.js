import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Defi.module.scss';
const cx = classNames.bind(styles);

function Defi() {
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
                    <img src={'https://fiahub-assets.s3.ap-southeast-1.amazonaws.com/coin/ETC.png'} className = {cx('set_img')}> 
                    </img>
                    ETC
                </th>
                <td className={cx('grean')}>670,905 VNT</td>
                <td className={cx('orange')}>655,508 VNT</td>
                <td className={cx('orange')}>-1.79 %</td>
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

export default Defi