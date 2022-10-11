import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './Image/g10.png'
import Burger from './Image/BK.png'
import Donat from './Image/jco.png'
import Starbuck from './Image/sb.png'
import Kfc from './Image/kfc.png'
import Geprek from './Image/geprek.png'
import Nasgor from './Image/nasgor.png'
import Kopi from './Image/kopi.png'
import Aygor from './Image/aygor.png'

function Home() {
  return (
    <div>
        
        <div className='bg-warning pb-5' >
            <div className='container d-flex justify-content-center align-items-center '>
                <div className=' flex-50 me-5'>
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
                    <img  src={Pizza} alt="pizza"/>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"#E5E5E5"}} >
            <div className='container p-5'>    
                <div className='px-5'>
                    <h2 className='mb-4'>Popular Restaurant</h2>
                        <div className='d-flex justify-content-between' >
                            <div className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px"}}>
                                <img style={{height:"50px"}} className='me-3' src={Burger} alt="" />
                                <h4 className='mt-3 fs-6'>Burger King</h4>
                            </div>
                            <div className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px"}}>
                                <img style={{height:"50px"}} className='me-3' src={Kfc} alt="" />
                                <h4 className='mt-3 fs-6'>KFC</h4>
                            </div>
                            <div className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px"}}>
                                <img style={{height:"50px"}} className='me-3' src={Donat} alt="" />
                                <h4 className='mt-3 fs-6'>JCO Dough</h4>
                            </div >
                            <div className='d-flex align-item-center bg-white p-2 me-2 rounded ' style={{width:"250px"}}>
                                <img style={{height:"50px"}} className='me-3' src={Starbuck} alt="" />
                                <h4 className='mt-3 fs-6'>Starbucks</h4>
                            </div>
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
        
    </div>
  )
}

export default Home