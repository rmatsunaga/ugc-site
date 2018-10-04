import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Video from '../UW_intro.mp4';
import Logo from '../ugc_logo.png';
import {
  Row,
  Col
} from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import { CSSTransitionGroup } from 'react-transition-group';

const HomeRoute = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <LandingPage></LandingPage>
      </CSSTransitionGroup>
    );
  };
  
  class LandingPage extends Component {
    render() {
      return(
        <div>
          <video className = "ugcVideo" src = {Video} autoPlay={true} loop={true} muted  />
          <LandingPageCenterText />
        </div>
      );
    }
  }
  

  
  //   dropdown more; achievements, documents, exec board, current board, past boards, members
  
  
  class LandingPageCenterText extends Component {
    render(){
      return(
          <Row className="landing-text justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-xs-center">
            <Col xs="4" sm="auto" className="left-col">
              <h3 className="">The</h3>
              </Col>
            <Col xs="4" sm="auto" className="mid-col">
              <h1>UNITED</h1>
              <br />
              <h1>GREEK</h1>
              <br />
              <h1>COUNCIL</h1>
            </Col>
            <Col xs="4"sm="auto" className="right-col">
              <p>Community</p>
              <br />
              <p>Culture</p>
              <br />
              <p>Academics</p>
            </Col>
          </Row>



      );
    }
  }


export default HomeRoute;
