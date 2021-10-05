import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Nav, Row} from 'react-bootstrap';
import '../Services/Services.css'

const MainServices = () => {

    //data set in hooks
    const[mainServices,SetServices] =useState([])

    //data load from fake data 
    
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>SetServices(data))
    },[]);

    return (
<div className="services-header mt-5 py-5">
            <Container >
                <Row>
                    <Col md={12} lg={12} sm={12}>
                           <div>
                            
                                <h1>
                                    Find The Right <br/>Online Course For You
                                </h1>
                                <p>You don't have to strugle alone,We have got our assistace and help</p>
                            </div>
                        
                    </Col>

                

                </Row>

                <Row className="mt-5">
                    
                        {
                            mainServices.map(service=> 
                               
                      <Col md={4} >
                      <Card className="mb-5" style={{height:'500px'}}>
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
                                
                                <Image src="https://themepure.net/template/educal/educal/assets/img/course/teacher/teacher-1.jpg" roundedCircle />
                                <p> {service.name}</p>
                            </div>
                           
                            
                        </Card.Body>
                        </Card>
                        </Col>
                        )
                        }
                    
                  
                </Row>
            </Container>
        </div>
    );
};

export default MainServices;