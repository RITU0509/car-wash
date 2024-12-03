import React from 'react'
import MainNavBar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Col, Container, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoLogoWechat } from "react-icons/io5";
import { Sliders } from 'react-bootstrap-icons';
import BreadCrumb from '../components/BreadCrumb'
const Contact = () => {
  return (
    <div >
      <MainNavBar />
      <Sliders/>
      <BreadCrumb mainlink="Contact" pagename="Contact" />
    
      <Container>
      <h1 className="text-center p-5">contact us</h1>
        <Row>
          <Col className=" text-center">
         
            <h3>By Phone <FaPhone /></h3>
            <h5  className="fw-light">Get telephone support by signing into your account.</h5>
            <Button variant="primary">Log in </Button>
          </Col >
          <Col className=" text-center">
            <h3 className=" text-center">Start a new case</h3>
            <h5  className=" text-center text-wrap fw-light">Just send us your questions or concerns by starting a new case and we will give you the help you need.</h5>
            <Button variant="primary">Start Here</Button>
          </Col>
          <Col>
         
            <h3 className=" text-center">Live Chat  <IoLogoWechat /></h3>
            <h5 className=" text-center text-wrap fw-light">Chat with a member of our in-house team.</h5>
            <Button variant="primary" className="my-5 mx-5" >Chat Now </Button>
          </Col>
        </Row>
      </Container>



      <div className="text-center">
        <h1>Track a Case</h1>
        <h3 className="fw-light">View your thread of messages with our support team.</h3>
        <Form className="frm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Go
      </Button>
    </Form>
    <div>
      <h1 className="py-5">Need Instant Help?</h1>
      <Container>
        <Row>
          <Col><Button  varient="primary" type="button" >Video tutorial</Button>
          </Col>
          <Col><Button  varient="primary" type="button" >Knowledge base </Button>
          </Col>
          <Col><Button  varient="primary" type="button" >Resourses</Button>
          </Col>
        </Row>
      </Container>
    </div>
      </div>
      <MainFooter />
    </div>
  )
}

export default Contact
