import React, { useContext, useEffect, useState } from 'react'
import Loc from './Image/map.png'

import Bin from './Image/bin.png'

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { API } from '../config/api';
import { useMutation, useQuery } from 'react-query';
import EmptyCart from './Image/emptyCart.png'

import toRupiah from '@develoka/angka-rupiah-js';
import { UserContext } from '../Component/Context/userContext';

function Cart() {
    const navigate = useNavigate()
    const [state] = useContext(UserContext)
    const [idDelete, setIdDelete] = useState(null);
    console.log(idDelete);

    const { id } = useParams()

    const [cart, setCart] = useState()
    const getData = async () => {
        try {
            const response = await API.get("/transactions");
            setCart(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (state.user)
            getData()
    }, [state])

    const deleteById = useMutation(async (id) => {
        try {
          await API.delete(`/transactions/${id}`);
        } catch (error) {
          console.log(error);
        }
      });

    const filter = cart?.filter(p => p.buyer_id == id)


    return (
        <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
            {filter?.length ?
                <div className='container p-5'>
                    <div>
                        <h2 className='mb-5'>Geprek Ways</h2>
                        <p className='fs-4'>Delivery Location</p>
                        <div className='d-flex align-items-center'>
                            <input className='rounded me-auto' style={{ padding: "7px", width: "80%" }} type="text"></input>
                            <a className=' py-2 bg-dark text-white text-decoration-none rounded px-4'>Select on Map <img className='ms-2' src={Loc} /></a>
                        </div>
                        <div>
                            <p className='fs-4 mt-3 container'>Review Your Order</p>
                            <div className='d-flex w-100 container'>
                                {/* for map */}
                                <div style={{ width: "60%", maxHeight: "200px" }} className='container overflow-auto'>
                                    <hr style={{ width: "100%", height: "2px", backgroundColor: "black", opacity: "100%" }} />
                                    {cart?.map((item) => (
                                        item.buyer_id == id ?
                                            <div >

                                                <div className='mt-4'>
                                                    <div key={item.id} className='d-flex'>
                                                        <img className='w-25 me-3' src={`http://localhost:5000/uploads/${item.product.image}`} alt='' />
                                                        <div className='d-flex w-100 mt-3'>
                                                            <div className='me-auto'>
                                                                <div>
                                                                    <p>{item.product.name}</p>
                                                                </div>
                                                                <div className='d-flex' style={{ height: "30px", boxSizing: "border-box" }}>
                                                                    <button className='me-2 btn py-0'>-</button>
                                                                    <p className='me-2 py-1'></p>
                                                                    <button className='me-2 btn py-0' >+</button>
                                                                </div>

                                                            </div>
                                                            <div>
                                                                <div className='container' >
                                                                    <p>{toRupiah(item.product.price, { dot: '.', floatingPoint: 0 })}  </p>
                                                                </div>
                                                                <div className='ps-1'>
                                                                    <img className='ms-5' onClick={() => setIdDelete(item.id)} src={Bin} alt="a" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <hr style={{ width: "100%", height: "2px", backgroundColor: "black", opacity: "100%", marginTop: "39px" }} />
                                                </div>
                                            </div> : null

                                    ))}



                                </div>


                                <div className='col-md-6' style={{ width: "40%", overflow: "hidden" }}>
                                    <hr className=' ms-3 me-3' style={{ width: "100%", height: "2px", backgroundColor: "black", opacity: "100%" }} />
                                    <div>
                                        <div className='d-flex ms-3'>
                                            <p className='me-auto'>Subtotal</p>
                                            <p></p>
                                        </div>
                                        <div className='d-flex ms-3'>
                                            <p className='me-auto'>Qty</p>
                                            <p></p>
                                        </div>
                                        <div className='d-flex ms-3'>
                                            <p className='me-auto'>Ongkir</p>
                                            <p>Rp. 10.000</p>
                                        </div>

                                        <hr className=' ms-3 me-3 ' style={{ width: "100%", height: "2px", backgroundColor: "black", opacity: "100%" }} />
                                        <div className='d-flex ms-3'>
                                            <p className='me-auto'>Total :</p>
                                            <p></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='w-100 text-end mt-4 '>
                                <a className=' bg-dark text-white w-100 text-decoration-none rounded' style={{ padding: "10px 100px " }}> Order</a>
                            </div>
                        </div>

                    </div>

                </div> :
                <div className='container' style={{ height: "80vh" }}>
                    <div className=' container mx-auto my-auto text-center' style={{ width: "30%" }}>
                        <img src={EmptyCart} className="w-100" alt="" />
                        <h4>Your Cart Is Empty</h4>
                        <p className='mb-0' style={{ fontSize: "12px" }}>You have no items in your shopping cart.</p>
                        <p className='m-0 mb-3' style={{ fontSize: "12px" }}>Let's go buy something!</p>
                        <button href="#" className='btn bg-danger text-white px-5'>Shopping Now</button>
                    </div>
                </div>}


        </div>


    )
}

export default Cart