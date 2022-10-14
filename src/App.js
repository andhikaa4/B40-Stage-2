
import Home from './Pages/Home';
import NavBefore from './Component/NavBefore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import EditProfileU from './Pages/EditProfileU';
import AddProduk from './Pages/addProduk';
import ProfileParner from './Pages/ProfilePartner';
import EditProfileP from './Pages/EditProfileP';
import IncomeTransaction from './Pages/IncomeTransaction';
import { useContext } from 'react';
import { CardContext } from './Component/Context/cardContext';

function App() {

  const [dataCard] = useContext(CardContext)


  return (
    <div className='bg'>
      <Router>
        <NavBefore />
        <Routes> 
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Menu/:id' element={<Menu />}/>
          <Route exact path='/Cart' element={<Cart />}/>
          <Route exact path='/Profile' element={<Profile />}/>
          <Route exact path='/user-edit' element={<EditProfileU />}/>
          <Route exact path='/Add-Product' element={<AddProduk />}/>
          <Route exact path='/Profile-Partner' element={<ProfileParner />}/>
          <Route exact path='/partner-edit' element={<EditProfileP />}/>
          <Route exact path='/income-partner' element={<IncomeTransaction />}/>
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
