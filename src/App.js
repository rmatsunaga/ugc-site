import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import  HomeRoute  from './components/Home';
import AboutRoute from './components/About';
import UGCNavbar from './components/UGCNavbar';
import Organizations from './components/Organizations';
import Blog from './components/Blog';
import Calendar from './components/Calendar';
import Achievements from './components/Achievements';
import PresidentMessage from './components/PresidentMessage';
import ExecutiveBoard from './components/ExecutiveBoard';
import Documents from './components/Documents';
import History from './components/History';
import Contact from './components/Contact';
import PastEbod from './components/EbodPast';
import CurrentEbod from './components/EbodCurrent';



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
              <Route path = "/achievements" component = {Achievements} exact/>
              <Route path = "/presidentMessage" component = {PresidentMessage} exact/>
              <Route path = "/executiveBoard" component = {ExecutiveBoard} exact/>
              <Route path = "/executiveBoard/current" component = {CurrentEbod} exact/>
              <Route path = "/executiveBoard/past" component = {PastEbod} exact/>
              <Route path = "/documents" component = {Documents} exact/>
              <Route path = "/history" component = {History} exact/>
              <Route path = "/contact" component = {Contact} exact/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
