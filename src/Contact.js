import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
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
                <h1 style={{ color: 'white', fontFamily: 'sans-serif' }} className='mb-0'>Contact Us</h1>
            </div>
      <div className="mt-4">
  <h3 style={{ color: 'rgb(213 76 45)' }}>Find Us on Map</h3>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=..."  // paste your actual map link here
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      <div style={{ backgroundColor: 'rgba(45, 9, 0, 0.84)', color: 'white', padding: '50px 0' }}>
  <Container>
    <Row>
      <Col xs={12} md={8} className='mt-4'>
        <Row>
          <Col md={6} sm={12} className="mb-4">
            <form>
              <label className="form-label ms-2">Name:</label>
              <input type="text" className="in form-control" />
              <label className="form-label ms-2 mt-3">Email*:</label>
              <input type="email" className="in form-control" required />
            </form>
          </Col>

          <Col md={6} sm={12} className="mb-4">
            <form>
              <label className="form-label ms-2">Date*:</label>
              <input type="date" className="in form-control" required />
              <label className="form-label ms-2 mt-3">Person*:</label>
              <input type="text" className="in form-control" required />
            </form>
          </Col>

          <Col xs={12} className="mb-4">
            <label className="form-label ms-2">Message:</label>
            <textarea className="in message-box form-control" rows="6"></textarea>
          </Col>

          <Col xs={12} className="text-center">
            <button className="bu mt-3">Send</button>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={4} className="mt-4">
        <h3 style={{ color: 'rgb(213 76 45)' }}>Opening Hours</h3>
        <div><h6>Sunday–Thursday</h6></div><hr />
        <div><h6>Friday</h6></div><hr />
        <div><h6>Saturday</h6></div><hr />
        <div><h6>Monday</h6></div><hr />

        <h3 style={{ color: 'rgb(213 76 45)' }} className="mt-4">Our Address</h3>
        <p>
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

export default Contact
