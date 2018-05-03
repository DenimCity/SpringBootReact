import React, {Component} from 'react';
import { Table, Column, ColumnTitle, Holder} from '../components/styledcomponents/tableStyles'
import { Link} from 'react-router-dom'

export default class DoorInfo extends Component {
  
    render(){
        return (
        
            <div>
                <h1>Doors List</h1>
                <Table>
                    <Column>
                    <ColumnTitle>Door Name</ColumnTitle>
                {
                    this.props.doors.map(door => {
                         return <Holder> <h4>{door.name}</h4></Holder>
                    })
                }
                </Column>
                <Column>
                <ColumnTitle>Door Id</ColumnTitle>
                {
                    this.props.doors.map(door => {
                         return <Holder> <h4>{door.id}</h4>
                         </Holder>
                    })
                }
                </Column>
                <Column>
                <ColumnTitle> Link </ColumnTitle>
                {
                    this.props.doors.map(door => {
                        return (
                            <Holder>
                                <Link to={`/doors/${door.id}`}> <h6>Click Me</h6></Link>
                            </Holder>
                        )
                    })
                }
                </Column>
                </Table>
              
            </div>
        );
    };
    }
    
   
    

