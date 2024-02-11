import React from 'react'
import Profile from '../Profile'
import ProfileClass from '../ProfileClass';

function TestComponent() {
    return (
        <div>
            <Profile text={{name:'peter'}} data='Profile Data'/>
            <ProfileClass text={{name:'peter'}} data='Profile class Data'/>
        </div>
    )
}
export default TestComponent
