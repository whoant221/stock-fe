import classNames from 'classnames/bind';
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import config from '~/config';
import MySlide from './Slide/MySlide';
import NewRelease from './NewRelease/NewRelease';
import Playlist from '~/components/Playlist';
import styles from './Home.module.scss'
import Image from '~/components/Image';
import images from '~/images';
const cx = classNames.bind(styles)

function Home() {
    const [getSlide, setGetSlide] = useState();
    const [newRelease, setNewRelease] = useState();
    const [playlistToday, setPlaylistToday] = useState();
    const [newMusic, setNewMusic] = useState();
    const [mixArtists, setMixArtists] = useState();
    const [weekChart, setWeekChart] = useState()
    const [top100, setTop100] = useState()
    const [topNewMusic, setTopNewMusic] = useState()

    useEffect(() => {
        document.title =
            'Zing MP3 | Nghe tải nhạc chất lượng cao trên destop, mobile và TV';
    }, []);

    useEffect(() => {
        function homePage1() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/home`, {
                    params: {
                        page: 1,
                    }
                })
                .then((res) => {
                    setGetSlide(res.data.data.items[0].items)
                    setNewRelease(res.data.data.items[3].items[0])
                    setPlaylistToday(res.data.data.items[4].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        function homePage2() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/home`, {
                    params: {
                        page: 2,
                    }
                })
                .then((res) => {
                    setNewMusic(res.data.data.items[1].items)
                    setMixArtists(res.data.data.items[0].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        function homePage3() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/home`, {
                    params: {
                        page: 3,
                    }
                })
                .then((res) => {
                    setWeekChart(res.data.data.items[0].items)
                    setTop100(res.data.data.items[2].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        function homePage4() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/home`, {
                    params: {
                        page: 4,
                    }
                })
                .then((res) => {
                    console.log(res.data.data.items);
                    setTopNewMusic(res.data.data.items[0].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        homePage1()
        homePage2()
        homePage3()
        homePage4()
    },[])

    const propsSlidePlaylist = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    }

    const propsSlideMusic = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    }
    
    return (
        <div className={cx('wrapper')}>
            {getSlide && <MySlide getSlide={getSlide} />}
            <div className={cx('home-section')}>
                <h3 className={cx('section-title')}>Mới Phát Hành</h3>
                {newRelease && <NewRelease data={newRelease} />}
            </div>

            <div className={cx('home-section')}>
                <h3 className={cx('section-title')}>Lựa chọn hôm nay</h3>
                <div className={cx('list-playlist')}>
                    {playlistToday && playlistToday.map((playlist) => {
                        return (
                            <Playlist 
                                key={playlist.encodeId}
                                className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                                name={playlist.title}
                                describe={playlist.sortDescription}
                                link='#'        //mặc định
                                image={playlist.thumbnail || playlist.thumbnailM}
                                iconLeft={<i className="fal fa-heart"></i>}
                                iconLeftActive={<i className="fas fa-heart"></i>}
                                titleIconLeft='Thêm vào thư viện'
                            />
                        )
                    })}
                </div>
            </div>

            <div className={cx('home-section')}>
                <h3 className={cx('section-title')}>Nghệ sĩ yêu thích</h3>
                <div className={cx('list-slide')}>
                    <Slider {...propsSlidePlaylist} >
                        {mixArtists && mixArtists.map((artist, index) => {
                            return (
                                <div key={index} className={cx('card-wrapper')}>
                                    <div className={cx('artists-card')}>
                                        <img className={cx('card-img')} src={artist.thumbnail} />
                                        <div className={cx('card-content')}>
                                            <h4 className={cx('name-artists')}>{artist.artistsNames}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider >
                </div>         
            </div>

            <div className={cx('home-section')}>
                <h3 className={cx('section-title')}>Nhạc mới mỗi ngày</h3>
                <div className={cx('list-playlist')}>
                    {newMusic && newMusic.map((playlist) => {
                        return (
                            <Playlist 
                                key={playlist.encodeId}
                                className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                                name={playlist.title}
                                describe={playlist.sortDescription}
                                link='#'        //mặc định
                                image={playlist.thumbnail || playlist.thumbnailM}
                                iconLeft={<i className="fal fa-heart"></i>}
                                iconLeftActive={<i className="fas fa-heart"></i>}
                                titleIconLeft='Thêm vào thư viện'
                            />
                        )
                    })}
                </div>
            </div>

            <div className={cx('home-section')}>
                <div className={cx('list-playlist')}>
                    {weekChart && weekChart.map((item) => {
                        return (
                            <div className={cx('card-wrapper', 'w-[33.33%] px-3.5 mb-7')}>
                                <div className={cx('card-banner')}>
                                    <a className={cx('card-link')} href='#' ></a>
                                    <img src={item.cover} className={cx('card-img')} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={cx('home-section')}>
                <div className={cx('sectioc-header', 'flex justify-between')}>
                    <h3 className={cx('section-title')}>Top 100</h3>
                    <Link to={config.routes.top100} className={cx('section-link')}>Tất cả</Link>
                </div>
                <div className={cx('list-playlist')}>
                    {top100 && top100.map((playlist, index) => {
                        if(index < 5) {
                            return (
                                <Playlist 
                                    key={playlist.encodeId}
                                    className='w-[25%] px-3 md:w-[20%] md:px-3.5'
                                    name={playlist.title}
                                    describe={playlist.artists.map((artist, index) => {
                                        return(
                                            (index < playlist.artists.length-1) ? `${artist.name}, ` : `${artist.name}`
                                        )
                                    })}
                                    link='#'        //mặc định
                                    image={playlist.thumbnail || playlist.thumbnailM}
                                    iconLeft={<i className="fal fa-heart"></i>}
                                    iconLeftActive={<i className="fas fa-heart"></i>}
                                    titleIconLeft='Thêm vào thư viện'
                                />
                            )
                        }
                    })}
                </div>
            </div>

            <div className={cx('home-section')}>
                <div className={cx('sectioc-header', 'flex justify-between')}>
                    <h3 className={cx('section-title')}>Nhạc mới</h3>
                    <Link to={config.routes.nhacmoi} className={cx('section-link')}>Tất cả</Link>
                </div>
                <div className={cx('list-slide')}>
                    <Slider {...propsSlideMusic} >
                        {topNewMusic && topNewMusic.map((item, index) => {
                            return (
                                <div key={item.encodeId} className={cx('card-wrapper')}>
                                    <div className={cx('card-inner')}>
                                        <img src={item.thumbnail} className={cx('card-img')} />
                                        <div className={cx('top-music-content')}>
                                            <div className={cx('music-info')}>
                                                <a href={'#'} title={item.title} className={cx('title')}>{item.title}</a>
                                                <p className={cx('subtitle')}>{item.artistsNames}</p>
                                            </div>
                                            <div>
                                                <span className={cx('ranking')}>#{index+1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider >
                        
                </div>
            </div>
        </div>
    );
}

export default Home;
