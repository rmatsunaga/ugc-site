import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Video from './UW_intro.mp4';
import Logo from './ugc_logo.png';
import {
  Row,
  Col
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import  HomeRoute  from './components/Home';
import AboutRoute from './components/About';
import UGCNavbar from './components/UGCNavbar';
import Organizations from './components/Organizations';
import Blog from './components/Blog';
import Calendar from './components/Calendar';
import AchievementsAndBoards from './components/AchievementsAndBoards';
import Achievements from './components/Achievements';
import Boards from './components/Boards';
import PresidentMessage from './components/PresidentMessage';
import ExecutiveBoard from './components/ExecutiveBoard';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
          <div>
            <UGCNavbar />
            <Switch>
              <Route path = "/" component={HomeRoute} exact/>
              <Route path = "/about" component = {AboutRoute} exact />
              <Route path = "/organizations" component = {Organizations} exact />
              <Route path = "/blog" component = {Blog} exact />
              <Route path = "/calendar" component = {Calendar} exact />
              <Route path = "/achievementsandboards" component = {AchievementsAndBoards} exact />
              <Route path = "/achievements" component = {Achievements} exact/>
              <Route path = "/boards" component = {Boards} exact/>
              <Route path = "/presidentMessage" component = {PresidentMessage} exact/>
              <Route path = "/executiveBoard" component = {ExecutiveBoard} exact/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
