import React, {Component} from 'react';

import { Link} from 'react-router-dom'
// import { Table } from 'semantic-ui-react'

export default class DoorInfo extends Component {
  
    render(){
        return (
            <div>
                <h1>Doors List</h1>

                    <table width="100%">
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
                                
                </table>
                  
            </div>
            
        )
    
    }
    
   }
    

   