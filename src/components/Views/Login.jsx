import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h2>Desde login</h2>
            <Link to ="/">
                    <button className='center-buttons'>Log Out</button>
            </Link>
        </div>
    )
}

export default Login
