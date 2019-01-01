import React, { Component } from 'react';
import InstagramIcon from './contactPics/instagram.png';
import FacebookIcon from './contactPics/facebook.jpg';
import {
    Row,
    Col
  } from "reactstrap";
import Footer from './PresidentialFooter';

const Contact = () => {
    return(
        <div className = "contact-container">
            <div className = "contact-title">Contact Us</div>
            <ContactForm />
            <Row>
                <Col>
                    <Address />
                </Col>
                <Col>
                    <SocialMedia />
                </Col>
            </Row>
            <Footer />
        </div>
        
    );
}

const Address = () => {
    return(
        <div>
            <div className = "contact-title">Address:</div>
            <div className = "contact-address"> 
                Office of Fraternity and Sorority Life (OFSL)
                <br />
                Room 236, Husky Union Building
                <br />
                Seattle, WA 98195
            </div>
        </div>
    );
}

const SocialMedia = () => {
    return(
        <div>
            <div className = "contact-social-media-title">Follow Us on Social Media!</div>
            <Row>
                <Col className = "social-media-icons">
                    <a target="_blank" href = "https://www.instagram.com/uwugc/">
                    <img src={InstagramIcon} alt="" className="logo"/>
                    </a>
                </Col>
                <Col className = "social-media-icons">
                    <a target="_blank" href = "https://www.facebook.com/uwugc/">
                        <img src={FacebookIcon} alt="" className="logo"/>
                    </a>   
                </Col>
            </Row>
        </div>
    );
}

const ContactForm = () => {
    return(
        <div className = "contact-form-container">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJm3-66uVKPikZxKhXxlT-ozNSbzUodzZQgkB9pVQjZCbOGg/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    );
}
export default Contact;