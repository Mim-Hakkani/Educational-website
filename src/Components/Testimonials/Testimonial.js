import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={12} className="text-center textimonial mb-5 mt-4">
                        <h1 className="text-uppercase">Our Testimonial</h1>
                        <hr></hr>
                    </Col>

                    {/* carousel and slider is here  */}
                    
                    <Col className="my-3">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/best-excellent-services-rating-for-satisfaction-concept-of-setting-a-picture-id1261581381?b=1&k=20&m=1261581381&s=170667a&w=0&h=jYRfFrTBcGl1SK1vgOo9UpwtCwY4RBkFCZiyBC18bYs="
                            alt="First slide"
                            height="300"
                            />
                            <Carousel.Caption className="text-dark">
                            <h3 >'A collected poems' is either a gravestone or a testimonial to survival.
                                </h3>
                            <p>Hakkani</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                       
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/best-excellent-services-rating-for-satisfaction-concept-of-setting-a-picture-id1261581381?b=1&k=20&m=1261581381&s=170667a&w=0&h=jYRfFrTBcGl1SK1vgOo9UpwtCwY4RBkFCZiyBC18bYs="
                            alt="First slide"
                            height="300"
                            />
                            <Carousel.Caption className="text-dark">
                            <h3>I couldn't have asked for a better testimonial than Bob Dylan parting with his own cash for a pair of my shoes
                             </h3>
                            <p>RG Rakib </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                       
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/best-excellent-services-rating-for-satisfaction-concept-of-setting-a-picture-id1261581381?b=1&k=20&m=1261581381&s=170667a&w=0&h=jYRfFrTBcGl1SK1vgOo9UpwtCwY4RBkFCZiyBC18bYs="
                            alt="First slide"
                            height="300"
                            />
                            <Carousel.Caption className="text-dark">
                            <h3> When I went to college, I was so focused on this new experience of my life that I really just pushed down all of my fears of hell and damnation.</h3>
                            <p>Prasad kisna</p>
                            </Carousel.Caption>
                        </Carousel.Item > 
                   </Carousel>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;