import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../src/components/styledcomponents/NavBar'
import LandingPage from '../src/components/LandingPage'
import Doors from '../src/components/Doors'
import Form from '../src/components/Form'
import axios from 'axios'

export default class App extends Component {
  state = {
    doors:[]
  }


getDoorData = async () => {
const doorData = 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
await axios.get(doorData).then(response => { 
  console.log('response',response.request.response)
 
    const info = response.data
    this.setState({doors: info})
})
}

createDoor = async () => {
  const {newDoor} = this.state
  try {
      await axios.post('', newDoor)
      .then(response => {
          if (response.data.error) {
              console.log("error with postiong to GKE")
          } else {
              const newDoor = response.data
             const doors = [...this.state.doors]
             doors.push(newDoor)
              this.state({doors})
          }
      })
  } catch (error) {
      
  }
}

deleteDoor = async (doorId) => {
  axios.delete('')
  
}

componentDidMount () {
this.getDoorData()
}
  
  
  render() {
    
    const DataOfDoors = () => (<Doors doorData={this.state.doors} />)
    const CreateDoor = () => (<Form createDoor={this.createDoor} doors={this.state.doors}/>)
    

    return (
      <div>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/doors" component={DataOfDoors}/>
            <Route exact path="/doors/create" component={CreateDoor}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}



