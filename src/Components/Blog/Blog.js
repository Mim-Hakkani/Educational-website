import React, { useState,useEffect } from 'react';
import { Col, Container, Row,Card, Image, InputGroup, FormControl } from 'react-bootstrap';
import './blog.css';
import tags from '../images/tags.jpg'

const Blog = () => {
  
    //set blogs in usestate hooks

    const[blogs,SetBlogs] =useState([])

    //load fake data from public
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>SetBlogs(data))
    },[]);

    return (
        <div>
             <Container>
                 
                 {/* blog-title  */}

                 <Row>
                     <Col >
                       <h1 className="py-5">BLOG</h1>
                     </Col>
                 </Row>

                 {/* blog-content  */}

                 <Row>
                    <Col md={9} lg={9} sm={9}>
                        <Row>
                            {
                            blogs.map(blog=>
                                <Col md={6} >
                                    <Card style={{marginBottom:'20px',height:'500px'}} className="p-4">
                                        <Card.Img variant="top" src={blog.img} />
                                            <Card.Body>
                                                <p className="text-info" >{blog.about}</p>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>

                                                </Card.Text>
                                              
                                            </Card.Body>
                                          <div className="d-flex justify-content-between">

                                            <div className="details d-flex w-25">
                                                    <Image src={blog.img2} roundedCircle />
                                                    <h6 style={{marginTop:'5px',marginLeft:'15px'}}>{blog.name}</h6>
                                            </div>

                                            <div className="date-picker d-flex w-25">
                                                <i class="far fa-clock"></i>
                                                <p style={{marginTop:'-5px',marginLeft:'15px'}}>{blog.date}</p>   
                                            </div> 

                                          </div>  
                                    </Card>
                                </Col>
                                )
                            }
                           
                        </Row>
                    </Col>

{/* blog-sidebar  */}

                     <Col md={3} lg={3} sm={3}>
                         <div className="search">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search the Blogs"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2"><i className="fas fa-search"></i></InputGroup.Text>
                            </InputGroup>
                         </div>

                         <div className="recent-post mt-5 pt-5">
                             <h5>Recent Post</h5>
                             <hr/>
                            <p>The Importance Intrinsic Motivation.</p>
                            <p>A Better Alternative To Grading Student..</p>
                            <p>Strategic Social Media & Evolution of Visual</p>
                            <p>Skills is The Best.</p>
                         </div>

                         <div className="mt-5 pt-5">
                             <h4>Categories</h4><hr/>
                             <ul>
                                 <li>Web Design</li>
                                 <li>Web Develpment</li>
                                 <li>Graphics Design</li>
                                 <li>Digital Marketing</li>
                             </ul>
                         </div>

                         <div className="mt-5 pt-5">
                             
                              <img src={tags} alt=""></img>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    );
};

export default Blog;