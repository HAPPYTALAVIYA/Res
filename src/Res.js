import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Res() {
  return (
    <>
     <Navbar expand="lg" style={{ backgroundColor: '#371508' }} variant="dark">
                <Container>
                    {/* Logo on the left */}
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={require('./img/logo.png')}
                            alt="Logo"
                            className="d-inline-block align-top logo-img"
                        />
                    </Navbar.Brand>

                    {/* Toggle button for small screens */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    {/* Nav links aligned right */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto"> {/* ms-auto pushes the nav to the right */}
                            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/menu" className="nav-link-custom">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/res" className="nav-link-custom">Reservation</Nav.Link>
                            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="bg text-center">
                <h1 style={{ color: 'white', fontFamily: 'sans-serif' }} className='mb-0'>Reservation</h1>
            </div>
      <div className="contact-form-wrapper">
  <Container>
    <Row>
      <Col xs={12} md={8} className="form-column">
        <Row>
          <Col md={6} sm={12} className="form-group-column">
            <label className="form-label">Name:</label>
            <input type="text" className="contact-input" />
            <label className="form-label mt-3">Email*:</label>
            <input type="email" className="contact-input" required />
          </Col>

          <Col md={6} sm={12} className="form-group-column">
            <label className="form-label">Date*:</label>
            <input type="date" className="contact-input" required />
            <label className="form-label mt-3">Person*:</label>
            <input type="text" className="contact-input" required />
          </Col>

          <Col xs={12} className="form-message-column">
            <label className="form-label">Message:</label>
            <textarea className="contact-textarea" rows="6" />
          </Col>

          <Col xs={12} className="form-button-column text-center">
            <button className="contact-button mt-3">Send</button>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={4} className="info-column">
        <h3 className="info-heading">Opening Hours</h3>
        <div><h6>Sunday–Thursday</h6></div><hr />
        <div><h6>Friday</h6></div><hr />
        <div><h6>Saturday</h6></div><hr />
        <div><h6>Monday</h6></div><hr />

        <h3 className="info-heading mt-4">Our Address</h3>
        <p className="info-text">
          20 Main Street, Melbourne<br />
          Phone: (200) 333 8890<br />
          Fax: (200) 333 8892<br />
          Email: contact@example.com
        </p>
      </Col>
    </Row>
  </Container>
</div>

      <Footer />
      
    </>
  )
}

export default Res
