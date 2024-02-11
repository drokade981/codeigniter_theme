import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [flag, setFlag] = useState(true);
    const [time, setTime] = useState(new Date().toString());
    useEffect(() => {
        console.log('efect')
    })

    return (
        <div>
            <button onClick={() => setFlag(!flag)}>Toggle functional component</button>
            {flag ? {time} : ''}
        </div>
    )
}

export default UseEffect