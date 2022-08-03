import { useEffect, useState } from 'react';
import {
    getHome,
  } from "nhaccuatui-api-full";
import { Slide } from "react-slideshow-image";
import classNames from "classnames/bind";
import styles from './Home.module.scss';
const cx = classNames.bind(styles)


function Home() {

    const [getSlide, setGetSlide] = useState([]);

    useEffect(() => {
        const getSideHome = async () => {
            try {
                const res = await getHome()
                setGetSlide(res.newRelease.song)
            } catch (error) {
                alert(error);
            }
        };
        getSideHome(getSlide);
    },[])
    console.log(getSlide);

    function renderTopSearch() {
        if(getSlide) {
            return getSlide.map((item, index) => {
                return (                 
                    <p key={index}>      
                        <img
                        // className={cx('mt-10', 'mb-5', 'mb-md-0', 'col-md-12')}
                        src={item?.thumbnail}
                        alt="..."
                        />
                        {/* <div >{item.title}</div> */}
                    </p>
                )
            })
        }
    }

    return (
        <p className={cx('a')}>
            {/* <Slide slidesToScroll={1} className='a' slidesToShow={1} indicators={true} autoplay={false} responsive={[{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                }]}> */}

                <p>{renderTopSearch()}</p>
            {/* </Slide> */}
            
        </p>
        
    );
}

export default Home;
