import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './Image/g10.png'
import Geprek from './Image/geprek.png'
import Nasgor from './Image/nasgor.png'
import Kopi from './Image/kopi.png'
import Aygor from './Image/aygor.png'
import { CardContext } from '../Component/Context/cardContext';
import User from '../Component/dataDummy/foodMenu'
import { UserContext } from '../Component/Context/userContext';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Home(props) {
    
    const[dataCard, dispatch] = useContext(CardContext)
    const [resto, setResto] = useState([])
    const [dataUser, setLogin] = useContext(UserContext)

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

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(form.email === "admin@mail.com"){
        setLogin({
          type: "LOGIN_ADMIN"
        })
        navigate('/Profile-Partner')
        
    } else if (form.email === "user@mail.com"){
      setLogin({
        type: "LOGIN_USER"
      })
      handleClose()
    }
    else {
      alert("Masukan Email yang benar")
    }
  }

    const handlePush = (e, index) => {
        resto.push(e)

        if(dataUser.isLogin === true){

            dispatch({
                type: "VIEW_RESTO",
                restoLoad: resto,
    
            })
            navigate('/Menu/' + index)
        } 

    }
  return (
    <div>
        <div className='bg-warning pb-5' style={{height:"90vh"}} >
            <div className='container d-flex justify-content-center align-items-center' style={{height:"75vh"}} >
                <div className='d-flex mt-auto align-items-center'>
                <div className=' flex-50 me-5 '>
                    <div className='mb-4 ' style={{fontFamily:"Abhaya Libre ExtraBold"}}>
                        <h2 className='fs-1'>Are You Hungry?</h2>
                        <h2 className='fs-1' >Makanlah Biar Kenyang</h2>
                    </div>
                    <div className='d-flex'>
                        <hr className='me-3 mt-2' style={{width:"150px", height:"3px",backgroundColor:"black" }} />
                        <p className='mt-0' style={{width:"250px", fontSize:"12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className='flex-50 ms-3'>
                    <img style={{display:"block"}} src={Pizza} alt="pizza"/>
                </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"#E5E5E5"}} >
            <div className='container p-5'>    
                <div className='px-5'>
                    <h2 className='mb-4'>Popular Restaurant</h2>
                        <div className='d-flex justify-content-between overflow-auto  ' style={{whiteSpace:"nowrap"}} >
                            {dataUser.isLogin ?
                            <div className='d-flex justify-content-between overflow-auto' style={{whiteSpace:"nowrap"}}>
                                {User.map((e,index) => {
                                    return(
                                        <div key={index} className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px",flexShrink:"0", flexBasis:"20%"}}>
                                            <img style={{height:"50px"}} className='me-3' src={e.logo} alt="" />
                                            <h4 style={{cursor:"pointer"}} onClick={(e) => {handlePush(e, index)}} className='mt-3 fs-6'>{e.name}</h4>
                                        </div>
                                    )
                                })}
                            </div> : 
                            <div className='d-flex justify-content-between overflow-auto' style={{whiteSpace:"nowrap"}}>
                                {User.map((e,index) => {
                                    return(
                                        <div key={index} className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px",flexShrink:"0", flexBasis:"20%"}}>
                                            <img style={{height:"50px"}} className='me-3' src={e.logo} alt="" />
                                            <h4 style={{cursor:"pointer"}} onClick={handleShow} className='mt-3 fs-6'>{e.name}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                            
                        } 
                     
                        </div>
                </div>
                <div className='px-5 mt-4'>
                    <h2 className='mb-4'>Popular Restaurant</h2>
                        <div className='d-flex'>
                            <div className='card p-2 me-2' style={{width: "18rem"}}>
                            <img src={Geprek} className='card-img-top' alt="..." />
                                <div className='card-body'>
                                <h5 className='card-title'>Ayam Geprek</h5>
                                <p className='card-text'>0,5 KM</p>
                                </div>
                            </div>
                            <div className='card p-2 me-2' style={{width: "18rem"}}>
                            <img src={Nasgor} className='card-img-top' alt="..." />
                                <div className='card-body'>
                                <h5 className='card-title'>Nasi Goreng Mamang</h5>
                                <p className='card-text'>0,5 KM</p>
                                </div>
                            </div>
                            <div className='card p-2 me-2' style={{width: "18rem"}}>
                            <img src={Aygor} className='card-img-top' alt="..." />
                                <div className='card-body'>
                                <h5 className='card-title'>Ayam Goreng</h5>
                                <p className='card-text'>1000 KM</p>
                                </div>
                            </div>
                            <div className='card p-2' style={{width: "18rem"}}>
                            <img src={Kopi} className='card-img-top' alt="..." />
                                <div className='card-body'>
                                <h5 className='card-title'>Kopi Kenangan</h5>
                                <p className='card-text'>0,1 KM</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
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

    
  )
}

export default Home