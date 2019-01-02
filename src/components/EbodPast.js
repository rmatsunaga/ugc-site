import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Footer from './PresidentialFooter';

const EbodPast = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <EbodPastPosts />
        <Footer />
      </CSSTransitionGroup>
    );
}


class EbodPastPosts extends Component {

    state = {
        body: [],
    }

    componentDidMount() {
        var url = "https://www.googleapis.com/blogger/v3/blogs/6521581669891101949/pages?key=AIzaSyADiv27SBcGeZzfo1xFOwk2sz2ydvIktcA";
        let text = ""
        axios.get(url).then((res) => {
            text += '<div className = "ebod-text">' + res.data.items[5].content + '</div>';
            console.log(res.data.items[5].content);

            this.setState({
                body: text,
            });
        });
    }

    render(){
        return(
            <div className = "ebod-container">
                <div className = "ebod-title">
                    Past Executive Boards
                </div>
                <div 
                    className = "ebod-text"
                    contentEditable='true' 
                    dangerouslySetInnerHTML={{__html: this.state.body}}
                />
            </div>


        );
    }
}

export default EbodPast;
