import React from 'react'
import styles from './Content.module.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import getMV from '../../../../api/getMV';
import Loading from '../../Loading/Loading';
const cx = classNames.bind(styles);

function Content() {

    const [Effect, setEffect] = useState();

    const [getContent, setGetContent] = useState();
    useEffect(() => {
        const MVVN = async () => {
            try {
                const res = await getMV.getHoaTau();             
                setGetContent(res.data.data.items)
            } catch (error) {
                // alert(error);
            }
        };
        MVVN()
    }, [Effect]);



    const RenderImg = () => {
        if(getContent){
            return getContent.map((item, index)=>{
                return(
                    <div key={index}
                    className={cx('column', 'mar-b-30', 'is-fullhd-4', 'is-widescreen-4', 'is-desktop-4', 'is-touch-4', 'is-tablet-6')}>
                        <div 
                        className={cx('zm-card', 'video-item')}                
                        >                
                            <Link
                            to={`/video-clip/${item.encodeId}`}
                            className={cx('zm-card-image', 'video-image')}
                            >
                                <figure className={cx('image is-48x48')}>
                                <img src={item.thumbnailM}></img>
                                </figure>
                                <div className={cx('opacity')}></div>
                                <div className={cx('zm-box', 'zm-actions', 'video-actions')}>
                                <button className={cx('zm-btn', 'action-play', 'button')}>
                                    <i className={cx('icon', 'action-play', 'ic-svg-play-circle')}></i>
                                </button>
                                </div>
                                <div className={cx('zm-brand')}>03:33</div>
                            </Link>

                            <div className={cx('media')}>
                                <div className={cx('media-left')}>
                                <Link to={'/'}>
                                    <figure className={cx('image', 'is-40x40', 'is-rounded')}>
                                    <img src={item.artist.thumbnail}></img>
                                    </figure>
                                </Link>
                                </div>
                                <div className={cx('media-content')}>
                                    <div className={cx('title')}>
                                        <Link className={cx('font-nameMV')} to={'/'}>
                                        <span>
                                            <span>
                                            <span>{item.title}</span>
                                            </span>
                                            {/* <span style={'position: fixed; visibility: hidden; top: 0px; left: 0px;'}>...</span> */}
                                        </span>
                                        </Link>
                                    </div>
                                    <div className={cx('subtitle', 'is-one-line')}>                                   
                                        {item.artists.map((items, index) => {
                                            return(
                                                <Link key={index} className={cx('is-ghost')} to={'/'}>{items.name} </Link>
                                            )                                     
                                        })}              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else return(<Loading />)
    }

    


    return (
        <>{RenderImg()}</>
    )
}

export default Content