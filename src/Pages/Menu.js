import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Users from '../Component/dataDummy/foodMenu'
import {useNavigate} from 'react-router-dom'



function Menu() {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault()
        navigate("/")
    }
  return (
    <div style={{backgroundColor:"#E5E5E5"}}>
        <div className='container p-5'>
            <a onClick={handleBack} style={{fontSize:"20px", color:"black", textDecoration:"none"}} href=""><img style={{height:"30px", marginRight:"5px"}} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt=""/>Back to Home</a>
            <h2 style={{fontFamily:"Abhaya Libre ExtraBold"}} className=' mt-2'>5 Ways Food, Menus</h2>
            <div className='d-flex flex-wrap'>
            {Users.map((e, index)=>{
            return (
                <Card key={index} className='me-3 mt-3 p-2' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                {e.price}
                            </Card.Text>
                            <Button className='w-100' variant="warning">Order</Button>
                        </Card.Body>
                </Card>
                 );})}

                
                
            </div>
        </div>
    </div>
  )
}

export default Menu