import React, { Component } from 'react'

export default class ErrorBound extends Component {
    constructor() {
        super();
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError() {
        return { error: true }
    }
    render() {
        return (
            <div>
                {
                    this.state.error ? <h2>Custom page for error handling</h2> :
                    this.props.children
                }
            </div>
        )
    }
}
