
import Home from './Pages/Home';
import NavBefore from './Component/NavBefore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import EditProfileU from './Pages/EditProfileU';
import AddProduk from './Pages/addProduk';
import ProfileParner from './Pages/ProfilePartner';
import EditProfileP from './Pages/EditProfileP';
import IncomeTransaction from './Pages/IncomeTransaction';
import { useContext, useState, useEffect } from 'react';
import { CardContext } from './Component/Context/cardContext';
import { CartProvider } from 'react-use-cart';
import {useCart} from 'react-use-cart'
import { API, setAuthToken } from './config/api';
import { UserContext } from './Component/Context/userContext';

function App() {

  // const navigate = useNavigate()

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  console.log(localStorage);

  const [state, dispatch] = useContext(UserContext);



  const {
    totalItems,
    addItem,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal, 
    isEmpty
  } = useCart();

  return (
    <div className='bg'>
      <Router>
        <NavBefore />
        <Routes> 
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Menu/:id' element={<Menu addItem={addItem} />}/>
          <Route exact path='/Cart' element={<Cart addLess={updateItemQuantity} cartTotal={cartTotal} totalItems={totalItems} items={items} empty={isEmpty} removeItem={removeItem}/>}/>
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
