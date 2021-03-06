import React from 'react';
import InstagramIcon from './contactPics/instagram.png';
import FacebookIcon from './contactPics/facebook.jpg';
import {
    Row,
    Col
  } from "reactstrap";
import Footer from './PresidentialFooter';
import { CSSTransitionGroup } from 'react-transition-group';

const Contact = () => {
    return(
        <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
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
        </CSSTransitionGroup>
    );
}

const Address = () => {
    return(
        <div>
            <div className = "contact-title">Address:</div>
            <div className = "contact-address"> 
                <br />
                Office of Fraternity and Sorority Life (OFSL)
                <br />
                Room 236, Husky Union Building
                <br />
                Seattle, WA 98195
                <br />
                <br />
                Email: ugc@uw.edu
                <br />
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
                    <a target="_blank" rel='noopener noreferrer' href = "https://www.instagram.com/uwugc/">
                    <img src={InstagramIcon} alt="" className="logo"/>
                    </a>
                </Col>
                <Col className = "social-media-icons">
                    <a target="_blank" rel='noopener noreferrer' href = "https://www.facebook.com/uwugc/">
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
            <iframe title = "contact form"src="https://docs.google.com/forms/d/e/1FAIpQLSdJm3-66uVKPikZxKhXxlT-ozNSbzUodzZQgkB9pVQjZCbOGg/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
    );
}
export default Contact;