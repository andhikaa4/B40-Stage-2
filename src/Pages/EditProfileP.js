import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../Component/Context/profileContext';
import Clip from './Image/clip.png'
import Loc from './Image/map.png'
import Modal from 'react-bootstrap/Modal'

function EditProfileU() {

    const[dataProfile, dispatch] = useContext(ProfileContext)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const[form, setForm] = useState({
        name: '', 
        email:'',
        image:null,
        phone:'',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })}
    
        const handleFile= (e) => {
            setForm({
            ...form,
              image: URL.createObjectURL(e.target.files[0])
            })
          }

          const navigate = useNavigate()
    
        const handlePush = (e) => {
            dispatch({
                type: "EDIT_PARTNER",
                payload: form,
                
            })
            navigate('/Profile-Partner')
        }
  return (
    <div className='container-xxl' style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
        <div className='container p-5'>
            <h3 className='mb-5'>Edit Profile Partner</h3>
            <Form>
                <Form.Group className="mb-3 d-flex" >
                    <Form.Control name='name' onChange={handleChange} className='border border-success border-3 border-opacity-50' style={{width:"80%", marginRight:"5px"}} type="text" placeholder="Fullname" />
                    <div className='bg-white rounded px-3 cursor-pointer border border-success border-3 border-opacity-50' style={{width:"20%"}}>
                    <label className='d-flex pt-2 cursor-pointer' for="file"><p className='mt-1 me-auto'>Choose File </p> <img  style={{height:"30px"}} src={Clip} alt=''/>
                    <Form.Control id='file' onChange={handleFile} name='image' style={{width:"20%"}} type="file"  hidden />
                    </label>    
                    </div>
                </Form.Group>
                <Form.Group className="mb-3 " >
                    <Form.Control name='email' onChange={handleChange} style={{paddingTop:"11px", paddingBottom:"11px"}} className='border border-success border-3 border-opacity-50' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='phone' onChange={handleChange} style={{paddingTop:"11px", paddingBottom:"11px"}} className='border border-success border-3 border-opacity-50' type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" >
                    <Form.Control className='border border-success border-3 border-opacity-50' style={{width:"80%", marginRight:"5px"}} type="email" placeholder="Location" />
                    <button onClick={(e)=>{handleShow(); e.preventDefault()}} style={{width:"20%",paddingTop:"12px", paddingBottom:"12px"}} className=' bg-dark text-white text-decoration-none text-center rounded px-4'>Select on Map <img className='ms-2' src={Loc} /></button>
                </Form.Group>

                <button onClick={(e)=>{handlePush(e); e.preventDefault()}} style={{width:"30%",paddingTop:"12px", paddingBottom:"12px"}} className=' mt-5 float-end bg-dark text-white text-decoration-none text-center rounded px-4'>Save</button>

            </Form>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.094975727721!2d106.7474432143118!3d-6.381741364197771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe74948f7c5%3A0xe29cfd4fa5b1f30!2sDumbWays%20Indonesia%20(Depok)!5e0!3m2!1sen!2sid!4v1665974027099!5m2!1sen!2sid" width="100%" height="450" ></iframe></Modal.Body>
        
      </Modal>
    </div>
  )
}


export default EditProfileU