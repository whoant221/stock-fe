import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Layout 
import DefaultLayout from '~/layouts';

//Page
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import User from '~/pages/User';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Nhacmoi from '~/pages/Nhacmoi';
import Types from '~/pages/Types';
import Top100 from '~/pages/Top100';
import Follow from './pages/Follow';
import Top100Zing from './pages/Zingchart/Top100Zing';



function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="" element={<DefaultLayout />}>
                  <Route path="" element={<Home />}/>
                  <Route path="/user" element={<User />}/>
                  <Route path="/zing-chart" element={<Zingchart />}/>
                  <Route path="/zing-chart/top1001" element={<Top100Zing />}/>
                  <Route path="/radio" element={<Radio />}/>
                  <Route path="/following" element={<Follow />}/>
                  <Route path="/top100" element={<Top100 />}/>
                  <Route path="/nhac-moi" element={<Nhacmoi />}/>
                  <Route path="/types" element={<Types />}/> 
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
