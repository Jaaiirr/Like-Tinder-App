import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'

const SendForm = () => {
    const [SaveForm, setSaveForm] = useState(false);
    return (
        <>
        <Formik 
        initialValues={{
            email:"",
            name: "",
            lastName: "",
            password:"",
            preferredGender:"",
            gender:"",
            age:" "
           
            
        }}
        validate={(data)=> {
            let error = {};

            //Validacion name
            if(!data.name) {
                error.name = 'Ingresa tu nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.name)){
                error.name="El nombre solo puede contener espacios y letras"
            }
            //Validacion lastName
            if(!data.lastName) {
                error.lastName= 'Ingresa tu apellido';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.lastName)){
                error.lastName="El apellido solo puede contener espacios y letras"
            }
            //Validacion email
            if(!data.email ) {
                error.email = 'Ingresa tu email';
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)){
                error.email="El email solo puede contener letras, numeros, puntos, guion bajo"
            }
           
            return error;

        }}
        onSubmit={(data, {resetForm})=> {
            //La variable data contiene los valores de mi formulario, el cual ya puede ser enviado a una BDD 
            console.log(data)
            resetForm();

            //Cambiar el estado del envio del formulario
            setSaveForm(true);
            setTimeout(()=> setSaveForm(false),3000)

            //Aqui va la peticion a la API metodo POST 
            axios.post(`https://flink-web-test.herokuapp.com/api/v1/register`, {data})
            .then(res=> {
                console.log(res);
                console.log(res.data)
            })
            // console.log("Formulario Enviado")
        }}>
            {({errors}) => (
                <Form className='formulario'>
                    {/* {console.log(errors)} */}
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <Field 
                            type="text" 
                            id='name' 
                            name='name' 
                            placeholder='Eddy' 
                            
                        />
                        <ErrorMessage name='name' component={()=>(
                            <div className='error'>{errors.name}</div>
                        )}/>
                    </div>
                    <div className=''>
                        <label htmlFor="lastName">Apellido</label>
                        <Field 
                            type="text" 
                            id='lastName' 
                            name='lastName' 
                            placeholder='Tellez' 
                           
                        />
                        <ErrorMessage name='lastName' component={()=>(
                            <div className='error'>{errors.lastName}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <Field 
                            type="text" 
                            id='email' 
                            name='email' 
                            placeholder='correo@correo.com' 
                           
                        />
                        <ErrorMessage name='email' component={()=>(
                            <div className='error'>{errors.email}</div>
                        )}/>
                    </div>
                    <div className=''>
                        <label htmlFor="password">Contraseña</label>
                        <Field 
                            type="password" 
                            id='password' 
                            name='password' 
                            placeholder='******' 
                            
                        />
                    </div>
                    <div>
                    <label htmlFor="age">Edad</label>
                        <Field 
                            type="text" 
                            id='age' 
                            name='age' 
                            placeholder='25' 
                            
                        />
                    </div>
                    <div className='column'>
                    <p>Genero</p>
                    <Field name="gender" as ="select">
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </Field>
                        <p>Preferencia</p>
                        <Field name="preferredGender" as="select">
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Ambos">Ambos</option>
                        </Field>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                        {SaveForm && <p className='exito'>Usuario registrado con exito</p>}
                    </div> 
                </Form>  
            )}
           
        </Formik>
            
        </>
    )
}

export default SendForm
