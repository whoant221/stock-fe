import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '~/redux/actions';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
const cx = classNames.bind(styles);

function Table() {
    const dispatch = useDispatch();

    const [colorGreen, setColorGreen] = useState('green');
    const [colorRed, setColorRed] = useState('red');
    const [colorYellow, setColorYellow] = useState('yellow');
    
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
                                <th colSpan={2}>Khớp lệnh</th>  
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
                                <td>KL</td>  
                                <td>Giá 1</td>  
                                <td>KL 1</td>   
                                <td>Giá 2</td>  
                                <td>KL 2</td>   
                                <td>Giá 3</td>  
                                <td>KL 3</td> 
                        
                            </tr> 
                        </thead>

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
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                        <th className={cx('left', colorYellow)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>
                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorYellow)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorRed)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorRed)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>

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
                                    <th className={cx('center')} ><i className="fas fa-thumbtack"></i></th>
                                    <Tippy 
                                    content='Công ty | ACBsdasdasd' 
                                    arrow={false}
                                    followCursor={true}
                                    plugins={[followCursor]} 
                                    theme={'tomato'}
                                    >
                                        <th className={cx('left', colorGreen)} onClick={()=>{dispatch(actions.setLayout(''))}}> ACB </th> 
                                    </Tippy>

                                    <th className={cx('right', 'violet', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>122.40</th>
                                    <th className={cx('right', 'blue', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'yellow', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light')} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                    <th className={cx('right', 'set_light', colorGreen)} onClick={()=>{dispatch(actions.setLayout(true))}}>22.40</th>
                                </tr> 
                            </Tippy>

                        </tbody>
                    </table>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table