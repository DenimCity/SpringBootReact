import React from 'react'
import styled from 'styled-components'


const NavBar = () => {
    
    return (
        <Nav>
            <a href="/">
             <TitleContainer>
            </TitleContainer>
            </a>
        </Nav>
    )
}



export default NavBar;
const Nav = styled.div`
background-image: url(http://www.priyapatel.me/wp-content/uploads/2016/09/Home-Depot-Banner-Image.png);
background-repeat: round;
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