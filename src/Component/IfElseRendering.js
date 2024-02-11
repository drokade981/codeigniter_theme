import React, { Component } from 'react'

class IfElseRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            name : 'Guest'
        }
    }

    changeCondition = () => {
        this.setState({isLoggedIn : !this.state.isLoggedIn});
        this.setName();
    }

    setName = () => {
        this.state.isLoggedIn ? this.setState({name : 'Dev'}) : this.setState({name : 'Guest'});
    }

    render() {

        return (
            <div>
            <div>Welcome {this.state.name}</div>
            <button onClick={ this.changeCondition}>Change Condition</button>
            </div>
        )

        let message = '';

        if (this.state.isLoggedIn) {
            message =  <div> Welcome Dev </div>
        } else {
            message =  <div>Welcom Guest</div>
        }
        return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return  
        //         <div> Welcome Devq </div>
        // } else {
        //     return 
        //         <div>Welcom Guest</div>
        // }
        // return (
        //   <div>
        //     <div>Welcome dev</div>
        //     <div>Welcome guest</div>
        //   </div>
        // )
    }
}

export default IfElseRendering