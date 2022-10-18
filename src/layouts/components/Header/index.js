import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from './nav';
const cx = classNames.bind(styles);

function Header() {

    const propsSlide6 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const san = [
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'ETH/USD',
            price: 843.0005,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'up'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
        {
            name: 'BTC/USD',
            price: 15046.07,
            status: 'down'
        },
    ]

    return ( 
        <div className={cx('top_header')}>
            <section className={cx("top_margin", "top-header")}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={cx("col-md-12", 'center')}>
                            <ul className="currency-status">
                                <Slider {...propsSlide6}>
                                    {san.map((items, index) => {  return (
                                        <li className={cx('li_header')} key={index}>
                                            <a className={cx('items_header')} href="#" >
                                                {items.status === 'down' 
                                                ? <i className="fas fa-caret-down down-status"></i>
                                                : <i className="fas fa-caret-up up-status"></i>}                 
                                                <span>{items.name}</span>
                                                <span>{items.price}</span>
                                            </a>  
                                        </li>)                
                                    })}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 
            <Nav/>
        </div>
    );
}

export default Header;
