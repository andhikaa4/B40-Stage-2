import React from 'react'
import Loc from './Image/map.png'
import Geprek from './Image/geprek.png'
import Bin from './Image/bin.png'

function Cart() {
  return (
    <div style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
        <div className='container p-5'>
            <h2 className='mb-5'>Geprek Ways</h2>
            <p className='fs-4'>Delivery Location</p>
            <div  className='d-flex align-items-center'>
                <input className='rounded me-auto' style={{padding:"7px", width:"80%"}} type="text"></input>
                <a className=' py-2 bg-dark text-white text-decoration-none rounded px-4'>Select on Map <img className='ms-2' src={Loc} /></a>
            </div>
            <div>
                <p className='fs-4 mt-3 container'>Review Your Order</p>
                <div className='d-flex w-100 container'>
                    <div style={{width:"60%"}} className='conatiner'>
                        <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                        <div className='mt-4 bg-danger'>
                                
                                <div className='d-flex bg-danger'>
                                    <img className='w-25 me-3' src={Geprek} alt=''/>
                                        <div className='d-flex w-100 mt-3'>
                                            <div className='me-auto'>
                                                <div>
                                                <p>Combo 1 Chicken Ways</p>
                                                </div>
                                                <div className='d-flex' style={{height:"30px", boxSizing:"border-box"}}>
                                                <button className='me-2 btn py-0'>-</button>
                                                <p className='me-2 py-1'>1</p>
                                                <button className='me-2 btn py-0'>+</button>
                                                </div>

                                            </div>
                                            <div>
                                            <div >
                                                <p>Rp. 15.000</p>
                                                </div>
                                                <div className='ps-1'>
                                                <img className='ms-5' src={Bin} alt="a"/>
                                                </div> 
                                            </div>
                                        </div>
                                        
                                        
                                </div>
                        <hr style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%", marginTop:"32px" }} />
                        </div>
                    </div>
                    

                    <div className='col-md-6' style={{width:"40%", overflow:"hidden"}}>
                        <hr className=' ms-3 me-3' style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                            <div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Subtotal</p>
                                    <p>Rp. 15.000</p>
                                </div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Qty</p>
                                    <p>1</p>
                                </div>
                                <div className='d-flex ms-3'>
                                    <p className='me-auto'>Ongkir</p>
                                    <p>Rp. 10.000</p>
                                </div>

                            </div>
                            <hr className=' ms-3 me-3' style={{width:"100%", height:"2px",backgroundColor:"black", opacity:"100%" }} />
                            
                    </div>
                </div>
                <div className='w-100 text-end mt-4 '>
                <a className=' bg-dark text-white w-100 text-decoration-none rounded' style={{padding:"10px 100px "}}> Order</a>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart