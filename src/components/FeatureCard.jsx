
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from "react-icons/fa";
const FeatureCard = (props) => {
    return (
        <div>
          
     <div className="d-flex justify-content-around py-30px">
      <Card style={{ width: '18rem' }}>
        <Card.Img className="p-2" variant="top" src={props.pic} height="150px" width="90px" />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{props.title}</Card.Title>
          <Card.Text>
           {props.text}
          </Card.Text>
          <Card.Text style={{textAlign: "center"}}><span> <strong>Rs{props.price}</strong></span>
          
          </Card.Text>
          <Button variant="primary" style={{width: "100%"}}><FaHandPointRight />Add to cart </Button>
        </Card.Body>
      </Card>
     </div>
        </div>
    );
}

export default FeatureCard;