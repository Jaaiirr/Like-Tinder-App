import React from 'react'

const Form = () => {
    return (
        <>
            <form className='formulario'>
                    <div className=''>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id='nombre' name='nombre' placeholder='Eddy Tellez' />
                    </div>
                    <div>
                        <label htmlFor="nombre">E-mail</label>
                        <input type="text" id='correo' name='correo' placeholder='correo@correo.com' />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
            </form>  
        </>
    )
}

export default Form
