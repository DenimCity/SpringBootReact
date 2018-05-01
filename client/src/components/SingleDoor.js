import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

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
    this.setState({door: doorInfo})
        }
    
    
    deleteDoor = async (doorId) => {
    await axios.delete(`http://localhost:8080/doors/${this.props.match.params.doorId}`)
    this.setState({redirect:true})
        }

    handleClick = async () => {
        const {name} = this.state.door
        if(window.confirm(`Are you sure you want to delete: ${name}`)){
          await swal(`You've deleted ${name}'s info from the database.`)
           this.deleteDoor()
        } else {
            await swal(`You decide not to delete: ${name}'s info`);
            this.setState({redirect: true})
        }
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
                onClick={this.handleClick}>Delete</button></div>
            </div>
        );
    }
}

