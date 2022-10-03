import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Layout
import DefaultLayout from '~/layouts';

//Page
import Home from '~/pages/Home';
import Login from './pages/Login';
import SellPro from './pages/SellPro';
import SellQuickly from './pages/SellQuickly';
import All from './pages/SellQuickly/All';
import Basic from './pages/SellQuickly/Basic';
import Defi from './pages/SellQuickly/Defi';
import Layer from './pages/SellQuickly/Layer';

function App() {


    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='' element={<DefaultLayout />}>
                        <Route path='' element={<Home />} />
                        <Route path='/sellquickly' element={<SellQuickly />} >
                            <Route path='all' element={<All />} />
                            <Route path='basic' element={<Basic />} />
                            <Route path='defi' element={<Defi />} />
                            <Route path='layer' element={<Layer />} />
                        </Route>
                        <Route path='/sellpro' element={<SellPro />} />
                    </Route>
                    
                    {/* <Route path='/login' element={<Login/>} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
