import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


class Form extends Component {

    state = {
        doors:[],
        newDoor:{
            "id":'',
            "name":''
        },
        redirect:false
    }
    
    createDoor = async () => {
    const response = await axios.post('http://localhost:8080/doors/new', this.state.newDoor)
    const newDoor =  await response.data 
    const doors = [...this.state.doors]
    doors.push(newDoor)
    this.setState({doors})
        }

    handleChange = (e) => {
    const attribute = e.target.name
    const value =  e.target.value
    const newDoor = {...this.state.newDoor}
    newDoor[attribute] = value
    this.setState({newDoor})
      }

    handleSubmit =  async (e) => {
    e.preventDefault()
    await this.createDoor()
    this.setState({redirect:true})
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

export default Form;

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