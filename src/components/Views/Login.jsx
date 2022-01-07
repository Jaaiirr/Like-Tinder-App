import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'


const Login = () => {
          const handleClick = () => {
              setTimeout(() => {
                  window.location.href = "http://localhost:3000/logout"
               }, 2000);
            
          }
    return (
        <>
        
            <h2 className='text-center'>Bienvenido</h2>
            {/* Opcion de Login con Auth0 */}
            {/* <LoginButton /> */}
            {/* Opcion de registro con Formik */}
            <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validate={(data) => {
                let error = {};

                //Validacion email
                if(!data.email ) {
                    error.email = 'Ingresa tu email';
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)){
                    error.email="El email solo puede contener letras, numeros, puntos, guion bajo"
                }
                return error;
            }}
            onSubmit={(data, {resetForm})=> {
                //Variable data contiene los valores de mi login
                console.log(data)
                resetForm();

                //Metodo POST
                axios({
                    method: 'POST',
                    url: 'https://flink-web-test.herokuapp.com/api/v1/login',
                    data: data,
                }).then(res => {
                    console.log(res.data)
                    // Dispatch aqui
                    // dispatch(setUser(data));

                })
            }}>
                {({errors})=> (
                    <Form className='formulario'>
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

                        <div>
                            <label htmlFor="password">Contraseña</label>
                                <Field 
                                    type="password" 
                                    id='password' 
                                    name='password' 
                                    placeholder='******' 
                                />
                        </div>
                        <div>
                        <button type="submit" onClick={handleClick}>Start</button>
                        {/* {SaveForm && <p className='exito'>Usuario registrado con exito</p>} */}
                        
                    </div>
                    </Form>
                )}
               
            </Formik>
        </>
    )
}

export default Login
