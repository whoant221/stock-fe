import React, { useState } from "react";
import styles from './Follow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

const ItemSinger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    
    <>
      <div
        className={cx("zma__list__item")}
        style={{
          transform: `${isActive ? "translate3d(-600px, 0px, 0px)" : ""}`,
        }}
      >
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png"
              alt=""
            />
          </a>
        </div>
        <div className={cx("item__zma")}>
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
              alt=""
            />
          </a>
        </div>
      </div>
      
      <button 
      className={cx('zm-btn', 'zm-carousel-control-prev', 'button', 'carousel__prev', `${!isActive ? "unprev__carousel" : ""}`)}
      onClick={() => setIsActive(false)}
      >
        <i className="fal fa-angle-left"></i>
      </button>

      <button 
      className={cx('zm-btn', 'zm-carousel-control-next', 'zm-disabled', 'button', 'carousel__next', `${isActive ? "unnext__carousel" : ""}`)}
      onClick={() => setIsActive(true)}
      >
        <i className="fal fa-angle-right"></i>
      </button>
      
    </>
  );
};

export default ItemSinger;
