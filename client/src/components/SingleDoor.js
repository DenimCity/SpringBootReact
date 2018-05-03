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
    const response = await axios.get(`http://localhost:8080/doors/${this.props.match.params.doorId}`, this.state.door)
    const doorInfo = await response.data
    console.clear()
    console.log('Data', doorInfo);
    this.setState({door: doorInfo, isLoading: false})
        }
    
    
    deleteDoor = async (doorId) => {
    await axios.delete(`http://localhost:8080/doors/${this.props.match.params.doorId}`)
        }

    handleClick = async () => {
        const {name} = this.state.door
        if(window.confirm(`Are you sure you want to delete: ${name}`)){
            swal(`You've deleted ${name}'s info from the database.`)
           this.deleteDoor()
        } else {
          swal(`You decide not to delete: ${name}'s info`);
            this.setState({redirect: true})
        }
    }

    componentWillMount(){
        setTimeout(()=> {
            this.getDoor()
        },1)
    }
        
    render() {
        if(this.state.isLoading){
            return (
                <Loading>
                    <img
          src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
          alt=""/>
            </Loading>
            )
        }
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

