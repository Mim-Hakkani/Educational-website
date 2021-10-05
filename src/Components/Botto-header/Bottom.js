import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Bottom.css'
import header_bottom from '../images/bottom-header.png'

const Bottom = () => {
    return (
        <div className="bottom-header mt-4">
            <Container>
                <Row>
                    <Col md={6} lg={8} xs={6}>
                        <div className="header-left">
                            <h1>Launch your<br/>
                                Own online learning<br/> Platform
                            </h1>
                            <h4>Unlimited access to all 60+ instructors.</h4>
                            <p>2 passes (with access to all classes) for $240</p>
                        </div>
                    </Col>

                    <Col md={6} lg={4} xs={6}>

                       <div className="header-right">
                          <img src={header_bottom} alt="" />
                        </div>

                    </Col>
                </Row>
            </Container>
       


        </div>
    );
};

export default Bottom;