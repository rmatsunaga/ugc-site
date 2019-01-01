import React, { Component } from 'react';
import Footer from './AboutOverviewFooter.js';
import { CSSTransitionGroup } from 'react-transition-group';


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

                <Footer />
            </div>
        );
    }
}

class ExecStatement extends Component{
    render(){
        return(
            <div className="mission-statement">
                <h1 className="mission-statement-header">Executive Board</h1>
                <div className="mission-statement-body">
                 
*history and purpose of EBOD (make sure to include what "EBOD" stands for just in case we use the term elsewhere)*
                </div>
            </div>
        );
    }
}



export default ExecutiveBoardRoute;