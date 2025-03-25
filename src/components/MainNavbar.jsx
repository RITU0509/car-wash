import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
function MainNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <img src="./public/logon.png" alt="" width="80px" height="40px"/>
                <Navbar.Brand href="#home"><img src="/img/logo.png" alt="" width="150px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Link to="/products" className='nav-link'>Products</Link>
                        <Link to="/contact-us" className='nav-link'>ContactUs</Link>
                    
                      
                
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Car Washing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Car Detailing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Car Wrapping</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Download Catalogue</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;


