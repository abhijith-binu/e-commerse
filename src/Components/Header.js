import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
         <Navbar style={{height:'80px'}} bg='black' variant='dark'>
    <Container>
      <Navbar.Brand href="/">
     <div className='col-6 pt-5'>
          <i class="fa-solid fa-wand-magic-sparkles fa-flip me-2" style={{color:' #f9fafa'}}></i>
           Fa Zion Store
     </div>
      <div className='col-6' style={{marginLeft:'1200px',position:'relative',top:'-30px'}}> 
      <p>
        <i class="fa-solid fa-cart-arrow-down" style={{color:'#f7f9fd'}}></i> Cart
        </p>
     </div>
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header