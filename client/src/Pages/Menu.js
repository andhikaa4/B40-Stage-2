import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate, useParams} from 'react-router-dom'
import { CardContext } from '../Component/Context/cardContext';
import toRupiah from '@develoka/angka-rupiah-js';
import user from '../Component/dataDummy/foodMenu';


function Menu(props) {


    const [dataCard, dispatch] = useContext(CardContext)
    console.log('test',dataCard);
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/")
    }


    console.log(props);
    const params = useParams()

    const index = params.id

    const [cart] = useState([])

    const handlePush = (e) => {
        cart.push(e)
        dispatch({
            type: "ADD_ORDER",
            payload: cart,
        })
    }
    

  return (
    <div style={{backgroundColor:"#E5E5E5"}}>
        <div className='container p-5'>
            <a onClick={handleBack} style={{fontSize:"20px", color:"black", textDecoration:"none"}} href=""><img style={{height:"30px", marginRight:"5px"}} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt=""/>Back to Home</a>
            <h2 style={{fontFamily:"Abhaya Libre ExtraBold"}} className=' mt-2'>{user[index].name}, Menus</h2>
            <div className='d-flex flex-wrap'>
            {user[index].product.map((e)=>{
            return (
                <Card key={e.id} className='me-3 mt-3 p-2' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title >{e.name} </Card.Title>
                            <Card.Text >
                                {toRupiah(e.price,{dot: '.', floatingPoint:0})}
                            </Card.Text>
                            <Button className='w-100' onClick={() => {handlePush(e); props.addItem(e)}} variant="warning">Order</Button>
                        </Card.Body>
                </Card>
                 );})}

                
                
            </div>
        </div>
    </div>
  )
}

export default Menu