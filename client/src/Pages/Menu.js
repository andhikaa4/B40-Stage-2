import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom'
import toRupiah from '@develoka/angka-rupiah-js';
import { useMutation, useQuery } from 'react-query'
import { API } from '../config/api'


function Menu(props) {

    const { id } = useParams()

    const { data: products } = useQuery("productsCache", async () => {
        const response = await API.get("/products");
        return response.data.data;
    });
    const { data: user } = useQuery("userCache", async () => {
        const response = await API.get("/user/" + id);
        return response.data.data;
    });


    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/")
    }


    const [cart, setCart] = useState({
        status: "",
        product_id: 0
    })

    console.log(cart);
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/transactions", cart);

      console.log("ini tambah cart", response)
    } catch (error) {
      console.log(error);
    }
  });


    return (
        <div style={{ backgroundColor: "#E5E5E5"}}>
            <div className='container p-5'>
                <a onClick={handleBack} style={{ fontSize: "20px", color: "black", textDecoration: "none" }} href=""><img style={{ height: "30px", marginRight: "5px" }} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="" />Back to Home</a>
                <h2 style={{ fontFamily: "Abhaya Libre ExtraBold" }} className=' mt-2'>{user?.name}, Menus</h2>
                <div className='d-flex flex-wrap'>
                    {products?.map((e, index) => (
                        e.user_id == id ?
                            <Card key={index = e.id} className='me-3 mt-3 p-2' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={e.image} />
                                <Card.Body>
                                    <Card.Title >{e.name} </Card.Title>
                                    <Card.Text >
                                        {toRupiah(e.price, { dot: '.', floatingPoint: 0 })}
                                    </Card.Text>
                                    <Button className='w-100' onClick={(e)=>{setCart({product_id: index, status:"Waiting"}); handleSubmit.mutate(e)}} variant="warning">Order</Button>
                                </Card.Body>
                            </Card> : null
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Menu