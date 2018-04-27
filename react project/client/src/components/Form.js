import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'


class Form extends Component {

    state = {
        newDoor:{
            doorName:'',
            doorColor:''
        },
        redirecet:false
    }

    handleChange = (e) => {
        const attribute = e.target.name
        const value = e.target.value
        const newDoor = {...this.state.newDoor}
        newDoor[attribute] = value
        this.setState({newDoor})
      }

      handleSubmit = (e) => {
          const {newDoor} = this.state
          e.preventDefault()
          this.props.createDoor(newDoor)
          this.setState({redirecet:true})
      }

    
    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
          }
        return (
            <FormContainer>

            <FormWrapper>
            <form onSubmit={this.handleSubmit}>
            <div>
            <input type="text" 
            value={this.state.doorName}
            placeholder="Door Name"
            />
            </div>
            <div>
            <input type="text" 
            value={this.state.doorColor}
            placeholder="Door Color"
            />
            </div>
            <Submit>Sumbit</Submit>
            </form>
            </FormWrapper>
            <Link  to="/">
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