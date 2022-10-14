import React from 'react'
import Form from 'react-bootstrap/Form';
import Clip from './Image/clip.png'
import Loc from './Image/map.png'

function EditProfileU() {
  return (
    <div className='container-xxl' style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
        <div className='container p-5'>
            <h3 className='mb-5'>Edit Profile Partner</h3>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control className='border border-success border-3 border-opacity-50' style={{width:"80%", marginRight:"5px"}} type="text" placeholder="Fullname" />
                    <div className='bg-white rounded px-3 cursor-pointer border border-success border-3 border-opacity-50' style={{width:"20%"}}>
                    <label className='d-flex pt-2 cursor-pointer' for="file"><p className='mt-1 me-auto'>Choose File </p> <img  style={{height:"30px"}} src={Clip} alt=''/>
                    <Form.Control id='file' style={{width:"20%"}} type="file" placeholder="name@example.com" hidden />
                    </label>    
                    </div>
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                    <Form.Control style={{paddingTop:"11px", paddingBottom:"11px"}} className='border border-success border-3 border-opacity-50' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control style={{paddingTop:"11px", paddingBottom:"11px"}} className='border border-success border-3 border-opacity-50' type="email" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control className='border border-success border-3 border-opacity-50' style={{width:"80%", marginRight:"5px"}} type="email" placeholder="Location" />
                    <button style={{width:"20%",paddingTop:"12px", paddingBottom:"12px"}} className=' bg-dark text-white text-decoration-none text-center rounded px-4'>Select on Map <img className='ms-2' src={Loc} /></button>
                </Form.Group>

                <button style={{width:"30%",paddingTop:"12px", paddingBottom:"12px"}} className=' mt-5 float-end bg-dark text-white text-decoration-none text-center rounded px-4'>Save</button>

            </Form>
        </div>
    </div>
  )
}

export default EditProfileU