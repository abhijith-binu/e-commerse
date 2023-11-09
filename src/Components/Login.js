import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate()

    const getUser = () => {
        navigate('/viewpage')
    
      }

  return (
    <div style={{padding:'150px'}}>
        <div className="container wel">
            
          
                <div className='div1' style={{marginLeft:'190px'}}>
                   <h3 style={{paddingLeft:'140px'}}>Welcome</h3>
                   <p className='pt-1'>Username</p>
                   <input style={{width:'400px'}} type="text" className='form-control'/>  
                </div>  
              
                <div className='div2' style={{marginLeft:'190px'}}>
                <p>Password</p>
                   <input  style={{width:'400px'}} type="text" className='form-control'/>  
                </div>  
                <div className='submit mt-2' style={{marginLeft:'350px'}}>
                  <button onClick={getUser} className='btn btn-primary'>Login</button>     
                </div>        
            

       </div>
    </div>
  )
}

export default Login