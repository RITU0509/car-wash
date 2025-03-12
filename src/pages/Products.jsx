import React from 'react'
import MainFooter from '../components/MainFooter';
import BreadCrumb from '../components/BreadCrumb';
import FeatureCard from '../components/FeatureCard';
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from '../components/MainNavbar';
const Products = () => {
  return (
    <div>
        <MainNavBar/>
     <h1>PRODUCTS</h1>
     <BreadCrumb/>
      <BreadCrumb mainlink="products" pagename="Products" />

     <Container>
      <Row className=" d-f mb-5">
      <h2 className="text-center text-primary"><strong> Car Wash Products</strong>
                 </h2>
                 <h3  className="text-center text-primary"> Love your car, we make it more adorable.</h3>
        <Col md={3}>
        <FeatureCard  pic="./public/products/refil.png" title="Pollie Glass Cleaner Refill" text="Pollie Glass Cleaner Refill | Alcohol-Free Glass Cleaning Liquid | Car & Home Glass Cleaner Spray, Pack of 10, 500ml" price="377"/>
        </Col>
        <Col md={3} ><FeatureCard  pic="./public/products/glassCleaner.png" title="GoMechanic Glass Cleaner –" text=" Streak-Free, Ammonia-Free, Fast-Acting, Residue-Free, Multi-Surface Shine, Perfect for Windows, Mirrors & Auto Glass (SE_CC_008)"/>
        </Col>
        <Col md={3}><FeatureCard  pic="./public/products/glassCleanerp.png" title="Detailing" text=" primary motive to serve our customers with professional car detailing service with internationally approved standards to deliver impeccable quality..."/>
        </Col>
        <Col md={3}><FeatureCard   pic="./public/wrapping.png" title="wrapping" text=" Our network of trained SCW Vehicle Wrappers can help you create impactful vehicle branding to simply cater for your colour change and car personalisation needs...."/>
        </Col>
      </Row>
      <Row className="mb-5">
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
      <Row className="mb-5">
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
      <MainFooter/>
    </div>
  )
}

export default Products

