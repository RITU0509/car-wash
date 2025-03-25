import React from 'react';
import About from './pages/About';
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './pages/Contact';
import Services from './pages/Services';
import Washing from './components/Washing';

function App() {

  return (
    <div>
      {/* <Home /> */}
      {/* <About/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/services" element ={<Services/>}/>
        </Routes>
      </BrowserRouter>  */}
<Washing/>
    </div>
  )
}

export default App

