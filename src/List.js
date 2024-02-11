import React from 'react'
import { Link } from 'react-router-dom';

function List() {
    return (
        <>           
            <Link to="/list-class">Class &nbsp;</Link>
            <br />
            <Link to="/list-function">function &nbsp;</Link>
        </>
    )
}

export default List