import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Layout
import DefaultLayout from '~/layouts';
//Page
// import Home from '~/pages/Home';
import Register from './pages/Register';
import SellQuickly from './pages/SellQuickly';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Refills from './pages/Refills';
import Withdraw from './pages/Withdraw';
import Asset from './pages/Asset';
function App() {
    return (
        <Router>
            <div className='App'>
            <ToastContainer />
                <Routes>
                    <Route path='' element={<DefaultLayout />}>
                        <Route path='/' element={<SellQuickly />}/> 
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/asset' element={<Asset/>}/>
                        <Route path='/refills' element={<Refills/>}/>
                        <Route path='/withdraw' element={<Withdraw/>}/>
                    </Route>
                     
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
}
export default App;
