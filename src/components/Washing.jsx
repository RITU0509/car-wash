import React from 'react'
import Card from 'react-bootstrap/Card';
import {Container,Col,Row} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
function Washing() {
  return (
    <div >
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" height="20" width="30px" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>


  </div>
  )
}

export default Washing
