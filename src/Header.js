import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#371508' }} expand="lg" >
                <Container className="justify-content-center">
                    <Nav className="text-center" style={{ color: '#c4733b' }}>
                        
                        <Nav.Link><Link to= "/" className="mx-3" style={{ color: '#c4733b' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/menu" className=" mx-3" style={{ color: '#c4733b' }}>Menu</Link></Nav.Link>
                        <Nav.Link><Link to="/res" className=" mx-3" style={{ color: '#c4733b' }}>Reservation</Link></Nav.Link>
                        <Nav.Link><Link to="/gallery" className=" mx-3" style={{ color: '#c4733b' }}>Gallery</Link></Nav.Link>
                        <Nav.Link><Link to="/contact" className=" mx-3" style={{ color: '#c4733b' }}>Contact</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </div>
  )
}

export default Header
