
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBefore() {
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
            <Link to="/login"><Button  variant="dark me-3">Login</Button></Link>
            <Button variant="dark">Register</Button>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    
        </div>
        
        

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={ModalLogin}/>
        </Routes>

    </Router>
  )
}

function ModalLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default NavBefore