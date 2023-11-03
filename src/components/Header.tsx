import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg">
          <Container className='bg-body-tertiary navbar' >
              <Navbar.Brand>
              <div className='header'>  
                 <img className='logo' src='/imgs/logo.jpg' alt='logo' />
                 <h1 className='ms-2'> <span className='flory'> Florentina </span> <span className='nails'> Petrea Nails </span>  </h1> 
              </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="links">
                 <Nav.Link className='pages' to='/' as={NavLink}> Home </Nav.Link>
                 <Nav.Link className='pages' to='/prices' as={NavLink}> Prices </Nav.Link>
                 <Nav.Link className='pages' to='/contact' as={NavLink}> Contact </Nav.Link>
                 <Nav.Link className='pages' to='/book' as={NavLink}> Book Now </Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
}

export default Header;