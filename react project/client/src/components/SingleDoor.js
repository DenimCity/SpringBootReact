import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
// import styled from 'styled-components'

export default class SingleDoor extends Component {

        state = {
            door:{
                id:"",
                name:""
            },
            redirect:false
        }
        

    getDoor = async (doorId) => {
    const response = await axios.get(`http://localhost:8080/doors/${this.props.match.params.doorId}`, this.state.door)
    const doorInfo = response.data
    console.log('response data', doorInfo)
    this.setState({door: doorInfo})
        }
    
    
    deleteDoor = async (doorId) => {
    console.log('door that will be deleted ',this.props.match.params);
    await axios.delete(`http://localhost:8080/doors/${this.props.match.params.doorId}`)
    // this.setState({redirect:true})
        }

    componentWillMount(){
        this.getDoor()
    }
        


    render() {
        const {door,redirect} = this.state
        if(redirect){
            return(<Redirect to="/doors"/>)
        }
        return (
            <div>
                <div>
                <h4>the current door is: {door.name}</h4>
                
                </div>
                <div>
                <Link to="/doors"> 
                <button> Back </button>
                </Link>
                <button
                onClick={this.deleteDoor}>Delete</button></div>
            </div>
        );
    }
}

