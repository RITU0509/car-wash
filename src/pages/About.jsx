import React from 'react'
import MainNavBar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import MySlider from '../components/MySliders'
import BreadCrumb from '../components/BreadCrumb'
import "../css/style.css";
import AboutWidget from '../components/AboutWidget'
import { FaRegSmile } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
const About = () => {
  return (
    <div>
      <MainNavBar/>
     <MySlider/>
     <div className="b-example-divider"></div>
     <BreadCrumb/>
      <BreadCrumb mainlink="About" pagename="About" />
     
      <AboutWidget/>
      <div className="b-example-divider"></div>
     <Container className="ab">
      <h1 className="text-center">Who We Are</h1>
      <p>Welcome to Car Wash a concept developed by LIV INDIA to organize the Car Cleaning
         segment to give the community a new definition of car care and detailing services which 
         are not professionally followed in India. Based at Delhi our endeavour is to spread the
          awareness amongst car users about the Clean Car Culture & Car Hygiene.

Speed Car Wash is a brand which is literally going to change the way people think about car cleaning. 
It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments
 including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum
  cleaners, steam cleaners and so on.

In this fast moving life today we tend to spend more time in travelling as a result spend hours in the
 car, navigating the traffic jams. Air Pollution, Dust, Rain, Sunlight and Adverse road conditions all 
 keeps adding on woos of common car users. And as a result, there is a severe need of Professional Car 
 Cleaning Organization to take care of all Car Cleaning jobs and give us the finest and ultimate car
  cleaning experience and satisfaction.

Speed Car Wash is here to stay and work dedicatedly towards spreading the awareness among car users 
about their car hygiene habits, cleanliness, durability of exterior look and other common cleaning tips.

At Speed Car Wash we do a plethora of research on the car care and maintenance, the aim is to deliver best 
of service and bring in new concept to the car market. In the beginning we are focusing on educating our
 customers about the whole concept of Clean Car Culture, we have strong belief that our efforts will not
  only please you but definitely surprise you</p>
 <div><FaRegSmile />
 BEST EXPERIENCE <GiTakeMyMoney /> AFFORDABLE PRICE</div>
 <Row> <Col xs={6} md={4}>
          <Image src="./public/happy.png"   roundedCircle />
          <h5> BEST EXPERIENCE</h5>
        </Col>
        <Col xs={6} md={4}>
        <Image src="./public/save.png" roundedCircle />
        <h5>AFFORDABLE PRICE</h5>
        </Col>
        <Col xs={6} md={4}>
        <Image src="./public/shine1.png" roundedCircle />
        <h5>CLEAN CARS</h5>
        </Col>
      </Row>
    </Container>
      <MainFooter/>
    </div>
  )
}

export default About
