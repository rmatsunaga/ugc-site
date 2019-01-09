import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Footer from './PresidentialFooter';

const Blog = () => {
    return(
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
        <BlogRoute />
        <Footer />
      </CSSTransitionGroup>
    );
}


class BlogRoute extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        var url = "https://www.googleapis.com/blogger/v3/blogs/6521581669891101949/posts?key=AIzaSyADiv27SBcGeZzfo1xFOwk2sz2ydvIktcA";
        axios.get(url)
            .then((res) => {
                var text = "";
                var title = new Array(res.data.items.length);
                var i;
                for(i = 0; i < res.data.items.length; i++){

                    // Create html for title

                   // title = "<div class = 'post-title'>" + res.data.items[i].title + "</div>";
                   title = "<div class = 'ebod-title'>" + res.data.items[i].title + "</div>";
                    // ADD date posted
                    
                    // Following title, add blog post html

                    //text += "<div class= 'post-container'><div class='single-post'>" + title + res.data.items[i].content + "</div> </div>";
                    text += "<div class= 'single-post'><div class='ebod-text'>" + title + res.data.items[i].content + "</div> </div>";
                }
                this.setState({
                    posts: text,                
                });
            })
    }

    render(){
        return(
            <div 
                className = "ugc-posts"
                contentEditable='true' 
                dangerouslySetInnerHTML={{__html: this.state.posts}}
            />

        );
    }
}

export default Blog;
