
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

  const navigate = useNavigate()

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  console.log(localStorage);


    // const [dataCard] = useContext(CardContext)
    const [state, dispatch] = useContext(UserContext)

    console.log(state);
  
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    useEffect(() => {
      if (state.isLogin == true && state.user.role == 'Seller') {
        navigate('/Profile-Partner');
      } else if (state.isLogin == true && state.user.role == 'Buyer') {
        navigate('/');
      }
  }, [state]);
  
  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      console.log(response);

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
  
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);



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
      <>
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
      </>

      
    </div>
  );
}

export default App;
