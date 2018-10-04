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


const AboutRoute = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <AboutPage></AboutPage>
      </CSSTransitionGroup>
    );
  };
  

class AboutPage extends Component{
    render(){
        return(
            <div className="about-text">
                <MissionStatement/>
                <Purpose />
                <AboutUs />
                <Pillars />
            </div>
        );
    }
}

class MissionStatement extends Component{
    render(){
        return(
            <div className="mission-statement">
                <h1 className="mission-statement-header">OUR MISSION STATEMENT</h1>
                <div className="mission-statement-body">
                To promote unity among minority Greek organizations at the University of Washington, 
                and provide a united governing body for these organizations. UGC offers opportunities 
                to build community relations, gain cultural awareness, and promote academic success.
                </div>
            </div>
        );
    }
}

class Purpose extends Component{
    render(){
        return(
            <div className="purpose">
                <div className="purpose-title">
                    PURPOSE
                </div>
                <div className="purpose-body">
                    To promote and encourage unity among the Greek letter associations at the University of 
                    Washington by providing a structured environment in which individual groups can learn from 
                    one another and work toward a common goal. Promote and encourage interactions between all Greek
                     letter associations by means of a shared interest group in which all associations can benefit 
                     from one another’s shared experiences. To serve as a forum for the consideration of mutual interest
                      to the member organizations, to share mutual concerns such as information, problem solving and 
                      decision-making within common interest areas.
                </div>
            </div>
        );
    }
}

class AboutUs extends Component{
    render(){
        return(
            <div className = "about-us">
                <div className = "about-title">
                    ABOUT 
                    <br />
                    <span className="about-us-us">US </span>                   
                </div>
                <div className = "about-body-one">
                    Established in 2002, the United Greek Council (UGC) aims to unify historically underrepresented chapters on the UW Seattle campus and continues to do so today. Unlike traditional IFC or Panhellenic fraternities and sororities that mandate their membership to reside in furnished houses on Greek Row, UGC’s relatively young status at the University of Washington justifies why many chapters do not have permanent residences. Yet, through numerous social calendar events throughout the year, UGC chapters strive to promote an active campus presence while demonstrating the power of unity among multicultural Greeks with the wider Greek and UW community.
                </div>
                <div className= "about-body-two">
                    In the years since the establishment of the council, UGC is now home to fourteen active Greek organizations that span across Asian, Latino, and progressive interests. Built upon the three pillars of Community, Culture, and Academics, members of UGC continually display qualities symbolic of these, while representing the excellence of their respective chapters. As the council steadily expands in size, the United Greek Council will continue to provide a safe and inclusive space for the expression of diverse opinions and meaningful social relationships.
                </div>
            </div>
        );
    }
}

class Pillars extends Component{
    render(){
        return(
            <div className = "our-pillars">
                <div className="pillar-title">
                    OUR
                    <br />
                    PILLARS
                </div>
                <div className="pillar-container">
                    <p className = "pillar-one">
                        Community
                    </p>
                    <p className = "pillar-one-body">
                        The United Greek Council strives to provide all of our members with a home-away-from-home.
                        Through this, despite our diverse cultural backgrounds, the United Greek Council promotes a 
                        message of unity amongst our campus, while creating endless bonds between our organizations.
                    </p>
                    <p className = "pillar-two">
                        Culture
                    </p>
                    <p className = "pillar-two-body">
                        Through the celebration and promotion of cultures, the United Greek Council prides itself over 
                        the cultural pride that our members possess. Our council provides the support and resources that
                         each organization needs in order to spread more cultural awareness on campus, while embracing 
                        the individuality of each individual. 
                    </p>
                    <p className = "pillar-three">
                        Academics
                    </p>
                    <p className = "pillar-three-body">
                        The United Greek Council is composed of highly motivated students with countless dreams and passions 
                        that inspire the motivation to succeed. With this environment, each member of our council has the 
                        resources and support to aspire to reach beyond these goals and build a platform of networking and 
                        communication. 
                    </p>
                </div>

            </div>
        );
    }
}


export default AboutRoute;