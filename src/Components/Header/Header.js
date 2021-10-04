import React from 'react';
import logo from '../images/logo.png';
import './Header.css'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { BrowserRouter,Switch,Route, NavLink} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const Header = () => {
    return (
        <div className="Nav-Header py-4">
            <Container fluid>
                <Row>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <div className="logo-section">
                            <img src={logo} alt="header-logo"></img>
                        </div>
                    </Col>
                   
                    <Col lg={4} md={4} sm={4} xs={12}>
                        <BrowserRouter>
                           <nav>
                                <NavLink to="/home" >Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/services">Services</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                             </nav>
                            <Switch>
                                <Route exact path="/"></Route>
                                <Route exact path="/home"></Route>
                                <Route exact path="/about"></Route>
                                <Route exact path="/services"></Route>
                                <Route exact path="/blog"></Route>
                                <Route exact path="/contact"></Route>
                                <Route exact path="*">
                                    <NotFound></NotFound>
                                </Route>
                            </Switch>
                         
                        </BrowserRouter>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={0}></Col>
                    <Col lg={2} md={2} sm={2} xs={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
                            <FormControl
                            placeholder="Skills.."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Header;