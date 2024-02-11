import React, { Component } from 'react'

class ListClass extends Component {

    constructor() {
        super();
        this.state = {
            list: [
                { name: 'devendra', phone: '111', email: 'dev@mailinator.com' },
                { name: 'anil', phone: '222', email: 'anil@mailinator.com' },
                { name: 'bala', phone: '333', email: 'bala@mailinator.com' },
            ]
        }
    }

    render() {

        return (
            <>
                <div>List map fuction</div>
                <center>
                    {
                        this.state.list.map((item) => 
                        <tr>{item.name} : {item.email}</tr>
                        )
                    }
                </center>
            </>
        )
    }
}

export default ListClass