import React, { Component } from 'react';
import Footer from './PresidentialFooter.js';
import { CSSTransitionGroup } from 'react-transition-group';
import {
    Row,
    Col
  } from "reactstrap";
import PastPic from './ebodPics/oldEbod.jpg';
import CurrentPic from './ebodPics/ebodCurrent.jpg';

const ExecutiveBoardRoute = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <ExecutiveBoard />
      </CSSTransitionGroup>
    );
  };
  

class ExecutiveBoard extends Component{
    render(){
        return(
            <div className="exec-board">
                <ExecStatement/>
                <BoardPaths />
                <Footer />
            </div>
        );
    }
}

const BoardPaths = () => {
    return(
        <div className = "ebod-container">
            <Row>
                <Col>
                    <a href = "/executiveboard/current">
                        <img src = {CurrentPic} />
                        <div className = 'ebod-text'>Current Executive Board</div>
                    </a>
                </Col>
                <Col>
                    <a href = "/executiveboard/past">
                        <img src = {PastPic} />
                        <div className = 'ebod-text'>Past Executive Boards</div>
                    </a>
                </Col>
            </Row>
        </div>
        

    );
}

class ExecStatement extends Component{
    render(){
        return(
            <div className="ebod-container">
                <h1 className="ebod-title">Executive Board</h1>
                <div className="ebod-text">
                 
                The Executive Board of Directors (EBOD) are a student-run body that work behind the scenes to aid the efficient operations of UGC while representing the entity as a whole. Officers are involved with a variety of multidisciplinary efforts that include creating and executing programs and events to serve UGC and UW, maintaining chapters dues and budgeting, expanding our community, or keeping a strong presence through marketing and social media.

Towards the end of the academic year, each position is open to all members within UGC who have interests in broadening their leadership capabilities by taking on roles that will enable them to dive further into the world of Greek administration, and that will enable them to work with an elected team of dedicated students who are passionate about their chapters and serving our community. Being on the Executive Board allows Greeks to represent their houses while creating positive change that can benefit both their chapters and UGC as a whole.

Be sure to look out for more information on EBOD elections as the academic year progresses!
                </div>

            </div>
        );
    }
}



export default ExecutiveBoardRoute;