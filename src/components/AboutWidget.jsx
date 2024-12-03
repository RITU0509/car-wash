
import { Col, Row ,Container} from "react-bootstrap";
function AboutWidget() {
  return (
    <div>
      <Container>
      <Row>
        <Col lg={6} ><img src="./public/car.png"/>
        </Col>
        <Col lg={6}>
        <h2 className="text-center">About us</h2>
        <p >Speed Car Wash is a brand which is literally going to change the way people
           think about car cleaning. It is a unique mechanized car cleaning concept where 
           cars are getting pampered by the latest equipments including high pressure cleaning
            machines, spray injection and extraction machines, high powered vacuum cleaners, 
            steam cleaners and so on.</p>
        
        </Col>
      </Row>
      </Container>
      
    </div>
  )
}

export default AboutWidget
