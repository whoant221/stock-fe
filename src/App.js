import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Layout
import DefaultLayout from '~/layouts';

//Page
import Home from '~/pages/Home';
import Nhacmoi from '~/pages/Nhacmoi';
import Radio from '~/pages/Radio';
import Top100 from '~/pages/Top100';
import Types from '~/pages/Types';
import User from '~/pages/User';
import Zingchart from '~/pages/Zingchart';
import Follow from './pages/Follow';
import LayoutRankTop from './pages/Zingchart/LayoutRankTop';
import Top100VN from './pages/Zingchart/Top100VN/Top100VN';
import Top100US from './pages/Zingchart/Top100US/Top100US';
import Top100KOREA from './pages/Zingchart/Top100KOREA/Top100KOREA';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='' element={<DefaultLayout />}>
                        <Route path='' element={<Home />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/zing-chart' element={<Zingchart />} />


                        {/* các page nhỏ sẽ được để trong Route cha như này */}
                        <Route path='/zing-chart-tuan' element={<LayoutRankTop />} >
                            <Route path='/zing-chart-tuan/Bai-hat-Viet-Nam' element={<Top100VN />} />
                            <Route path='/zing-chart-tuan/bai-hat-US-UK' element={<Top100US />} />
                            <Route path='/zing-chart-tuan/bai-hat-Kpop' element={<Top100KOREA />} />
                        </Route>
                        



                        <Route path='/radio' element={<Radio />} />
                        <Route path='/following' element={<Follow />} />
                        <Route path='/top100' element={<Top100 />} />
                        <Route path='/nhac-moi' element={<Nhacmoi />} />
                        <Route path='/types' element={<Types />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
