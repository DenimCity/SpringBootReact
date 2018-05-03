import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import {Loading} from '../components/styledcomponents/basicstyles'

export default class SingleDoor extends Component {

        state = {
            door:{
                id:"",
                name:""
            },
            redirect:false,
            isLoading:true,
        }
        

    getDoor = async (doorId) => {
        try {
            const response = await axios.get(`http://localhost:8080/doors/${this.props.match.params.doorId}`, this.state.door)
            const doorInfo = await response.data
            this.setState({door: doorInfo, isLoading: false})
        } catch (error) {
            console.log("Error: ", error);
            }
        }
    
    
    deleteDoor = async (doorId) => {
        try {
            await axios.delete(`http://localhost:8080/doors/${this.props.match.params.doorId}`)
        } catch (error) {
            console.log("Error: ", error);
            }
        }

    handleClick = async () => {
        const {name} = this.state.door
        if(window.confirm(`Are you sure you want to delete: ${name}`)){
          swal(`You've deleted ${name}'s info from the database.`)
           await this.deleteDoor()
           this.setState({redirect: true})
        } else {
           swal(`You decide not to delete: ${name}'s from database`);
           this.setState({redirect: true})
        }
        
    }

    componentWillMount(){
        setTimeout(()=> {
            this.getDoor()
        },1)
    }
        
    render() {
        const {door,redirect, isLoading} = this.state
        if(isLoading){
            return (
                <Loading>
                    <img
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
          alt="loading"/>
            </Loading>
            )
        }
        
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

