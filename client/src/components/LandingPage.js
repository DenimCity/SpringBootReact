import React, { Component } from 'react';
import {Container, Title} from '../components/styledcomponents/basicstyles'
import styled from 'styled-components'

import Modal from "react-responsive-modal";
export default class LandingPage extends Component {
   state = {
    date: new Date(),
    open:false
   }
    

   onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
   render() {
     const { open } = this.state
        return (
       <div>
          <Container>
          <h1 className="App-title">{ this.state.date.toLocaleTimeString() }</h1>
          </Container>
          <button onClick={ this.onOpenModal }>Welcome </button>
          <Modal open={open} onClose={ this.onCloseModal } little>
          <Title>Welcome To Doors Warehouse</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        <Container>
        <a href="/doors">
          <button>
            View Doors
          </button>
          </a>
        </Container>
        <ImageWrapper>
          <img  src="http://i2.cdn.turner.com/money/dam/assets/150210111130-home-depot-hiring-780x439.jpg" alt="grill"/>
        </ImageWrapper>
       </div>
        );
    }
}

const ImageWrapper = styled.div`
width: 100%;
height: 10vh
padding-top: 2vh;
img {
  width:100%;
}
`


