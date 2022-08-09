import classNames from 'classnames/bind';
import 'react-slideshow-image/dist/styles.css'

import Slide from './Slide/Slide';
import styles from './Home.module.scss'
const cx = classNames.bind(styles)

function Home() {
    
    
    return (
        <div className={cx('wrapper')}>
            <Slide />
        </div>
    );
}

export default Home;