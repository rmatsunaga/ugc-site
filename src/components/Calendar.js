import React, { Component } from 'react';




class CalendarRoute extends Component{
    render(){
        return(
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

            </div>

        );
    }
}


export default CalendarRoute;