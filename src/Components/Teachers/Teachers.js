import React, { useEffect, useState } from 'react';
import { Container, Row,Col, Card} from 'react-bootstrap';
import techheader from '../images/teacherHeader.jpg';
import events from '../images/events.jpg';
import proudstd from '../images/proud-counter.jpg';
import './Teachers.css'

const Teachers = () => {
    const[teachers,setTeachers]=useState([])
    useEffect(()=>{
        fetch('teacher.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} lg={12} sm={12}>
                        <img src={techheader} alt="" className="mb-1"></img>
                    </Col>

                </Row>
                <Row className="mt-5">
                    
                    {
                        teachers.map(teacher=> 
                           
                  <Col md={4} >
                  <Card className="my-4">
                    <Card.Img variant="top" src={teacher.img}  />
                    <Card.Body>
                        
                      

                        <div className="d-flex text-center">
                            <Card.Title>{teacher.name}</Card.Title>
                            <p style={{marginLeft:'170px'}}>{teacher.title}</p>
                        </div>
                       
                       <div className="social-teachers">
                           <i className="fab fa-facebook"></i>
                           <i className="fab fa-twitter"></i>
                           <i className="fab fa-linkedin"></i>
                       </div>
                        
                    </Card.Body>
                    </Card>
                    </Col>
                    )
                    }
                
              
            </Row>

            </Container>

            <Container fluid>

                <Row>
                    <Col>
                        <img src={events} alt="" className="d-block"></img>
                    </Col>

                </Row>
            </Container>

            <Container fluid>

                <Row>
                    <Col>
                        <img src={proudstd} alt="" className="d-block"></img>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Teachers;