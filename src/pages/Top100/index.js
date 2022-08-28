import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading/Loading';
import Playlist from '~/components/Playlist';
import styles from './Top100.module.scss'
import { ReactComponent as Banner } from '~/images/bannertop100.svg';

const cx = classNames.bind(styles)

function Top100() {
    const [topMusic, setTopMusic] = useState()
    const [musicVN, setMusicVN] = useState()
    const [musicAsia, setMusicAsia] = useState()
    const [musicUsUk, setMusicUsUk] = useState()
    const [musicConcert, setMusicConcert] = useState()
    
    useEffect(() => {
        function homePage5() {
            axios   
                .get(`https://apizingmp3.herokuapp.com/api/top100`)
                .then((res) => {
                    setTopMusic(res.data.data[0].items)
                    setMusicVN(res.data.data[1].items)
                    setMusicAsia(res.data.data[2].items)
                    setMusicUsUk(res.data.data[3].items)
                    setMusicConcert(res.data.data[4].items)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        homePage5()   
    }, [])

    const renderLoading = () => {
        if(topMusic) {
            return(
                <div className={cx('wrapper')}>
                    <div className={cx('banner-top100')}>
                        <div className={cx('bg-img')}></div>
                        <div className={cx('bg-blur')}></div>
                        <div className={cx('bg-blur-2')}></div>
                        <Banner className={cx('banner-svg')} />
                    </div>
                    <div className={cx('section')}>
                        <h3 className={cx('section-title')}>Nổi bật</h3>
                        <div className={cx('list-playlist')}>
                            {topMusic && topMusic.map((playlist, index) => {
                                if(index < 5) {
                                    return (
                                        <Playlist 
                                            key={playlist.encodeId}
                                            className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
                    <div className={cx('section')}>
                        <h3 className={cx('section-title')}>Nhạc Việt Nam</h3>
                        <div className={cx('list-playlist')}>
                            {musicVN && musicVN.map((playlist) => {
                                return (
                                    <Playlist 
                                        key={playlist.encodeId}
                                        className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
                            })}
                        </div>
                    </div>
                    <div className={cx('section')}>
                        <h3 className={cx('section-title')}>Nhạc Châu Á</h3>
                        <div className={cx('list-playlist')}>
                            {musicAsia && musicAsia.map((playlist) => {
                                return (
                                    <Playlist 
                                        key={playlist.encodeId}
                                        className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
                            })}
                        </div>
                    </div>
                    <div className={cx('section')}>
                        <h3 className={cx('section-title')}>Nhạc Âu Mỹ</h3>
                        <div className={cx('list-playlist')}>
                            {musicUsUk && musicUsUk.map((playlist) => {
                                return (
                                    <Playlist 
                                        key={playlist.encodeId}
                                        className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
                            })}
                        </div>
                    </div>
                    <div className={cx('section')}>
                        <h3 className={cx('section-title')}>Nhạc Hòa Tấu</h3>
                        <div className={cx('list-playlist')}>
                            {musicConcert && musicConcert.map((playlist) => {
                                return (
                                    <Playlist 
                                        key={playlist.encodeId}
                                        className='w-[25%] px-3 md:w-[20%] md:px-3.5 mb-7'
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
                            })}
                        </div>
                    </div>
                </div>
            )
        } else return(<Loading/>)
    }


    return <>{renderLoading()}</>
    
}

export default Top100;