import React from 'react';
import './Home.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Menu() {
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
                <h1 style={{ color: 'white', fontFamily: 'sans-serif' }} className='mt-2 mb-0'>Our Menu</h1>
            </div>
            <div style={{ backgroundColor: '#2d0900d9', color: 'white' }}>
                <Container >
                    <Row >

                        <div className='text-center mt-5'>
                            <h2 className='text-center' style={{ color: '#c4733b', fontFamily: 'sans-serif', fontSize: '42px' }}><b>Italian Food</b></h2>
                            <h6>Italian food is a celebration of fresh ingredients, bold flavors, and rich culinary tradition.</h6>
                        </div>

                        <Col xs={12} sm={6} md={6}>
                            <div className="menu-item mt-4">
                                <img src={require('./img/it1.png')} alt="Lasagna" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Lasagna</h4>
                                        <span className="menu-price">$18</span>
                                    </div>
                                    <p className="m-0">
                                        A hearty, layered pasta dish made with sheets of lasagna noodles, rich meat sauce (ragù), béchamel sauce, and melted cheese.
                                        Key Ingredients: Pasta sheets, ground beef or pork, tomato sauce.
                                    </p>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <img src={require('./img/it2.png')} alt="Risotto alla Milanese" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Risotto alla Milanese</h4>
                                        <span className="menu-price">$15</span>
                                    </div>
                                    <p className="m-0">
                                        A creamy rice dish flavored with saffron and often served as a side to ossobuco (braised veal shanks).
                                        Arborio rice, saffron, butter, onion, Parmesan cheese, white wine.
                                    </p>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <img src={require('./img/it3.png')} alt="Carbonara" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Carbonara</h4>
                                        <span className="menu-price">$10</span>
                                    </div>
                                    <p className="m-0">
                                        A creamy rice dish flavored with saffron and often served as a side to ossobuco (braised veal shanks).
                                        Arborio rice, saffron, butter, onion, Parmesan cheese, white wine.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <div className="menu-item mt-4">
                                <img src={require('./img/it4.png')} alt="Pizza Margherita" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Pizza Margherita</h4>
                                        <span className="menu-price">$17</span>
                                    </div>
                                    <p className="m-0">
                                        Creamy Arborio rice infused with saffron and Parmesan.
                                        Rich, golden, and full of delicate flavor.
                                        Often served with osso buco or enjoyed on its own.
                                    </p>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <img src={require('./img/it5.png')} alt="Risotto alla Milanese" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Risotto alla Milanese</h4>
                                        <span className="menu-price">$19</span>
                                    </div>
                                    <p className="m-0">
                                        A signature rice dish of Italian food, originates from the Lombardy region and is a staple in Italian households.
                                        The creamy rice absorbs the flavors of broth made from meat, fish, or vegetables.
                                    </p>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <img src={require('./img/it6.png')} alt="Arancini" />
                                <div className="menu-text">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 className="menu-title m-0">Arancini</h4>
                                        <span className="menu-price">$13</span>
                                    </div>
                                    <p className="m-0">
                                        Arancini are crispy fried rice balls with a golden crust and a soft, flavorful filling,
                                        typically stuffed with ragu (meat sauce), mozzarella cheese, vegetables, or seafood.
                                        This beloved street food is especially popular in Sicily.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



            <div style={{ backgroundColor: '#2d0900d9', color: 'white' }}>
                <Container >
                    <Row >
                        <div className='text-center mt-5'>
                            <h2 className='text-center' style={{ color: '#c4733b', fontFamily: 'sans-serif', fontSize: '42px' }}><b>Chinese Food</b></h2>
                            <h6>Italian food is a celebration of fresh ingredients, bold flavors, and rich culinary tradition.</h6>
                        </div>

                        <Col xs={12} sm={6} md={6}>

                            <div className='ms-5 mt-5 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it10.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Sweet and Sour Pork </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$11</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        - A bright orange-red dish with crispy pork coated in a tangy, sweet sauce. Originally made with pork, variations now include chicken or beef.
                                        -

                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it7.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Mapo Tofu</h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$15</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A famous Sichuan dish featuring tofu in a bold, spicy, and flavorful sauce.
                                        Main Ingredients: Tofu, minced pork or beef, doubanjiang (fermented bean paste), garlic, ginger, Sichuan peppercorns.

                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it8.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Dim Sum</h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$10</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        Stir-fried noodles with vegetables and meat, widely popular both in China and globally.
                                        Main Ingredients: Egg noodles, cabbage, carrots, bean sprouts, chicken or beef, soy sauce.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6}>

                            <div className='ms-5 mt-5 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it9.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Chow Mein </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$17</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A variety of small, bite-sized dishes traditionally served in steamer baskets.
                                        Common Items: Shrimp dumplings (har gow), pork buns, siu mai, spring rolls.
                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it11.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Beef and Broccoli </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$19</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A Chinese-American favorite that features tender beef slices stir-fried with fresh broccoli in a savory sauce.
                                        Main Ingredients: Sliced beef (often flank steak), broccoli, garlic, ginger, oyster sauce, soy sauce, cornstarch.
                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it12.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Hot Pot </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$13</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A communal cooking experience where diners cook raw meats, vegetables, and noodles in a simmering pot of broth at the table.
                                        Main Ingredients: Variety of broths (spicy Sichuan, mushroom, tomato), thinly sliced meats, seafood, tofu, leafy greens, noodles.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <hr style={{ color: '#d23919', width: '50%', height: '40%' }} ></hr>
                    </Row>
                </Container>
            </div>



            <div style={{ backgroundColor: '#2d0900d9', color: 'white' }}>
                <Container >
                    <Row >

                        <div className='text-center mt-5'>
                            <h2 className='text-center' style={{ color: '#c4733b', fontFamily: 'sans-serif', fontSize: '42px' }}><b>Thai Food</b></h2>
                            <h6>Thai food is known for its vibrant flavors, combining spicy, sweet, sour, and salty tastes in perfectly balanced dishes.</h6>
                        </div>

                        <Col xs={12} sm={6} md={6}>

                            <div className='ms-5 mt-5 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it13.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Pad Thai  </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$11</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        Thailand’s national dish — stir-fried rice noodles with a perfect balance of sweet, salty, sour, and umami.
                                        Main Ingredients: Rice noodles, egg, shrimp or chicken, tofu, tamarind paste, fish sauce, peanuts, bean sprouts.

                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it14.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Tom Yum Goong</h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$15</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A famous Thai hot and sour soup made with shrimp and fragrant herbs.
                                        Main Ingredients: Shrimp, lemongrass, kaffir lime leaves, galangal, chili, lime juice, fish sauce, mushrooms.

                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it15.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Green Curry</h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$10</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        : A rich and spicy green curry made with fresh green chilies and creamy coconut milk.
                                        Main Ingredients: Green curry paste, coconut milk, chicken or beef, Thai eggplant, basil, bamboo shoots.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6}>

                            <div className='ms-5 mt-5 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it16.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Som Tum  </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$17</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A spicy and tangy green papaya salad that’s crunchy and refreshing.
                                        Main Ingredients: Shredded green papaya, cherry tomatoes, long beans, garlic, chilies, fish sauce, lime juice, peanuts.

                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it17.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Massaman Curry </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$19</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A milder, rich curry influenced by Indian and Persian flavors, perfect for those who prefer less spice.
                                        Main Ingredients: Massaman curry paste, coconut milk, beef or chicken, potatoes, peanuts, cinnamon, cardamom.
                                    </p>
                                </div>
                            </div>

                            <div className='ms-5 mt-3 d-flex align-items-center p-3'>
                                <div className="d-flex flex-column text-center me-3">
                                    <img src={require('./img/it18.png')} style={{ width: '150px', height: '120px', border: '5px solid white' }} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#d23919', margin: 0 }}>Thai Fried Rice </h4>
                                        <div className='pr' style={{ marginLeft: '1rem' }}>$13</div>
                                    </div>
                                    <p style={{ color: 'white', margin: 0 }}>
                                        A simple yet flavorful fried rice dish that’s quick and satisfying.
                                        Main Ingredients: Jasmine rice, egg, garlic, onions, vegetables, chicken or shrimp, fish sauce, lime, cucumber slices.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <hr style={{ color: '#d23919', width: '50%', height: '40%' }} ></hr>
                    </Row>
                </Container>
            </div>

            <Footer />

        </>
    )
}

export default Menu
