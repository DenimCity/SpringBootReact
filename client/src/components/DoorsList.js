import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link} from 'react-router-dom'


export default class DoorsList extends Component {
state = {
    doors:[],
}

getDoorData = async () => {
    const api = `http://localhost:8080/` ;
    const response = await axios.get( api )
    const doorData = response.data
    this.setState({doors: doorData})
  }
  
  componentWillMount() {
    this.getDoorData()
      
  }
  
    render() {
        const doorList = this.state.doors.map((door,i ) => {
            return (
                <div key={i} id={door.id} > 
                    <Link to={`/doors/${door.id}`}> {door.name}</Link>
                </div>
            )
        })
    
        return (
            <Wrapper>
                <div>
                    <h2>Doors List</h2>
                    <Link to="/doors/create">
                <button>Create Door</button></Link>
                </div>
                <Grid>
                        {doorList}
                </Grid>
            </Wrapper>
        );
    }
}


const Grid = styled.div`
display:grid;
grid-template-columns: 50% 50%;
`
const Wrapper = styled.div`
display:grid;
grid-template-columns: 30% auto;
`