import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
import '../Botto-header/Bottom.css'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { BrowserRouter,Switch,Route, NavLink} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Bottom from '../Botto-header/Bottom';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';
import Testimonial from '../Testimonials/Testimonial';
import Whywe from '../WhyBest/Whywe';
import MainServices from '../Services/MainServices';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Header = () => {
    return (
        <div className="Nav-Header py-4">
            <Container fluid>
                <Row>

    {/* header-logo  */}

                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="logo-section">
                            <img src={logo} alt="header-logo"></img>
                        </div>
                    </Col>

    {/* React-routing  */}
                  
                    <Col lg={12} md={12} sm={12} xs={12} className="py-4">

                        <BrowserRouter>
                           <nav>
                                <NavLink to="/home" >Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/services">Services</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                             </nav>
                            <Switch>
                                <Route exact path="/">
                                    
                                  <Bottom></Bottom>
                                  <Services></Services>
                                  <Testimonial></Testimonial>
                                  <Whywe></Whywe>

                                </Route>

                                <Route exact path="/home">

                                  <Bottom></Bottom>
                                  <Services></Services>
                                  <Testimonial></Testimonial>
                                  <Whywe></Whywe>

                                </Route>

                                <Route exact path="/about">
                                    <Teachers></Teachers>
                                </Route>

                                <Route exact path="/services">
                                  <MainServices></MainServices>
                                </Route>

                                <Route exact path="/blog">
                                   <Blog></Blog> 
                                </Route>

                                <Route exact path="/contact">
                                    <Contact></Contact>
                                </Route>

                                <Route exact path="*">
                                    <NotFound></NotFound>
                                </Route>
                            </Switch>
                         
                        </BrowserRouter>
                    </Col>
                    
                    <Col lg={2} md={2} sm={2} xs={0}></Col>
                    

                </Row>
            </Container>
        </div>
    );
};

export default Header;