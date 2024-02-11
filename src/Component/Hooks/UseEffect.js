import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [flag, setFlag] = useState(true);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }
    
    useEffect(() => {
        console.log('efect will call on component mounted or component updated');
        const interval =  setInterval(updateTime, 1000);

        return () => {
            console.log('clean up of interval');
            clearInterval(interval);
        }
    }, [time]); // second parameter to add when only dependance change like time

    return (
        <div>
            <button onClick={() => setFlag(!flag)}>Toggle functional component</button>
            {flag ? time : ''}
            {/* <button onClick={startTimer}>Start Time</button> */}
        </div>
    )
}

export default UseEffect