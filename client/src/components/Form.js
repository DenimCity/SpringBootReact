import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import swal from 'sweetalert'
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
    
    addDoor = () => {
        const api = 'http://localhost:8080/doors/new' ; 
        const payload = this.state.newDoor
        //with standard promises 
        axios.post( api ,  payload )
        .then( response => {
            if(response.status ===! 200){
                console.log('Error:,' , response.data.error);
            } else {
                const newDoor = response.data 
                console.log(newDoor);
                window.alert(`You've create ${newDoor.name}`)
                
                this.setState({ redirect: true , newDoor , })
            }
        })
        
        //try catch, if you use try catch add async 
        // try {
        //     const response = await axios.post( api , payload )
        //     const newDoor =  await response.data 
        //     const doors = await [...this.state.doors]
        //     doors.push(newDoor)
        //     this.setState({doors})
        // } catch (error) {
        //     console.log("Error",error);
        // }
        }

    handleChange = (e) => {
    const attribute = e.target.name
    const value =  e.target.value
    const newDoor = {...this.state.newDoor}
    newDoor[attribute] = value
    this.setState({newDoor})
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addDoor()
    }


    render() {
        const {redirect, newDoor} = this.state
        if (redirect) {
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
            value={newDoor.id}
            placeholder="Door Id"
            />
            </div>
            <div>
            <input type="text" 
            onChange={this.handleChange}
            name="name"
            required
            value={newDoor.name}
            placeholder="Door Name"
            />
            </div>
            <Submit>Sumbit</Submit>
            <Link  to="/doors"> <Cancel>Cancel</Cancel> </Link> 
            </form>
            </FormWrapper>
                
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