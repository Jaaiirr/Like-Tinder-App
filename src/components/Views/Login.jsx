import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h2 className='text-center'>Bienvenido</h2>
            <form className='formulario'>
            <div>
                        <label htmlFor="nombre">E-mail</label>
                        <input type="text" id='correo' name='correo' placeholder='correo@correo.com' />
                    </div>
                    <div className=''>
                        <label htmlFor="nombre">Contraseña</label>
                        <input type="password" id='contraseña' name='contraseña' placeholder='******' />
                    </div>  
            </form>
            <Link to ="/">
                    <button className='center-buttons'>Log Out</button>
            </Link>
        </div>
    )
}

export default Login
