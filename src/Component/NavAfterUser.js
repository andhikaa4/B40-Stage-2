
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Keranjang from '../Pages/Image/Keranjang.png'
import Zayn from '../Pages/Image/Zayn.png' 
import Dropdown from 'react-bootstrap/Dropdown';
import User from '../Pages/Image/user.png'
import Logout from '../Pages/Image/logout.png'


function NavAfterUser() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegis, setShowRegis] = useState(false);

  const handleCloseRegis = () => setShowRegis(false);
  const handleShowRegis = () => setShowRegis(true);


  return (
    <Router>
        <div className='bg-warning'>
        <Navbar  expand="lg">
        <Container xxl>
        <Navbar.Brand href="/"><img style={{maxHeight: "70px"}} src="https://www.5ways.com.au/Themes/BPDTHEME01/theme-client-updates/img/logos/logo-footer.png" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

          </Nav>
            <img className="me-4" src={Keranjang} alt=""/>
            
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img src={Zayn} alt=""/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><img style={{marginRight:"5px"}} src={User} alt=""/> Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><img style={{marginRight:"8px"}} src={Logout} alt=""/>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    
        </div>
        
        
        

        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>

    </Router>
  )
}



export default NavAfterUser