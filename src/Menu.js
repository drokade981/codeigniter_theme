import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Rout from './Rout';

export class Menu extends Component {
    render() {

        return (
            <div>
                <Nav className="justify-content-end" >                
                
                </Nav>
                <Rout />
            </div>
        )
    }
}

export default Menu