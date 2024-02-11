import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

class Model extends Component {

    constructor() {
        super();
        this.state = {
            show : false
        }
    }

    HandleModal() {
        this.setState({show: !this.state.show});
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.HandleModal()} >Click Modal</Button>
                <Modal show={this.state.show} onHide={() => this.HandleModal()}>
                    <Modal.Header closeButton>Modal Heading</Modal.Header>
                    <Modal.Body>Modal body</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.HandleModal()}>Close</Button>
                        <Button onClick={() => this.HandleModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Model;