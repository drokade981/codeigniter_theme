import React, { Component } from 'react'

export class Api extends Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                console.log(result.data);
                this.setState({users:result.data});
            })
        });
    }
    render() {
        return (
            <div>
                {
                this.state.users ? 
                this.state.users.map((item, i) =>
                <div>{i}--{item.first_name}</div>
                )
                : null
                }
            </div>
        )
    }
}

export default Api