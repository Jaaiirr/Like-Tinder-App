import React from 'react'
import { Link } from "react-router-dom";
import Form from './Form';


const Register = () => {
    return (
        <div>
            <h2>Registro de Usuario</h2>
            <p>Bienvenido!</p>
            <Form/>

            <Link to ="/">
                    <button className='center-buttons'>go Home</button>
                </Link>
        </div>
    )
}

export default Register
