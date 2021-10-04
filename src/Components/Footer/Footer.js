import React from 'react';
import footerlogo from '../images/footer-logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

    <footer>
        <Container>
            <Row>

                {/* Top footer-1  */}

                <Col md={6} sm={6} xs={12} lg={3}>
                   <div className="Footer1">
                            <img src={footerlogo} alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat .</p>
                            <div className="footer-social">
                                <ul>
                                <li><i className="fab fa-facebook fb"></i></li>
                                <li><i className="fab fa-twitter tw"></i></li>
                                <li><i className="fab fa-youtube yt"></i></li>
                                <li><i className="fab fa-linkedin ln"></i></li>
                                </ul>
                            </div>
                        </div>
                    
                </Col>


  {/* Top footer-2 */}

                <Col md={6} sm={6} xs={12} lg={3}>

                        <div className="Footer-2">
                                <h5>Explore</h5>
                                <div>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Resources Center</li>
                                    <li>Courses</li>
                                    <li>Contact Us</li>
                                </div>
                        </div>
                </Col>

  {/* Top footer-3 */}

                <Col md={6} sm={6} xs={12} lg={3}>

                        <div className="Footer-3">
                                <h5>Categories</h5>
                                <div>
                                    <li>Al Courses</li>
                                    <li>Digital Marketing</li>
                                    <li>Programming</li>
                                    <li>Ux Ui Design</li>
                                    <li>Web Developing</li>
                                </div>
                        </div>
                </Col>

         {/* Top footer-4  */} 

                <Col md={6} sm={6} xs={12} lg={3}>
                    <div className="Footer-2">
                           <h5>Support</h5>
                           <div>
                               <li>Help Center</li>
                               <li>System Requirements</li>
                               <li>Support Session</li>
                               <li>Site Feedback</li>
                               <li>Forums</li>
                           </div>
                    </div>
                </Col>

                <Col lg={12} md={12} sm={12}>
                        <hr
                            style={{
                                width: "87%",
                                margin: "50px auto",
                                color: "#a69e9e"

                            }}
                        />
              </Col>


  {/* Main-Footer */}
              <Col md={12} lg={12} sm={12}>
                  <div className="footer-paragraph">
                      <p>@ 2021 Copyright All Right Reserved By Golam Hakkani Mim</p>
                  </div>
              </Col>
            </Row>
        </Container>
            
        </footer>
    );
};

export default Footer;