import React from 'react';
import logo from '../images/logo.png'
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="Nav-Header">
            <Container fluid>
                <Row>
                    <Col lg={2} md={2} sm={2} xs={12}>
                        <div className="logo-section">
                            <img src={logo} alt="header-logo"></img>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;