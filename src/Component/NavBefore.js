
import Home from '../Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Keranjang from '../Pages/Image/Keranjang.png'
import Zayn from '../Pages/Image/Zayn.png' 
import Dropdown from 'react-bootstrap/Dropdown';
import User from '../Pages/Image/user.png';
import Logout from '../Pages/Image/logout.png';
import Cart from '../Pages/Cart';
import {useNavigate} from 'react-router-dom';

function NavBefore(props) {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegis, setShowRegis] = useState(false);
  const handleCloseRegis = () => setShowRegis(false);
  const handleShowRegis = () => setShowRegis(true);

  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault()
    navigate("/")
  } 

  return (
    <div>
        <div className='bg-warning'>
        <Navbar  expand="lg">
        <Container xxl>
        <Navbar.Brand href="/" onClick={handleHome}><img style={{maxHeight: "50px"}} src="https://www.5ways.com.au/Themes/BPDTHEME01/theme-client-updates/img/logos/logo-footer.png" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

          </Nav>
          {isLoggedin ? (
        <PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />
            ) : (
        <GuestPage login={() => setIsLoggedin(!isLoggedin)} />
            )}
        </Navbar.Collapse>
        </Container>
        </Navbar>
    
        </div>
        
      
    </div>
        
        
    
  )
}

function PrivatePage(props) {
  const navigate = useNavigate();

  const handleCart = (e) => {
      e.preventDefault()
      navigate("/Cart")
  }
  const handleProfile = (e) => {
      e.preventDefault()
      navigate("/Profile")
  }

 


    return (
      <div className='d-flex'>
            <div>
            <a href='' onClick={handleCart} >
            <img style={{cursor:"pointer", height:"25px"}} className="me-4 mt-3" src={Keranjang} alt=""/>
            </a>
                
            </div>
            
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img style={{height:"50px"}} src={Zayn} alt=""/>
              </Dropdown.Toggle>

              
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleProfile}><img style={{marginRight:"5px", height:"20px"}} src={User} alt=""/> Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={props.logout}><img style={{marginRight:"8px", height:"20px"}} src={Logout} alt=""/>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </div>
    );
  }
  
  function GuestPage(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [showRegis, setShowRegis] = useState(false);
    const handleCloseRegis = () => setShowRegis(false);
    const handleShowRegis = () => setShowRegis(true);
    return (
      <div>
        <Button onClick={handleShow}  variant="dark me-3">Login</Button>
        <Button onClick={handleShowRegis} variant="dark">Register</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title style={{margin: "auto 200px"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
              />
            </Form.Group>
            <button onClick={props.login} className="w-100 py-2 bg-dark text-white rounded">Login</button>
            <p className="text-center pt-2 text-black-50">Don't have an account ? Klik <a className="text-decoration-none" href="#" onClick={()=>{handleShowRegis(); handleClose()}}>Here</a> </p>
            
          </Form>
        </Modal.Body>

      </Modal>
      <Modal show={showRegis} onHide={handleCloseRegis}>
        <Modal.Header  closeButton>
          <Modal.Title style={{margin: "auto 180px"}}>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="regisEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisPassword">
              <Form.Control
                type="text"
                placeholder="Fullname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisGender">
            <Form.Select aria-label="Default select example">
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Another">Another</option>
            </Form.Select>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="regisPassword">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="regisGender">
            <Form.Select aria-label="Default select example">
                <option>Type User</option>
                <option value="Male">Buyer</option>
                <option value="Female">Seller</option>
            </Form.Select>
            </Form.Group>

            <button className="w-100 py-2 bg-dark text-white rounded">Register</button>
            <p className="text-center pt-2 text-black-50">Already Have an Account ? Klik <a className="text-decoration-none" href="#" onClick={()=>{ handleShow(); handleCloseRegis()}}>Here</a> </p>

            
          </Form>
        </Modal.Body>

      </Modal>
      </div>
    );
  }



export default NavBefore