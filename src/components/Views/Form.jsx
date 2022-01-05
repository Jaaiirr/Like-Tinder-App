import React from 'react'

const Form = () => {
    return (
        <>
            <form className='formulario'>
                    <div className=''>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id='name' name='name' placeholder='Eddy' />
                    </div>
                    <div className=''>
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" id='lastName' name='lastName' placeholder='Tellez' />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id='email' name='email' placeholder='correo@correo.com' />
                    </div>
                    <div className=''>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id='password' name='password' placeholder='******' />
                    </div>
                    <div>
                    <label htmlFor="age">Edad</label>
                        <input type="text" id='age' name='age' placeholder='25' />
                    </div>
                    <div className='column'>
                    <p>Genero</p>
                        <select name="gender" id="gender">
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                        <p>Preferencia</p>
                        <select name="preferredGender" id="preferredGender"> 
                        
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Ambos">Ambos</option>
                        </select>
                       
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
            </form>  
        </>
    )
}

export default Form
