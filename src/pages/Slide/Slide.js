
import classNames from 'classnames/bind';
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css'
import { useState, useEffect } from 'react';
import styles from './Slide.module.scss'

const cx = classNames.bind(styles)

function Slide() {
    const [getSlide, setGetSlide] = useState([]);

    useEffect(() => {
        document.title =
            'Zing MP3 | Nghe tải nhạc chất lượng cao trên destop, mobile và TV';
    }, []);

    useEffect(() => {
        axios   
        .get(`https://apizingmp3.herokuapp.com/api/home`, {
            params: {
                page: 1,
            }
        })
        .then((res) => {
            setGetSlide(res.data.data.items[0].items)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

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
                                src={item.banner}   
                                alt={index} 
                            />
                        </div>
                    )
                }) 
            )
        }
    }

    return ( 
        <div className={cx('gallery')}>
            <div className= {cx('gallery-content')}>
                {Slideshow()}
                <button 
                    className= {cx('galleryButton', 'btn-right')} 
                    onClick={() => { changeSlide()}
                }>
                    <i className="fal fa-angle-right"></i>
                </button>
                <button 
                    className={cx('galleryButton', 'btn-left')} 
                    onClick={() => {changeSlide2()}
                }>
                    <i className="fal fa-angle-left"></i>
                </button>
            </div>
        </div>
    );
}

export default Slide;