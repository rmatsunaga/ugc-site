import React, { Component } from 'react';
import '../App.css';
import Logo from '../ugc_logo.png';

class UGCNavbar extends Component {
    render(){
      return(
        <div className="ugc-navbar">
          <img src={Logo} alt="" className="logo"/>
          <header className="navbar">
            
            <br />
            <div>
              <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
              <nav>
                <ul>
                  <li><a href = '/'>Home</a></li>
                  <li><a href = '/about'>About</a></li>
                  <li><a href = '/organizations'>Organizations</a></li>
                  <li><a href="/achievementsandboards">Achievements & Boards</a></li>
                  <li><a href = '/blog'>Blog</a></li>
                  <li><a href = '/calendar'>Calendar</a></li>
                  <li><a href = '#'>Contact</a></li>
                </ul>
              </nav>
              <label for = "nav-toggle" class="nav-toggle-label" >
                <span></span>
              </label>
  
            </div>
            
          </header>
  
  
        </div>
        
      );
    }
  }

  export default UGCNavbar;