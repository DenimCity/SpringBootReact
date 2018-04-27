import React, { Component } from 'react';
import {Container} from '../components/styledcomponents/basicstyles'

class Doors extends Component {


    render() {
        const doorList = this.props.doorData.map((door,i ) => {
            return (
                <div key={i} > 
                    <h6 id={door.id} > Word ID:{door.id} WOTD: {door.word}</h6>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h2>Doors List</h2>
                    <a href="/doors/create">
                <button>Create Door</button></a>
                </div>
                <Container>
                    <div>
                        {doorList}
                    </div>
                </Container>
            </div>
        );
    }
}
export default Doors;