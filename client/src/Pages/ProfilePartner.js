import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Geprek from './Image/geprek.png'
import { ProfileContext } from '../Component/Context/profileContext'

function Profile() {
    const [dataProfile] = useContext(ProfileContext)
  return (
    <div className='container-xxl' style={{backgroundColor:"#E5E5E5", height:"100vh"}}>
        <div className='container d-flex p-5'>
            <div className='w-50 px-5'>
                <h3 className='mb-3'>Partner Profile</h3>
                {dataProfile.partner ? 
                <div className='d-flex'>
                    <img className='me-3 rounded' style={{height:"150px", width:"122px", overflow:"hidden"}} src={dataProfile.partner.image} alt=""/>
                    <div style={{fontSize:"12px"}}>
                        <div className='mb-3'>
                            <p className='m-0 fw-bold'>Partner Name</p>
                            <p className='m-0'>{dataProfile.partner.name}</p>
                        </div>
                        <div className='mb-3'>
                            <p className='m-0 fw-bold'>Email</p>
                            <p className='m-0'>{dataProfile.partner.email}</p>
                        </div>
                        <div className='mb-3'>
                            <p className='m-0 fw-bold'>Phone</p>
                            <p className='m-0'>{dataProfile.partner.phone}</p>
                        </div>
                    </div>
                </div> : 
                <div className='d-flex'>
                <img className='me-3 rounded' style={{height:"150px", width:"122px", overflow:"hidden"}} src={Geprek} alt=""/>
                <div style={{fontSize:"12px"}}>
                    <div className='mb-3'>
                        <p className='m-0 fw-bold'>Partner Name</p>
                        <p className='m-0'>Geprek Ways</p>
                    </div>
                    <div className='mb-3'>
                        <p className='m-0 fw-bold'>Email</p>
                        <p className='m-0'>andhikagans@gmail.com</p>
                    </div>
                    <div className='mb-3'>
                        <p className='m-0 fw-bold'>Phone</p>
                        <p className='m-0'>081293026603</p>
                    </div>
                </div>
            </div>
                }
                <Link to='/partner-edit'>
                <button style={{padding:"2px 30px", fontSize:"12px", borderRadius:"3px"}} className='bg-dark text-white'>Edit Profile</button>
                </Link>
            </div>
            <div className='w-50 px-5'>
                <h3 className='mb-3'>History Transaction</h3>
                <div className='d-flex w-100 bg-white rounded p-3'>
                    <div className='me-auto'>
                        {dataProfile.partner ?
                            <p className='m-0 fw-bold'>{dataProfile.partner.name}</p>:
                            <p className='m-0 fw-bold'>Geprek Ways</p>
                        }
                    <p style={{fontSize:"13px"}} className='m-0'><strong>Saturday</strong>, 12 March 2021</p>
                    <p style={{fontSize:"13px"}} className='m-0 mt-4'>Total : Rp 45.000</p>
                    </div>

                    <div className='me-4 '>
                        <img style={{width:"60px"}} className='ms-4' src="https://www.5ways.com.au/Themes/BPDTHEME01/theme-client-updates/img/logos/logo-footer.png" alt=""/>
                        <Link className='text-dark text-decoration-none' to='/income-partner'>
                            <p className='mt-3 m-0 bg-info rounded px-4 py-1 '>Transaction</p>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Profile