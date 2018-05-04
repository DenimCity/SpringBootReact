import React, { Component } from 'react';
import axios from 'axios'
import {Loading} from '../components/styledcomponents/basicstyles'
import DoorInfo from './DoorInfo'
import styled from 'styled-components'

export default class DoorsList extends Component {
state = {
    doors:[],
    isLoading:true,
}

getAllDoors = () => {
    // const api = `https://firstapp-202814.appspot.com/`
    const api = `http://localhost:8080/` ;
    //with standard .then promises
    axios.get( api )
    .then( response => {
        if(response.status ===! 200){
            console.log('Error:,' , response.data.error)
        } else {
            const doors = response.data
            this.setState({ doors, isLoading: false })
        }
    })
    //with try catch, if you use try catch add async 
    // try {
    //     const response = await axios.get( api )
    //     const doorsData = response.data
    //     this.setState({doors:doorsData , isLoading:false})
    // } catch (error) {
    //     console.log('error',error);
    // }
  }
  
  componentWillMount() {
    this.getAllDoors()
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
                <a href="doors/create">
                <button> Create Door</button>
                </a>
            <Wrapper>
                <DoorInfo doors={doors}/>
            </Wrapper>
            </div>
        );
    }
}

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;

`