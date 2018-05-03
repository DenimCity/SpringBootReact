import React, { Component } from 'react';
import axios from 'axios'
import {Loading} from '../components/styledcomponents/basicstyles'
import DoorInfo from './DoorInfo'

export default class DoorsList extends Component {
state = {
    doors:[],
    isLoading:true,
}

getDoorData = async () => {
    // const api = `https://firstapp-202814.appspot.com/`
    const api = `http://localhost:8080/` ;
    try {
        const response = await axios.get( api )
        const doorsData = response.data
        this.setState({doors:doorsData , isLoading:false})
    } catch (error) {
        console.log('error',error);
    }
  }
  
  componentWillMount() {
      try {
        setTimeout(() => {
            this.getDoorData()
        },1)
        this.setState({isLoading:true})
      } catch (error) {
          console.log('Error: ',error);
      }
  }
  
    render() {
        const {isLoading, doors} = this.state
        if(isLoading){
            return(<Loading>
                <img
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
          alt=""/>
            </Loading>)
        }
        
        return (
            <div>
                <DoorInfo doors={doors}/>
            </div>
        );
    }
}

