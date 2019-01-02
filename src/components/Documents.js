import React, { Component } from 'react';
import '../App.css';
import Footer from './PresidentialFooter.js';
import { CSSTransitionGroup } from 'react-transition-group';

class Documents extends Component{
    Document = () => {
        let docLinks = [
            "https://docs.google.com/document/d/1I7jmEriV6Xk_NUab070675YfEwOsiKY7BpLoLNjaL98/edit",
            "https://docs.google.com/document/d/1DZfiNEQalWbjhFmZ-lDakF1zJwwycbjX2QLq_MKGsQY/edit",
            "https://docs.google.com/document/d/1d3O2t9s_eubk2T7VRQGVLYsXJ4sz16bD2bxBcbKg2Bc/edit"
        ]
        let docTitles = [
            "Bylaws",
            "Constitution",
            "Membership"
        ]
        let documents = []

        // Outer loop to create achievements
        for(var i = 0; i < docLinks.length; i++) {
            documents.push(<a href = {docLinks[i]}>{docTitles[i]}</a>);
            documents.push(<br />)
        }
        return documents
    }

    render(){
        return(
            <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
                <div> 
                    <div className="documents-header">Documents</div>
                    <div className = "document-container">
                        <div className = "document-type">Incorporating Articles</div>
                        <div className = "documents">
                            {this.Document()}
                        </div> 
                        <div className = "document-type">Communication Records</div>
                        <div className = "documents">
                            <a href = "https://docs.google.com/spreadsheets/d/15lQTSvBKosZRyeveP4yFzgeDPFC-dxwVz8SFzvWqYoI/edit#gid=0">Contact Sheet</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </CSSTransitionGroup>

            
        );
    }
}

export default Documents;