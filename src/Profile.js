import React from 'react';
export default function profile(prop){
    return(
        <div>
            <h4>Hello from profile {prop.text.name}</h4>
            <h5>{prop.data}</h5>
        </div>
    )
}