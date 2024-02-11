import React from 'react';
export default class ProfileClass extends React.Component
{
    render()
    {
        return(
            <>
                <h3>Hello {this.props.data}</h3>
            </>
        )
    }
}