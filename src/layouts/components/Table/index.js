import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import inforStock from "~/api/inforStock";
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
import { setNameBank } from '../../../redux/actions';
const cx = classNames.bind(styles);

function Table() {
    const dispatch = useDispatch();

    const [colorGreen, setColorGreen] = useState('green');
    const [colorRed, setColorRed] = useState('red');
    const [colorYellow, setColorYellow] = useState('yellow');

    const [ACB, setACB] = useState();
    const [TCB, setTCB] = useState();
    const [VCB, setVCB] = useState();

    useEffect(() => {
        setInterval(() => {
            const money = async ()  =>{
                try{
                    const data1 = await inforStock.getACB()
                    const data2 = await inforStock.getTCB()
                    const data3 = await inforStock.getVCB()
                    setACB(data1.data);
                    setTCB(data2.data);
                    setVCB(data3.data);
                }
                catch (err) {
                    console.log(err);
                }
            }
            money()
        }, 3000);
    }, []);

    const acb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('ACB'));
        dispatch(actions.setDetailBank(ACB))
    }

    const tcb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('TCB'));
        dispatch(actions.setDetailBank(TCB))
    }

    const vcb =() => {
        dispatch(actions.setLayout(true));
        dispatch(actions.setNameBank('VCB'));
        dispatch(actions.setDetailBank(VCB))
    }
    
  return (
    <div className={cx('price-board-table')}>
        <div className={cx('ag-theme-dark')}>
            <div className={cx('ag-layout-normal')}>
                <div className={cx('ag-root-wrapper-body')}>
                    <table>
                        <thead>
                            <tr>  
                                <th rowSpan={2}> </th>  
                                <th rowSpan={2}>CK</th>  
                                <th rowSpan={2}>Trần</th>  
                                <th rowSpan={2}>Sàn</th>  
                                <th rowSpan={2}>TC</th>  
                                <th colSpan={6}>Bên mua</th>  
                                <th colSpan={1}>Khớp lệnh</th>  
                                <th colSpan={6}>Bên bán</th>  
                                <th rowSpan={2}>Tổng KL</th>  
                                <th rowSpan={2}>Cao</th>  
                                <th rowSpan={2}>Thấp</th>  
 
                            </tr>  
                            <tr>  
                                <td>Giá 3</td>  
                                <td>KL 3</td>  
                                <td>Giá 2</td>  
                                <td>KL 2</td>  
                                <td>Giá 1</td>  
                                <td>KL 1</td>  
                                <td>Giá</td>  
                                <td>Giá 1</td>  
                                <td>KL 1</td>   
                                <td>Giá 2</td>  
                                <td>KL 2</td>   
                                <td>Giá 3</td>  
                                <td>KL 3</td> 
                        
                            </tr> 
                        </thead>
                        {ACB && TCB && VCB ?
                        <tbody id={cx('customers')}>                        
   
                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={acb}>{ACB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={acb}>{ACB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={acb}>{ACB.ref_price}</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>
                                        { parseFloat(ACB.ref_price) + (1 % 100)}</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', colorYellow)} onClick={acb}>-</th>
                                    <th className={cx('right', 'set_light')} onClick={acb}>{ACB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>{ACB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={acb}>
                                        {ACB.lowest_price == 99999999 ? '0' : ACB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>

                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> TCB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={tcb}>{TCB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={tcb}>{TCB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={tcb}>{TCB.ref_price}</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>
                                        { parseFloat(TCB.ref_price) + (1 % 100)}</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', colorRed)} onClick={tcb}>-</th>
                                    <th className={cx('right', 'set_light')} onClick={tcb}>{TCB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>{TCB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={tcb}>
                                        {TCB.lowest_price == 99999999 ? '0' : TCB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>

                            <Tippy 
                            content='Click để đặt lệnh' 
                            arrow={false}
                            followCursor={true}
                            plugins={[followCursor]} 
                            theme={'table'}
                            >
                                <tr>     
                                    <th className={cx('center')}><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}>
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> VCB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={vcb}>{VCB.floor_price}</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={vcb}>{VCB.ceil_price}</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={vcb}>{VCB.ref_price}</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>
                                        { parseFloat(VCB.ref_price) + (1 % 100)}</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', colorGreen)} onClick={vcb}>-</th>
                                    <th className={cx('right', 'set_light')} onClick={vcb}>{VCB.total_volume}</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>{VCB.highest_price}</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={vcb}>
                                        {VCB.lowest_price == 99999999 ? '0' : VCB.lowest_price}
                                    </th>
                                </tr> 
                            </Tippy>
                        </tbody>
                        :null}
                    </table>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table