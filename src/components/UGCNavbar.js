import React, { Component } from 'react';
import '../App.css';
import Logo from '../ugc_logo.png';

class UGCNavbar extends Component {
    render(){
      return(
        <div className="topnav" id="myTopnav">
          <img src={Logo} alt="" className="logo"/>
          <a href="/" class="active">Home</a>
          <div className="dropdown">
            <button className="dropbtn">About 
              <i className="fa fa-caret-down"/>
            </button>
            <div className="dropdown-content">
              <a href="/about">Overview</a>
              <a href="/boards">Executive Board</a>
              <a href="/achievements">Achievements</a>
              <a href="#">Documents</a>
            </div>
          </div> 
          <a href = '/organizations'>Organizations</a>
          <a href="/achievementsandboards">Achievements & Boards</a>
          <a href = '/blog'>Blog</a>
          <a href = '/calendar'>Calendar</a>
          <a href = '#'>Contact</a>
          <a href="javascript:void(0);" className="icon" onClick={myFunction => {
                      var x = document.getElementById("myTopnav");
                      if (x.className === "topnav") {
                          x.className += " responsive";
                      } else {
                          x.className = "topnav";
                      }
                    }
          }>&#9776;</a>
        </div>
      );
    }
  }

  export default UGCNavbar;