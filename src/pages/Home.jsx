import React from 'react';
import MainNavbar from '../components/MainNavbar';
import MySlider from '../components/MySliders';
import "../css/style.css";
import MainFooter from '../components/MainFooter';
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from '../components/FeatureCard';
import BreadCrumb from '../components/BreadCrumb';
import AboutWidget from '../components/AboutWidget';



function Home() {
  return (
    <div>
      <MainNavbar />
      <MySlider />
      <BreadCrumb/>
      <BreadCrumb mainlink="Home" pagename="Homepage" />
      <AboutWidget/>
      <div className="b-example-divider"></div>
      <Container>
      
<Row className="d-f  bg-dark">
<h2 className="text-center text-primary"><strong>Speed Car Wash Services</strong>
           </h2>
           <h3  className="text-center text-primary"> Love your car, we make it more adorable.</h3>
  <Col md={3}>
  <FeatureCard  pic="./public/washing2.png" title="Washing" text="We are  offering a wide range of washing services to the car owners including the top wash to entire internal detailing or whether a paint protection treatment.."/>
  </Col>
  <Col md={3} ><FeatureCard  pic="./public/quick1.png" title="Quick Service" text="As a Speed Service Point (SSP), we pledge to provide high quality services at a fair price using only the best available parts and labor for the job.."/>
  </Col>
  <Col md={3}><FeatureCard  pic="./public/detailing.png" title="Detailing" text=" primary motive to serve our customers with professional car detailing service with internationally approved standards to deliver impeccable quality..."/>
  </Col>
  <Col md={3}><FeatureCard   pic="./public/wrapping.png" title="wrapping" text=" Our network of trained SCW Vehicle Wrappers can help you create impactful vehicle branding to simply cater for your colour change and car personalisation needs...."/>
  </Col>
</Row>
</Container>
      <MainFooter />
    </div>
  )
}

export default Home
