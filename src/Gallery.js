import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Gallery() {
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
                <h1 style={{ color: 'white', fontFamily: 'sans-serif' }} className='mb-0'>Gallery</h1>
            </div>      <div style={{ backgroundColor: 'rgba(45, 9, 0, 0.84)', color: 'white' }}>
        <Container>
          <Row className="d-flex">
            <Col md={3} sm={6} xs={12}className='mt-5'>
              <Card style={{ border: "none", height: "300px" }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/h1.jpg')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body
                  style={{ backgroundColor: '#d23919', color: 'white' }}
                  className='text-center'
                >
                  <Card.Title>
                    <h3>Gallery Item 1</h3>
                    <h6>November 10, 2013</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className='mt-5'>
              <Card style={{ border: "none", height: "300px" }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/h2.jpg')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body
                  style={{ backgroundColor: '#d23919', color: 'white' }}
                  className='text-center'
                >
                  <Card.Title>
                    <h3>Gallery Item 2</h3>
                    <h6>November 10, 2013</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className='mt-5'>
              <Card style={{ border: "none", height: "300px" }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/h3.jpg')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body
                  style={{ backgroundColor: '#d23919', color: 'white' }}
                  className='text-center'
                >
                  <Card.Title>
                    <h3>Gallery Item 3</h3>
                    <h6>November 10, 2013</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className='mt-5'>
              <Card style={{ border: "none", height: "300px" }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/h4.jpg')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body
                  style={{ backgroundColor: '#d23919', color: 'white' }}
                  className='text-center'
                >
                  <Card.Title>
                    <h3>Gallery Item 4</h3>
                    <h6>November 10, 2013</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it4.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className="text-center">
                  <Card.Title>
                    <h5>Gallery Item 5</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it10.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className="text-center">
                  <Card.Title>
                    <h5>Gallery Item 6</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it16.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className="text-center">
                  <Card.Title>
                    <h5>Gallery Item 7</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it1.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className="text-center">
                  <Card.Title>
                    <h5>Gallery Item 8</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it15.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className='text-center'>
                  <Card.Title>
                    <h5>Gallery Item 9</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it6.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className='text-center'>
                  <Card.Title>
                    <h5>Gallery Item 10</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/it3.png')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className='text-center'>
                  <Card.Title>
                    <h5>Gallery Item 11</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12}>
              <Card className="h-100 border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={require('./img/h4.jpg')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body style={{ backgroundColor: '#d23919', color: 'white' }} className='text-center'>
                  <Card.Title>
                    <h5>Gallery Item 12</h5>
                    <small>November 10, 2013</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Gallery

