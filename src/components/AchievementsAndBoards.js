import React, { Component } from 'react';
import '../App.css';
import {
    Row,
    Col
  } from "reactstrap";

class AchievementsAndBoards extends Component{
    render(){
        return(
            <Row>
                <Col></Col>
                <Col><div className="mission-statement-header"><a href="/achievements">Normal</a></div></Col>
                <Col><div className="mission-statement-header"><a href="/boards">Super!</a></div></Col>    
                <Col></Col>
            </Row>
                

        );
    }
}

export default AchievementsAndBoards;