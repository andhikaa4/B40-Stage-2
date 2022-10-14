
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from 'react';
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
import {useNavigate} from 'react-router-dom';
import AP from '../Pages/Image/AP.png'
import { CardContext } from './Context/cardContext';


function NavBefore(props) {

  
 

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegis, setShowRegis] = useState(false);
  const handleCloseRegis = () => setShowRegis(false);
  const handleShowRegis = () => setShowRegis(true);

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
          { isAdmin ?
            <AdminPage logoutAdmin={() => setIsAdmin(!isAdmin)}/> : 
            isLoggedin ?
            <PrivatePage logout={() => setIsLoggedin(!isLoggedin)}/>
              : <GuestPage  loginAdmin={() => setIsAdmin(!isAdmin)} login={() => setIsLoggedin(!isLoggedin)}/>
              }  
              
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    
        </div>
        
      
    </div>
        
        
    
  )
}

function PrivatePage(props) {
  const navigate = useNavigate();
  const [dataCard] = useContext(CardContext)
  const handleCart = (e) => {
      e.preventDefault()
      navigate("/Cart")
  }
  const handleProfile = (e) => {
      e.preventDefault()
      navigate("/Profile")
  }

  console.log(dataCard.cart.length);
    return (
      <div className='d-flex'>
            <div className='container pt-3'>
            <button href='' onClick={handleCart} className='btn' >
              <span className="position-absolute translate-middle p-2 rounded-circle">
              <span className='bg-danger rounded-circle ' style={{paddingRight:"3px", paddingLeft:"3px"}}>{dataCard.cart?.length}</span>
              </span> 
              <img style={{cursor:"pointer", height:"25px"}} src={Keranjang} alt=""/>
              
            </button>
                
            </div>
            
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img style={{height:"50px"}} src={Zayn} alt=""/>
              </Dropdown.Toggle>

              
                <Dropdown.Menu>
                <Dropdown.Item  onClick={handleProfile}><img style={{marginRight:"5px", height:"20px"}} src={User} alt=""/> Profile</Dropdown.Item>
                <Dropdown.Item  onClick={props.logout}><img style={{marginRight:"8px", height:"20px"}} src={Logout} alt=""/>Logout</Dropdown.Item>
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


    const [form, setForm] = useState({
      email: "",
  });


  const handleOnChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value,
      });
  }

  

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(form.email === "admin@mail.com"){
        return props.loginAdmin()
    } else if (form.email === "user@mail.com"){
      return props.login()
      
    }
    else {
      alert("Masukan Email yang benar")
    }
  }
    return (
      <div>
        <Button onClick={handleShow}  variant="dark me-3">Login</Button>
        <Button onClick={handleShowRegis} variant="dark">Register</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title style={{margin: "auto 200px"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name='email'
                type="email"
                value={form.email}
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
            <button type='submit' className="w-100 py-2 bg-dark text-white rounded">Login</button>
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

  function AdminPage(props) {
    const navigate = useNavigate();
  
    const handleCart = (e) => {
        e.preventDefault()
        navigate("/Cart")
    }
    const handleProfile = (e) => {
        e.preventDefault()
        navigate("/Profile-Partner")
    }

    const handleAdd = (e) => {
      e.preventDefault()
      navigate("/Add-Product")
    }
      return (
        <div className='d-flex'>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <img style={{height:"50px"}} src={Zayn} alt=""/>
                </Dropdown.Toggle>
  
                
                  <Dropdown.Menu>
                  <Dropdown.Item onClick={handleProfile}><img style={{marginRight:"5px", height:"20px"}} src={User} alt=""/> Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleAdd}><img style={{marginRight:"5px", height:"20px"}} src={AP} alt=""/> Add Product</Dropdown.Item>
                  <Dropdown.Item onClick={props.logoutAdmin}><img style={{marginRight:"8px", height:"20px"}} src={Logout} alt=""/>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </div>
      );
    }
  


export default NavBefore