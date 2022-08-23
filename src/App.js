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
import Song from './pages/User/Song';
import Playlist from './pages/User/Playlist';
import History from './pages/User/History';
import Zingchart from '~/pages/Zingchart';
import Follow from './pages/Follow';
import LayoutRankTop from './pages/Zingchart/LayoutRankTop';
import Top100VN from './pages/Zingchart/Top100VN/Top100VN';
import Top100US from './pages/Zingchart/Top100US/Top100US';
import Top100KOREA from './pages/Zingchart/Top100KOREA/Top100KOREA';
import MV from './pages/MV';
import MVVN from './pages/MV/VN';
import MVUS from './pages/MV/US-UK';
import MVKpop from './pages/MV/Kpop';
import MVHoaTau from './pages/MV/HoaTau';



function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='' element={<DefaultLayout />}>
                        <Route path='' element={<Home />} />
                        <Route path='/user' element={<User />}> 
                            <Route path="/user/music/song" element={<Song />} />
                            <Route path="/user/playlist" element={<Playlist />} />
                            <Route path="/user/history" element={<History />} />
                        </Route>
                        
                        <Route path='/zing-chart' element={<Zingchart />} />


                        {/* các page nhỏ sẽ được để trong Route cha như này */}
                        <Route path='/zing-chart-tuan' element={<LayoutRankTop />} >
                            <Route path='/zing-chart-tuan/Bai-hat-Viet-Nam' element={<Top100VN />} />
                            <Route path='/zing-chart-tuan/bai-hat-US-UK' element={<Top100US />} />
                            <Route path='/zing-chart-tuan/bai-hat-Kpop' element={<Top100KOREA />} />
                        </Route>



                        <Route path='/the-loai-video' element={<MV />} >
                            <Route path='/the-loai-video/Viet-Nam' element={<MVVN />} />
                            <Route path='/the-loai-video/Au-My' element={<MVUS />} />
                            <Route path='/the-loai-video/Han-Quoc' element={<MVKpop />} />
                            <Route path='/the-loai-video/Khong-Loi' element={<MVHoaTau />} />
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
