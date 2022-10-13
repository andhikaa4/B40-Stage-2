
import Home from './Pages/Home';
import NavBefore from './Component/NavBefore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import EditProfileU from './Pages/EditProfileU';

function App() {
  return (
    <div className='bg'>
      <Router>
        <NavBefore />
        <Routes> 
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Menu' element={<Menu />}/>
          <Route exact path='/Cart' element={<Cart />}/>
          <Route exact path='/Profile' element={<Profile />}/>
          <Route exact path='/user-edit' element={<EditProfileU />}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
