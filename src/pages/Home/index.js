import { getHome  } from 'nhaccuatui-api-full';
import classNames from 'classnames/bind';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useState, useEffect, useRef, Fragment } from 'react';
import styles from './Home.module.scss'
const cx = classNames.bind(styles)

function Home() {
    const [getSlide, setGetSlide] = useState([]);

    useEffect(() => {
        document.title =
            'Zing MP3 | Nghe tải nhạc chất lượng cao trên destop, mobile và TV';
    }, []);

    useEffect(() => {
        const getSlideHome = async () => {
            try {
                const res = await getHome()
                setGetSlide(res.newRelease.song)
            } catch (error) {
                alert(error);
            }
        };
        getSlideHome();
    },[])

    console.log(getSlide);


    const [state, setState] = useState({
        show1Index: 1,
        show2Index: 2,
        show3Index: 3,
        none1Index: 4,
        none2Index: 5,
        none3Index: 6,
    })
    const changeSlide = () => {
        setState({
            ...state,
            show1Index: ++state.show1Index > 6 ? 1 : state.show1Index++,
            show2Index: ++state.show2Index > 6 ? 1 : state.show2Index++,
            show3Index: ++state.show3Index > 6 ? 1 : state.show3Index++,
            none1Index: ++state.none1Index > 6 ? 1 : state.none1Index++,
            none2Index: ++state.none2Index > 6 ? 1 : state.none2Index++,
            none3Index: ++state.none3Index > 6 ? 1 : state.none3Index++,
        })
    }

    const changeSlide2 = () => {
        setState({
            ...state,
            show1Index: --state.show1Index < 1 ? 6 : state.show1Index--,
            show2Index: --state.show2Index < 1 ? 6 : state.show2Index--,
            show3Index: --state.show3Index < 1 ? 6 : state.show3Index--,
            none1Index: --state.none1Index < 1 ? 6 : state.none1Index--,
            none2Index: --state.none2Index < 1 ? 6 : state.none2Index--,
            none3Index: --state.none3Index < 1 ? 6 : state.none3Index--,
        })
    }


    const Slideshow = () => {
        if(getSlide){
            return (
                getSlide.map((item, index)=> {
                    let classActive = '';
                    if (index + 1 === state.show1Index) {
                        classActive = 'show1';
                    } else if (index + 1 === state.show2Index) {
                        classActive = 'show2';
        
                    } else if (index + 1 === state.show3Index) {
                        classActive = 'show3';
        
                    } else if (index + 1 === state.none1Index) {
                        classActive = 'hide1';
        
                    } else if (index + 1 === state.none2Index) {
                        classActive = 'hide2';
        
                    } else if (index + 1 === state.none3Index) {
                        classActive = 'hide3';
                    }
                    return(

                            <div className={cx(`itemGallary`, classActive)} key={index}>
                                <img 
                                    src={item.thumbnail}   
                                    alt={index} 
                                    className='p-3' 
                                />
                            </div>
       
                    )
                }) 
            )
        }
    }
    
    return (
        <div className={cx('khamPhaContent')}>
            <div className='mt-14'>
                <div className='gallery pt-6'>
                    <div className= {cx('gallery-content', 'flex w-full')}>
                        {Slideshow()}
                        <button className= {cx('galleryButton', 'btn2')} onClick={() => {
                            changeSlide();
                        }}><i class="fa fa-arrow-right"></i></button>
                        <button className={cx('galleryButton', 'btn1')} onClick={() => {
                            changeSlide2();
                        }}><i class="fa fa-arrow-left"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
