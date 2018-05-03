import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


export default class Form extends Component {

    state = {
        doors:[],
        newDoor:{
            "id":'',
            "name":''
        },
        redirect:false
    }
    
    createDoor = async () => {
    const api = 'http://localhost:8080/doors/new' ; 
    const response = await axios.post( api , this.state.newDoor)
    const newDoor = await response.data 
    console.log('post data',newDoor);
    const doors = [...this.state.doors]
    doors.push(newDoor)
    this.setState({doors,redirect:true})
        }

    handleChange = (e) => {
    const attribute = e.target.name
    const value =  e.target.value
    const newDoor = {...this.state.newDoor}
    newDoor[attribute] = value
    this.setState({newDoor})
      }

    handleSubmit =  (e) => {
    e.preventDefault()
     this.createDoor()
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/doors"/>
          }
        return (
            <FormContainer>

            <FormWrapper>
            <form onSubmit={this.handleSubmit}>
            <div>
            <input type="text" 
            onChange={this.handleChange}
            name="id"
            value={this.state.newDoor.id}
            placeholder="Door Id"
            />
            </div>
            <div>
            <input type="text" 
            onChange={this.handleChange}
            name="name"
            required
            value={this.state.newDoor.name}
            placeholder="Door Name"
            />
            </div>
            <Submit>Sumbit</Submit>
            </form>
            </FormWrapper>
            <Link  to="/doors">
            <Cancel>Cancel</Cancel>
            </Link>     
            </FormContainer>
        );
    }
}


const FormContainer = styled.div`
display:flex;
justify-content:center;
padding-top:2vh;
`

const FormWrapper = styled.div`
display:flex;
align-content:center;
`
const Submit = styled.button`
background-color:green;
`
const Cancel = styled.button`
background-color:red;
`