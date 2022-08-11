import React, { useContext } from "react";
import "./follow.css";
import ItemSinger from './ItemSinger/index';
// import { VideoContext } from "../../context/GetVideoProvider";

const Follow = () => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  // const { miniatureVideo } = useContext(VideoContext);

  return (

      <div
        className="content"
        // style={{
        //   height: `${
        //     prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
        //   }`,
        // }}
      >
        <div className="zm__navbar">
          <div className="zm__navbar__skin">
            <ul className="zm__navbar__menu">
              <li className="zm__navbar__item zm__active__bar">Việt Nam</li>
              <li className="zm__navbar__item">US-UK</li>
              <li className="zm__navbar__item">K-pop</li>
              <li className="zm__navbar__item">hoa ngữ</li>
              <li className="zm__navbar__item">nổi bật</li>
            </ul>
          </div>
        </div>
        <div className="carousel__wapper" style={{ marginBottom: "60px" }}>
          <ItemSinger/>
        </div>
        <div className="follower__container">
          <div className="follower__left">
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/5/2/4/0/5240960e0c44f700b8d5369ef8cfd380.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Ninh Dương Lan Ngọc</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Nét đẹp lao động sáng nay 😜</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/3e5cafaf88ea61b438fb') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 2
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/0/7/2/4072454d7bd64f7700e420c27a7d18fd.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Chi Pu</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>9 tháng 8 lúc 11:10</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Cuối cùng Chi Pu cũng đã chính thức comeback! MV Black Hickey vừa ra mắt, Chi mời mọi người thưởng thức thật “đã tai ngon mắt” nhaaa</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "120.0748%",
                      background: 'url("https://photo-zmedia-zmp3.zmdcdn.me/w512_png/27e31cb13bf4d2aa8be5") center top / cover no-repeat'
                    }}
                  >
                    {/* <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 216
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 0
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/c/b/3/4cb3cc5a19be786f0771ba8e2c530828.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Hương Ly</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>9 tháng 8 lúc 10:52</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Cậu cả ở trong gia phả 😘😘</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "100.0748%",
                      background: 'url("https://photo-zmedia-zmp3.zmdcdn.me/w512_png/47dd908fb7ca5e9407db") center top / cover no-repeat'
                    }}
                  >
                    {/* <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 216
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 0
                </div>
              </div>
            </div>
          </div>

          <div className="follower__right">
          <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/a/9/1/4a91d506fc7144c7716b9d3166f2c4b6.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Sơn Tùng M-TP</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>9 tháng 8 lúc 10:47</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>🌘</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "120.0748%",
                      background:                 
                        'url("https://photo-zmedia-zmp3.zmdcdn.me/w512_png/b39f01cd2688cfd69699")center top / cover no-repeat'
                    }}
                  >
                    {/* <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 404
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 3
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/1/d122f030d505f3a4f51cc333343e95ee_1499850029.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>jang mi</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Bé ....</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "56.0748%",
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/e7d77c245b61b23feb70') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 2
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/f/6/08f684039151576cf256a9972b4ca63f.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Nam Em</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>10 tháng 8 lúc 9:24</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Chấp cánh bay cao bay xa bay lên… 🌱🍀🍀🍀</span>
                <div className="video__follower">
                  {/* <div
                    className="feed-video-follower"
                    style={{
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/3e5cafaf88ea61b438fb') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 12
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 0
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/avatars/8/e/8e02a864575266866ce9ab90731747bc_1455449226.png"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>Yanbi</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>10 tháng 8 lúc 18:59</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>🐱🤣</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "120.0748%",
                      background:                 
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/27e671b556f0bfaee6e1') center center / cover no-repeat",
                    }}
                  >
                    {/* <span className="controller__itemmedia play__item center">
                      <i class="far fa-play-circle"></i>
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fal fa-heart"></i> 12
                </div>
                <div className="follower__comment">
                  <i className="fal fa-comment"></i> 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Follow;