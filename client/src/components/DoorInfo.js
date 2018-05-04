import React, {Component} from 'react';
// import styled from 'styled-components'
// import { Link} from 'react-router-dom'

export default class DoorInfo extends Component {
  
    render(){
        return (
            <div>
                <h1>Doors List</h1>

                    <table width="100%">
                    <tbody>
                        <tr>
                            <th>Name </th>
                            <th>ID</th> 
                            <th>Link</th>
                        </tr>
                        <tr>
                            <td>
                            {this.props.doors.map((door, index) => {
                            return ( <h5 key={index}> {door.name}</h5>  )})} 
                            </td>

                            <td>
                            {this.props.doors.map((door, i ) => {
                            return ( <h5 key={i}> {door.id} </h5>  )})}
                            </td> 

                            <td>  
                            {this.props.doors.map((door, i) => {
                            return ( <h5 key={i}> <a href={`/doors/${door.id}`}> Click Me</a></h5>  )})}
                            </td>
                        </tr>
                    </tbody>     
                </table>
                  
            </div>
            
        )
    
    }
    
   }
    




//  const Table = styled.div `
//    border: 1px black solid;
// padding: 5px;
//     display: flex;
//     color: black;
//     justify-content: center;
//     background-color: lightgray;
//     color: black;
//     width: 100%;
    
// `
//  const Column = styled.div `
//     text-align: left;
// `
//  const ColumnTitle = styled.div `
//     padding-bottom: 1.5vh;
//     padding-right: 1.2vw;
//     text-align:left;
    
// `
// const LinkWrapper = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// ` 
