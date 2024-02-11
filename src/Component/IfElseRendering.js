import React, { Component } from 'react'

class IfElseRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        return (
            this.state.isLoggedIn ?
            <div>Welcome Dev</div> :
            <div>Welcome guest</div>
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