import History from '~/layouts/components/History'
import React from 'react'
import { useEffect, useState } from 'react';
import blockChainStorage from '~/utils/storage';
// import {useSelector,useDispatch} from 'react-redux';
// import * as actions from '~/redux/actions';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    // const dispatch = useDispatch();
    const [openUpdate, setOpenUpdate] = useState('none');
    // const info = useSelector(state => state.header.info)
    // console.log(info);

    const infoFirebase = blockChainStorage.getInfoFirebase()
    
  return (
    <div className={cx("container")}>

        <div className={cx("row")}>

            <div className={cx("row_info")}>
                 
                <div className="text-center">
                    <img src="https://source.unsplash.com/random/200x200?sig=incrementingIdentifier" className="avatar img-circle img-thumbnail" alt="avatar"></img>
                </div>
                
                {infoFirebase ? infoFirebase.providerData.map((items => {
                    return(
                    <div className={cx("list-group")} onClick={() => setOpenUpdate('block')}>
                        <div className={cx('green')}><span className={cx("pull-left")}>Số dư:</span> 0</div>
                        <div className={cx('violet')}><span className={cx("pull-left")}>Họ Tên:</span> {items.displayName}</div>
                        <div className={cx('blue')}><span className={cx("pull-left")}>Số điện thoại:</span> {items.phoneNumber}</div>
                    </div>  
                    )
                })) : null}


            </div>
            
            <div className={cx("row_update")} style={{ display: openUpdate}}>
                <div className={cx("form-group")}>        
                    <label htmlFor="first_name"><i className="fal fa-user"></i></label>
                    <input type="text" className="form-control" placeholder="Họ và tên"></input>
                </div>
    
                <div className={cx("form-group")}>
                    <label htmlFor="phone"><i className="fal fa-mobile"></i></label>
                    <input type="text" className="form-control" placeholder="Số điện thoại"></input>
                </div>
    
                <div className={cx("form-group")}>
                    <label htmlFor="email"><i className="fas fa-map-marker"></i></label>
                    <input type="email" className="form-control" id="location" placeholder="Địa chỉ"></input>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="password"><i className="far fa-lock-alt"></i></label>
                    <input type="password" className="form-control" placeholder="Mật Khẩu"></input>
                </div>


                
                <div className={cx("row_update-btn")}>
                    <button className={cx("row_update-delete")} onClick={() => setOpenUpdate('none')}> Hủy</button>
                    <button className={cx("row_update-save")}> Lưu</button>
                </div>
                   
            </div>

            <div className={cx("row_history")}>
                <History/>
            </div>
        </div>
    </div>
  )
}

export default Profile