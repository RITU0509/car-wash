import React from 'react'
import MainFooter from '../components/MainFooter';
import BreadCrumb from '../components/BreadCrumb';
import FeatureCard from '../components/FeatureCard';
import { Col, Container, Row } from "react-bootstrap";
import MainNavBar from '../components/MainNavbar';
const Products = () => {
  return (
    <div>
      <MainNavBar />

      <BreadCrumb />
      <BreadCrumb mainlink="products" pagename="Products" />

      <Container>
        <Row className=" d-f mb-5">
          <h2 className="text-center text-primary"><strong> Car Wash Products</strong>
          </h2>
          <h3 className="text-center text-primary"> Love your car, we make it more adorable.</h3>
          <Col md={3}>
            <FeatureCard pic="./public/products/refil.png" title="Pollie Glass Cleaner Refill" text="Pollie Glass Cleaner Refill | Alcohol-Free Glass Cleaning Liquid | Car & Home Glass Cleaner Spray, Pack of 10, 500ml" price="377" />
          </Col>
          <Col md={3} ><FeatureCard pic="./public/products/glassCleaner.png" title="GoMechanic Glass Cleaner –" text=" Streak-Free, Ammonia-Free, Fast-Acting, Residue-Free, Multi-Surface Shine, Perfect for Windows" price="299" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/glassCleanerp.png" title=" Car Washing Liquid" text=" primary motive to serve our customers with professional car detailing service with internationally approved standards   quality..." price="450" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/carshampoo.png" title="Shatras Car Washing Liquid" text="Shatras Car Washing Liquid, Car wash shampoo, pH Neutral, Thick Suds, Safe for Cars, Trucks, Motorcycles, " price="299" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={3}>
            <FeatureCard pic="./public/products/carshampoo1.png" title="3M Car wash Shampoo (250 ml) " text="3M Car wash Shampoo (250 ml) | High Foam for Deep Cleaning | Remove Tough Dirt | Safe on Paint | pH Neutral.                                        " price="258" />
          </Col>
          <Col md={3} ><FeatureCard pic="./public/products/carshampoo2.png" title="Wavex Car Washer Gun + Car Shampoo" text=" Foam Cannon 3.0 + Foam Wash Car Shampoo Concentrate 5Ltr pH Neutral, Extreme Suds Snow White Foam, " price="5,238" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/polish.png" title=" Liquid Silicone Bike Body Polish," text="Keeping in mind ever-evolving requirements of our respected clients, we are providing a premium quality ..." price="500" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/polish1.png" title="100 Ml Bike Spray Polish 100 Ml" text=" fading and give the surface a clean and polished look..we provide a premium quality range of car body polish...                         " price="24/peice" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={3}>
            <FeatureCard pic="./public/products/polish2.png" title="Good Electric Car Polisher" text="A heavy duty tool designed and manufactured for professional automotive polishing users. Double-Reduction Gearing System to provides two times the torque of a single gear set polisher." price="2500" />
          </Col>
          <Col md={3} ><FeatureCard pic="./public/products/cloth.png" title="NACS Size: 40 cm Microfiber Cloth Soft Premium Quality" text="We are pioneer manufacturer supplier  of high quality Car Cleaning Microfiber Cloth. We offer high density microfiber cloth ." price="25/piece" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/carwax.jpg" title="Prafful Paste Car Polish for Metal Parts, Bumper, Exterior, Dashboard, Tyres (270 G, Pack of 1)" text=" The Prafful CarNauba Paste Wax Renew Your car's paint finish and keep it looking new. ." price="150" />
          </Col>
          <Col md={3}><FeatureCard pic="./public/products/cleaningkit.png" title="Car Care Cleaning Kit" text="Established in year 2017, Aggarwal Traders is involved in the area of Manufacturer Wholesaler a broad plethora of Chain Lubrication Spray Engine Oil Drum Smooth Line Petroleum Additives" price="200" />
          </Col>
        </Row>
      </Container>
      <MainFooter />
    </div>
  )
}

export default Products

