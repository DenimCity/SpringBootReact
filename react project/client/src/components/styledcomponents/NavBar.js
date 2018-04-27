import React from 'react'
import styled from 'styled-components'


const NavBar = () => {

    return (
        <Nav>
        <TitleContainer>
        <a href="/">
        <Header> HomeDepot</Header>
        </a>
        
        </TitleContainer>
       
        </Nav>
    )
}



export default NavBar;
const Nav = styled.div`
background-color: #E66C2D ;
  height: 9vh;
  padding: 5vw;
  color: white;

`
const TitleContainer = styled.div`
display:flex;
justify-content:center;

`
const Header = styled.h1`
color:white;
`