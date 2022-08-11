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

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='' element={<DefaultLayout />}>
                        <Route path='' element={<Home />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/zing-chart' element={<Zingchart />} />
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
