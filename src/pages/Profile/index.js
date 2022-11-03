import History from '~/layouts/components/History'
import React from 'react'
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);
function Profile() {
  return (
    <div className={cx("container")}>

        <div className={cx("row")}>

            <div className={cx("row_info")}>
                

                <div className="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"></img>
                    <div className={cx('text-center_img')}>Tải lên một bức ảnh khác...</div>
                    <input type="file" className="text-center center-block file-upload"></input>
                </div>
                
                
                <div className={cx("list-group")}>
                    <div className={cx('green')}><span className={cx("pull-left")}>Số dư:</span> 125231</div>
                    <div className={cx('violet')}><span className={cx("pull-left")}>Họ Tên:</span> Nguyễn Phúc Thanh</div>
                    <div className={cx('blue')}><span className={cx("pull-left")}>Số điện thoại:</span> 0338091539</div>
                    <div className={cx('yellow')}><span className={cx("pull-left")}>Địa chỉ:</span> 144 ChiLang P12 thanh pho vung tau</div>
                </div> 

            
            </div>
            
            <div className={cx("row_update")}>
                <div className={cx("form-group")}>        
                    <label htmlFor="first_name"><i className="fal fa-user"></i></label>
                    <input type="text" className="form-control" placeholder="Họ và tên"></input>
                </div>
    
                <div className={cx("form-group")}>
                    <label htmlFor="phone"><i class="fal fa-mobile"></i></label>
                    <input type="text" className="form-control" placeholder="Số điện thoại"></input>
                </div>
    
                <div className={cx("form-group")}>
                    <label htmlFor="email"><i class="fas fa-map-marker"></i></label>
                    <input type="email" className="form-control" id="location" placeholder="Địa chỉ"></input>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="password"><i className="far fa-lock-alt"></i></label>
                    <input type="password" className="form-control" placeholder="Mật Khẩu"></input>
                </div>


                
                <div className={cx("row_update-btn")}>
                    <button className={cx("row_update-save")}> Save</button>
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