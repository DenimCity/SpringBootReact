import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import {Loading} from '../components/styledcomponents/basicstyles'
import styled from 'styled-components'

export default class SingleDoor extends Component {

        state = {
            door:{
                id:"",
                name:""
            },
            redirect:false,
            isLoading:true,
        }
        

    getDoor = (doorId) => {
        const api = `http://localhost:8080/doors`
        const payload = this.state.door
        axios.get( `${api}/${this.props.match.params.doorId}`, payload )
        .then( response => {
            if(response.status ===! 200){
                console.log('Error:,' , response.data.error);
            } else {
                const door = response.data
                this.setState({door , isLoading: false })
            }
                    } )
                
        }
        
        //try catch, if you use try catch add async 
        // try {
        //     const response = await axios.get(`${api}/${this.props.match.params.doorId}`, payload )
        //     const doorInfo = await response.data
        //     this.setState({door: doorInfo, isLoading: false})
        // } catch (error) {
        //     console.log("Error: ", error);
        //     }
        // }
    
    
    deleteDoor =  (doorId) => {
        const {name} = this.state.door
        if(window.confirm(`Are you sure you want to delete: ${name}`)){
        axios.delete(`http://localhost:8080/doors/${this.props.match.params.doorId}`)
            this.setState({redirect: true})
         } else {
            this.setState({redirect: true})
         }
        }

    handleClick = () => {
        this.deleteDoor()   
    }

    componentWillMount(){
            this.getDoor()
    }
        
    render() {
        const { door,redirect, isLoading } = this.state
        const { handleClick } = this

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
            <Wrapper>
                <div>
                <h4>Selected Door</h4>
                <h3>{ door.name }</h3>
                </div>
                <div>
                <Link to="/doors"> <BackBtn> Back </BackBtn> </Link>
                <DeleteBtn onClick={ handleClick }>Delete</DeleteBtn>
                </div>
                <div>
                </div>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
justify-content:center;
display:flex;
flex-direction: column;
align-items: center;
`
const BackBtn = styled.button`
color: #FFFFFF;
background-color: #E66C2D;
cursor:pointer;

`
const DeleteBtn = styled.button`
color: #FFFFFF;
background-color: red;
cursor:pointer;

`