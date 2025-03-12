
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const MainFooter = () => {
  return (
    <>
    <div className="b-example-divider"></div>
<div className="footr">
 
    <div className="col mb-3">
    <ul className="nav flex-column">
        <img src="./public/logon.png" alt="" width="80px" height="50px" />
      {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li> */}
     

    </ul>
    
  </div>

  <div className="col mb-3">
    <h5>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
    </ul>
  </div>

  <div className="col mb-3">
    <h5>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
     
    </ul>
  </div>

  <div className="col mb-3">
    <h5>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
     
    </ul>
  </div>
 
  </div>
  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"></div>

    <div><p className=" text-center "> &copy; 2024 Company, Inc.  All rights reserved </p> </div>
   <p className="text-center"> <FaFacebook /><FaFacebookMessenger /><FaTwitter /></p>

  </>
  )
}

export default MainFooter
