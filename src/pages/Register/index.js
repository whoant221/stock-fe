import React from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import inforUser from "../../api/inforUser";
import { useNavigate } from 'react-router-dom';
import blockChainStorage from '~/utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Bitbank | Đăng nhập,Đăng ký tài khoản';
    window.scrollTo(0, 0)
  }, []);

  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [identification_Number, setIdentification_Number] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  console.log(typeof phone_number)
  console.log(typeof identification_Number.trim())

  const addAccout = async () => {
    if ( name === '' ||
      fullName === '' ||
      password === '' ||
      address === '' ||
      phone_number === '' ||
      fullName === '' ||
      day > 31 ||
      month > 12 ||
      year > new Date().getFullYear()
    ) toast.error("Vui lòng nhập thông tin đầy đủ !");
    else {
      try {
        const res = await inforUser.postRegister({
          username: name,
          password: password,
          fullName: fullName,
          address: address,
          phoneNumber: phone_number,
          identificationNumber: identification_Number.trim(),
          birthday: `${year}-${month}-${day}`
        });
        if (res.success === false) toast.error("Dữ liệu nhập vào sai !");
        else {
          blockChainStorage.setInfoRegister({username: name ,password: password})
          toast.success("Tạo tài khoản thành công !");
          navigate('/login');
        }
      }
      catch (err) {
        toast.error('Cung cấp tài khoản không hỗ trợ');
      }
    }
  }



  return (
    <div className={cx("container")}>
      <div className={cx("screen")}>
        <div className={cx("screen__content")}>
          <form className={cx("login")}>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-user")}></i>
              <input type="text" className={cx("login__input")} maxLength="25" size="25" placeholder="Họ và Tên" 
              onChange={(e)=> setFullName(e.target.value) }></input>
            </div>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-user-astronaut")}></i>
              <input type="text" className={cx("login__input")} maxLength="25" size="25" placeholder="Tên sử dụng"
              onChange={(e)=> setName(e.target.value) }></input>
            </div>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-map-marker-alt")}></i>
              <input type="text" className={cx("login__input")} placeholder="Địa chỉ"
              onChange={(e)=> setAddress(e.target.value) }></input>
            </div>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-mobile")}></i>
              <input type="text" className={cx("login__input")} 
              pattern="[0-9]*" maxLength="10" size="10" placeholder="Số điện thoại"
              onChange={(e)=> setPhone_Number(e.target.value) }></input>
            </div>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "far fa-id-card")}></i>
              <input type="text" className={cx("login__input")} 
              pattern="[0-9]*" maxLength="9" size="9" placeholder="Số Chứng Minh"
              onChange={(e)=> setIdentification_Number(e.target.value) }></input>
            </div>

            <div className={cx("login__field")}>
              <i className={cx("login__icon", "fas fa-lock")}></i>
              <input type="password" className={cx("login__input")} placeholder="Mật khẩu"
              onChange={(e)=> setPassword(e.target.value) }></input>
            </div>

            <div className={cx("field-inline-block")}>
              <label>Ngày</label>
              <input type="text" pattern="[0-9]*" maxLength="2" size="2" className={cx("date-field", 'input')} 
              onChange={(e)=> setDay(e.target.value) }></input>
            </div>
            /
            <div className={cx("field-inline-block")}>
              <label>Tháng</label>
              <input type="text" pattern="[0-9]*" maxLength="2" size="2" className={cx("date-field", 'input')} 
              onChange={(e)=> setMonth(e.target.value) }></input>
            </div>
            /
            <div className={cx("field-inline-block")}>
              <label>Năm</label>
              <input type="text" pattern="[0-9]*" maxLength="4" size="4" className={cx("date-field date-field--year", 'input')} 
              onChange={(e)=> setYear(e.target.value) }></input>
            </div>

            <div className={cx("button", "login__submit")} onClick={addAccout}>
              <span className={cx("button__text")} >Đăng ký ngay</span>
              <i className={cx("button__icon", "fas fa-chevron-right")}></i>
            </div>				
          </form>
        </div>
        <div className={cx("screen__background")}>
          <span className={cx("screen__background__shape", "screen__background__shape4")}></span>
          <span className={cx("screen__background__shape", "screen__background__shape3")}></span>		
          <span className={cx("screen__background__shape", "screen__background__shape2")}></span>
          <span className={cx("screen__background__shape", "screen__background__shape1")}></span>
        </div>		
      </div>
    </div>
  )
}

export default Register