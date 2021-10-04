import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Nav, Pagination, Row, Toast } from 'react-bootstrap';
import './Services.css'

const Services = () => {
 //data set 
    const[services,setServices]=useState([]);

// data load from fake data
    useEffect(()=>{
        fetch('services_home.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div className="services-header">
            <Container >
                <Row>
                    <Col md={6} lg={6} sm={6}>
                           <div>
                            
                                <h1>
                                    Find The Right <br/>Online Course For You
                                </h1>
                                <p>You don't have to strugle alone,We have got our assistace and help</p>
                            </div>
                        
                    </Col>

                    <Col md={6} lg={6} sm={6} >

        {/* Navbar for skill */}
                    <Nav className="justify-content-end pt-5 navs-skill" activeKey="/home" >
                        <Nav.Item>
                        <Nav.Link href="/home">Programing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">Web</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Digital Marketing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2" >
                            Graphices Design
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    </Col>

                </Row>

                <Row className="mt-5">
                    
                        {
                            services.map(service=>

                // single type id skills
                                
                      <Col md={4} >
                      <Card className="mt-2">
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>

                            <div className="d-flex">
                                <p><i class="far fa-bookmark"></i> {service.lesson} Lession</p>
                                <p style={{marginLeft: '180px'}}><i class="fas fa-star"></i> {service.ratting}({service.user})</p>
                            </div>

                            <div className="d-flex">
                                <h6>Pervious Price: <del>$ {service.Prev_price}</del> </h6>
                                <h6 style={{marginLeft: '50px',marginBottom:'5px'}}>Current Price: $ {service.c_price}</h6>
                            </div>
                            <div className="d-flex mt-2">
                                
                                <Image src="https://themepure.net/template/educal/educal/assets/img/course/teacher/teacher-1.jpg" roundedCircle />
                                <h6 style={{marginLeft: '14px'}}> {service.name}</h6>
                            </div>
                           
                            
                        </Card.Body>
                        </Card>
                        </Col>
                        )
                        }
                    
                  
                </Row>

                <Row>
                    <Col>

                    {/* pagination  */}
                    
                    <Pagination className="mt-5 justify-content-center">
                        <Pagination.First />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Last />
                        </Pagination>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;