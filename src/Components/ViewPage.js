import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Ecard from './Ecard'
import './ViewPage.css'


function ViewPage() {
 
    const base_url = 'https://fakestoreapi.com/products'


    const [data,setData] = useState([])

    const fetctData= async()=>{
        const response = await axios.get(base_url)
        setData(response.data)
    }
    useEffect(()=>{
        fetctData()
    },[])

  return (
    <div>
        <Row className='eRow'>
      
            {
            data.map((item)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <Ecard className="hai" op={item}  />
                </Col>
            ))
            }
        
           
        </Row>
        
    </div>
  )
}

export default ViewPage