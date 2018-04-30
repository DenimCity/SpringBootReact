import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link} from 'react-router-dom'


export default class DoorsList extends Component {
state = {
    doors:[],
}



getDoorData = async () => {
    const response = await axios.get(`http://localhost:8080/`)
    const doorData = response.data
    console.log('response',doorData);
    this.setState({doors: doorData})
    
  }
  
//   deleteDoor = async () => {
//     console.log('hit the delete axios call');
//     axios.delete
// }

  componentWillMount() {
    this.getDoorData()
      
  }
  
    render() {
        const doorList = this.state.doors.map((door,i ) => {
            return (
                <div key={i} id={door.id} > 
                    <Link to={`/doors/${door.id}`}> {door.name}</Link>
                    {/* <button>x</button> */}
                </div>
            )
        })
    
        return (
            <div>
                <div>
                    <h2>Doors List</h2>
                <Link to="/">
                    <button>Home</button>
                    </Link>
                    <Link to="/doors/create">
                <button>Create Door</button></Link>
                </div>
                <Grid>
                        {doorList}
                </Grid>
            </div>
        );
    }
}


const Grid = styled.div`
display:grid;
grid-template-columns: 20% 20% 20% 20% 20%;
`