import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import choose from '../images/choose.png';
import './Whywe.css'

const Whywe = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} >
                        <div className="Choose">
                            <h5>Why Choose Me</h5>
                            <h1>Tools For Teachers And Learners</h1>
                            <p>Our long experience at the top of the events business means we have expertise which reaches across a number of sectors, as well as knowledge of specific protocol and local regulations. But we know that things change, and we are constantly striving to adapt and improve. </p>
                            <Button variant="primary">Join For Free</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <img src={choose} alt="why choose us"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Whywe;