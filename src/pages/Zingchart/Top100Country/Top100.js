import { Route, Routes } from 'react-router-dom';
import Top100KOREA from '../Top100KOREA/Top100KOREA';
import Top100US from '../Top100US/Top100US';
import Top100VN from '../Top100VN/Top100VN';
import Top100Item from './Top100Item/Top100Item';

const Top100Country = () => {
    return (
        <>
            <h1>Bảng</h1>
            <nav className='nav'>
                <Top100Item title='Việt Nam' to='viet-nam' />
                <Top100Item title='Việt Nam' to='us-uk' />
                <Top100Item title='Việt Nam' to='korea' />
            </nav>
        </>
    );
};

export default Top100Country;
