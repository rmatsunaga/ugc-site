import React, { Component } from 'react';
import Footer from './PresidentialFooter';
import { CSSTransitionGroup } from 'react-transition-group';




class CalendarRoute extends Component{
    render(){
        return(
            <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
                <div className = "calendar-container">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=ugc%40uw.edu&ctz=America%2FLos_Angeles" 
                    style= {{border: 0}}
                    width="800" 
                    height="600" 
                    frameborder="0" 
                    scrolling="no"
                    align= "middle"
                    >
                </iframe>
                <Footer />

                </div>
            </CSSTransitionGroup>


        );
    }
}


export default CalendarRoute;