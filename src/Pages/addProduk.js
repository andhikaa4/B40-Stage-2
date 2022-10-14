import React from 'react'
import Clip from './Image/clip.png'
import Form from 'react-bootstrap/Form';


function addProduk() {
  return (
    <div style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
        <div className='container p-5'>
            <div className='p-3'>
            <h3 className='mb-4'>Add Product</h3>
                <Form>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Control className='border border-success border-3 border-opacity-50' style={{width:"80%", marginRight:"5px"}} type="text" placeholder="Title" />
                        <div className='bg-white rounded px-3 cursor-pointer border border-success border-3 border-opacity-50' style={{width:"20%"}}>
                        <label className='d-flex pt-2 cursor-pointer' for="file"><p className='mt-1 me-auto'>Choose File </p> <img  style={{height:"30px"}} src={Clip} alt=''/>
                        <Form.Control className='cursor-pointer' id='file' style={{width:"20%"}} type="file" placeholder="name@example.com" hidden />
                        </label>    
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                        <Form.Control style={{paddingTop:"11px", paddingBottom:"11px"}} className='border border-success border-3 border-opacity-50' type="number" placeholder="Price" />
                    </Form.Group>
                    <button style={{width:"30%",paddingTop:"12px", paddingBottom:"12px"}} className=' mt-5 float-end bg-dark text-white text-decoration-none text-center rounded px-4'>Save</button>

                </Form>
            </div>
        </div>
    </div>
  )
}

export default addProduk