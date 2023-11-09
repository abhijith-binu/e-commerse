import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Ecard.css'

function Ecard({op}) {

 console.log(op.title);

  return (
    <div className='text-center'>
      

<Card className='card align-items-center' style={{ width: '18rem', height:'26rem' }}>
      <Card.Img style={{width: '170px', height:'170px'}} variant="top" src={op.image} />
      <Card.Body>
        <Card.Title >{op?.title.slice(0,20)}</Card.Title>
        <Card.Text >
          {op.description.slice(0,90)}
        </Card.Text>
        <Button variant="primary">View Item</Button>
      </Card.Body>
    </Card>

      </div>
  )
}

export default Ecard