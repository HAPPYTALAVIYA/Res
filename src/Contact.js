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
      <div className="bg text-center">
        <img src={require('./img/logo.png')} className='mt-5'></img>

        <Navbar style={{ backgroundColor: '#371508' }} expand="lg" className='mt-5' >
          <Container className="justify-content-center">
            <Nav className="text-center" style={{ color: '#c4733b' }}>

              <Nav.Link> <Link to="/" className="mx-3" style={{ color: '#c4733b' }}>Home</Link></Nav.Link>
              <Nav.Link ><Link to="/menu" className=" mx-3" style={{ color: '#c4733b' }}>Menu</Link></Nav.Link>
              <Nav.Link><Link to="/res" className=" mx-3" style={{ color: '#c4733b' }}>Reservation</Link></Nav.Link>
              <Nav.Link><Link to="/gallery" className=" mx-3" style={{ color: '#c4733b' }}>Gallery</Link></Nav.Link>
              <Nav.Link><Link to="/contact" className=" mx-3" style={{ color: '#c4733b' }}>Contact</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1 style={{ color: 'white', fontFamily: 'sans-serif' }} className='mt-5 mb-0'>Reservation</h1>
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

      <div style={{ backgroundColor: 'rgb(45 9 0 / 84%)', color: 'white', height: '680px' }}>
        <Container>
          <Row >
            {/* <Container> */}
            <Col xs={12} md={8} className='mt-5'>
              <Row>
                <Col md={6} sm={12}>
                  <form >
                    <div className="mb-3 ms-4">
                      Name:
                      <input type="text" className="in " />
                    </div>
                    <div className='mb-3 ms-4'>
                      Email* :
                      <input type="email" className="in" required />
                    </div>
                  </form>
                </Col>

                <Col md={6} sm={12}>
                  <form >
                    <div className="mb-3 ms-4 ">
                      Date*:
                      <input type="date" className="in" required />
                    </div>
                    <div className="mb-3 ms-4">
                      Person* :
                      <input type="text" className="in" required />
                    </div>
                  </form>
                </Col>
                <Col md={12} sm={12}>
                  <div className="mb-3 ms-4">
                    Message:
                    <input type="text" className="in " style={{ width: "800px", height: "250px" }} />
                  </div>
                  <button className="bu" style={{ marginLeft: '100px' }}>Send</button>
                </Col>
                
              </Row>
            </Col>
            <Col xs={12} md={4}>
                <h3 style={{ color: 'rgb(213 76 45)' }} className="mt-5">Opening Hours</h3>
                <div>
                  <h6 className="mt-4">Sunday-Thursday</h6>
                </div>
                <hr ></hr>
                <div>
                  <h6 >Friday</h6>
                </div>
                <hr style={{ color: 'oranged' }}></hr>
                <div>
                  <h6 >Saturday</h6>
                </div>
                <hr style={{ color: 'oranged' }}></hr>
                <div>
                  <h6 >Monday</h6>
                </div>
                <hr style={{ color: 'oranged' }}></hr>

                <h3 style={{ color: 'rgb(213 76 45)' }} className="mt-5">Our Addres</h3>
                <p>20 Main Street, Melbourne<br></br>
                  Phone:(200) 333 8890<br></br>
                  Fax:(200) 333 8892<br></br>
                  Email:contact@example.com</p>
              </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Contact
