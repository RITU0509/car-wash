
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from "react-icons/fa";
const FeatureCard = (props) => {
    return (
        <div>
          
     <div className="d-flex justify-content-around py-30px">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.text}
          </Card.Text>
          <Card.Text><span> Rs{props.price}</span>
          
          </Card.Text>
          <Button variant="primary"><FaHandPointRight />Learn More </Button>
        </Card.Body>
      </Card>
     </div>
        </div>
    );
}

export default FeatureCard;