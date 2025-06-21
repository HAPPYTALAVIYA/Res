import React from 'react';
import './Home.css';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import bs from './img/i5.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
// import Footer from '../../ecom/src/Footer';


function Home() {
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


            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/i1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className='inner text-start'>
                            <h1 style={{ color: '#c4733b' }}>Special Wine</h1>
                            <div className='text-start'>
                                Discover the elegance of our signature wine, crafted from handpicked grapes and aged to perfection. Each sip reveals rich notes of dark cherry, oak, and subtle spices, delivering a smooth and lingering finish. Sourced from the finest vineyards, this wine embodies tradition and craftsmanship. It pairs beautifully with our chef's special entrées and elevates every dining experience.
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/i2.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className='inner text-start'>
                            <h1 style={{ color: '#c4733b' }}>Cozy Dinner</h1>
                            <div className='text-start'>

                                Step into warmth and comfort with our cozy dinner experience, where every meal feels like home. Soft lighting, soothing music, and a welcoming ambiance set the stage for a perfect evening. Whether you're sharing stories over comfort food or enjoying a quiet moment with someone special, our carefully curated menu brings heart and flavor to every plate.
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./img/i3.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className='inner text-start'>
                            <h1 style={{ color: '#c4733b' }}>Fresh & Delicious</h1>
                            <div className='text-start'>

                                Every dish we serve is a celebration of freshness and flavor. We source the finest ingredients daily—crisp vegetables, premium cuts, and fragrant herbs—to ensure every bite is vibrant and satisfying. From the first sizzle in the pan to the final garnish, our chefs craft each plate with care and passion. Whether it’s a refreshing salad, a hearty entrée, or a seasonal special, you’ll taste the difference in every forkful.
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{ backgroundColor: '#371508', paddingTop: '40px' }}>
                <Container style={{ marginBottom: '90px' }}>
                    <h1 style={{ color: '#c4733b' }} className='text-center mt-5'>Welcome!</h1>
                    <p className='text-white text-center'>
                        "Welcome to a place where every dish is thoughtfully prepared with the freshest ingredients, every flavor tells a story."
                    </p>

                    <Row className='g-4 justify-content-center mt-4'>
                        <Col xs={12} sm={10} md={6} lg={4} className="d-flex justify-content-center">
                            <div className='box'>
                                <div className="d-flex align-items-start text-start">
                                    <FontAwesomeIcon icon={faHeart} className="fs-1 text-danger me-3" />
                                    <div>
                                        <h3 className="m-0">Find Your Favourite</h3>
                                        <p className="mt-2 text-dark">
                                            Explore a wide range of delicious dishes curated by our chefs.
                                            Filter by taste, ingredients, or cuisine to match your cravings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={10} md={6} lg={4} className="d-flex justify-content-center">
                            <div className='box'>
                                <div className="d-flex align-items-start text-start">
                                    <FontAwesomeIcon icon={faStar} className="fs-1 text-danger me-3" />
                                    <div>
                                        <h3 className="m-0">Best Seller</h3>
                                        <p className="mt-2 text-dark">
                                            Our most-loved dishes, chosen by thousands of happy customers.
                                            Tried, tested, and totally delicious.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={10} md={6} lg={4} className="d-flex justify-content-center">
                            <div className='box'>
                                <div className="d-flex align-items-start text-start">
                                    <FontAwesomeIcon icon={faCalendar} className="fs-1 text-danger me-3" />
                                    <div>
                                        <h3 className="m-0">Reservation</h3>
                                        <p className="mt-2 text-dark">
                                            Skip the wait—book your spot in just a few clicks.
                                            Perfect dining begins with a simple reservation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <div
                    style={{
                        backgroundImage: `url(${bs})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#fff',
                        paddingTop: '60px',
                        paddingBottom: '60px',
                    }}
                >
                    <div className="container ">
                        <Row className="g-4 justify-content-center">
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Card style={{ border: 'none', borderRadius: 'none' }} className='h-100'>
                                    <Card.Img variant="top" src={require('./img/h1.jpg')} />
                                    <Card.Body className='text-start'>
                                        <Card.Title>Bruschetta al Pomodoro</Card.Title>
                                        <Card.Text>
                                            Crispy grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.
                                            A refreshing and vibrant antipasto with rustic charm.
                                            Each bite bursts with Mediterranean flavor and texture
                                        </Card.Text>
                                        <Button style={{ backgroundColor: 'orangered', border: 'none' }}>$10</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Card style={{ border: 'none', borderRadius: 'none' }} className='h-100'>
                                    <Card.Img variant="top" src={require('./img/h2.jpg')} />
                                    <Card.Body className='text-start'>
                                        <Card.Title>Risotto alla Milanese</Card.Title>
                                        <Card.Text>
                                            Creamy Arborio rice infused with saffron and Parmesan.
                                            Rich, golden, and full of delicate flavor.
                                            Often served with osso buco or enjoyed on its own.
                                        </Card.Text>
                                        <Button style={{ backgroundColor: 'orangered', border: 'none' }}>$18</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Card style={{ border: 'none', borderRadius: 'none' }} className='h-100'>
                                    <Card.Img variant="top" src={require('./img/h3.jpg')} />
                                    <Card.Body className='text-start'>
                                        <Card.Title>Fried Chicken</Card.Title>
                                        <Card.Text>
                                            Golden, crispy, and tender fried chicken, seasoned with a blend of spices.
                                            Cooked to perfection with a crunchy coating and juicy interior.
                                            Often served with classic sides like mashed potatoes or coleslaw.
                                        </Card.Text>
                                        <Button style={{ backgroundColor: 'orangered', border: 'none' }}>$20</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Card style={{ border: 'none', borderRadius: 'none' }} className='h-100'>
                                    <Card.Img variant="top" src={require('./img/h4.jpg')} />
                                    <Card.Body className='text-start'>
                                        <Card.Title>Lasagna alla Bolognese</Card.Title>
                                        <Card.Text>
                                            Layers of pasta, slow-cooked beef ragù, béchamel, and Parmesan cheese.
                                            Baked until bubbling and golden on top.
                                            A hearty and indulgent Italian comfort food.
                                        </Card.Text>
                                        <Button style={{ backgroundColor: 'orangered', border: 'none' }}>$15</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                <Container className="mt-5">
                    <Row>
                        {/* Latest News Column */}
                        <Col xs={12} md={6}>
                            <h1 className="text-center mt-4" style={{ color: '#c4733b' }}>Latest News</h1>
                            <h6 className="text-center text-white">"Flavors that speak louder than words."</h6>

                            {/* News Item 1 */}
                            <div className="mt-4 d-flex align-items-start p-3 rounded" style={{ backgroundColor: '#371508' }}>
                                <div className="d-flex flex-column align-items-center text-center me-3">
                                    <span className="y1">28</span>
                                    <span className="y2">SEP</span>
                                </div>
                                <p className="text-white m-0">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem. <strong>Read more</strong>
                                </p>
                            </div>

                            {/* News Item 2 */}
                            <div className="mt-3 d-flex align-items-start p-3 rounded" style={{ backgroundColor: '#371508' }}>
                                <div className="d-flex flex-column align-items-center text-center me-3">
                                    <span className="y1">28</span>
                                    <span className="y2">SEP</span>
                                </div>
                                <p className="text-white m-0">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem. <strong>Read more</strong>
                                </p>
                            </div>

                            {/* News Item 3 */}
                            <div className="mt-3 d-flex align-items-start p-3 rounded" style={{ backgroundColor: '#371508' }}>
                                <div className="d-flex flex-column align-items-center text-center me-3">
                                    <span className="y1">28</span>
                                    <span className="y2">SEP</span>
                                </div>
                                <p className="text-white m-0">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem. <strong>Read more</strong>
                                </p>
                            </div>
                        </Col>

                        {/* New Menu Column */}
                        <Col xs={12} md={6}>
                            <h1 className="text-center mt-4" style={{ color: '#c4733b' }}>New Menu</h1>
                            <h6 className="text-center text-white">
                                "Discover our exciting new menu — fresh flavors and bold tastes await you!"
                            </h6>

                            {/* Menu Item 1 */}
                            <div className="mt-4 d-flex align-items-start p-3 rounded" style={{ backgroundColor: '#371508' }}>
                                <div className="me-3">
                                    <img
                                        src={require('./img/h1.jpg')}
                                        alt="Menu item 1"
                                        className="img-fluid"
                                        style={{ maxWidth: '160px', border: '5px solid white' }}
                                    />
                                </div>
                                <p className="text-white m-0">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem. <strong>Read more</strong>
                                </p>
                            </div>

                            {/* Menu Item 2 */}
                            <div className="mt-3 d-flex align-items-start p-3 rounded" style={{ backgroundColor: '#371508' }}>
                                <div className="me-3">
                                    <img
                                        src={require('./img/h2.jpg')}
                                        alt="Menu item 2"
                                        className="img-fluid"
                                        style={{ maxWidth: '160px', border: '5px solid white' }}
                                    />
                                </div>
                                <p className="text-white m-0">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem. <strong>Read more</strong>
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>




            </div>

            <Footer />







        </>
    )
}

export default Home
