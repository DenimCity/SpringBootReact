import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../src/components/styledcomponents/NavBar'
import LandingPage from '../src/components/LandingPage'
import DoorsList from '../src/components/DoorsList'
import SingleDoor from '../src/components/SingleDoor'
import Form from '../src/components/Form'

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/doors" component={DoorsList}/>
            <Route exact path="/doors/create" component={Form}/>
            <Route exact path="/doors/:doorId" component={SingleDoor}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}