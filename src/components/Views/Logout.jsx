import React from 'react'
import { LogoutButton } from '../../Auth0/LogOutAuth0'
// import { useAuth0, User } from "@auth0/auth0-react";


const Logout = () => {
    // const {user,isAuthenticated} = useAuth0();

    return (
        <div className='text-center'>
            <h1>Welcome </h1>
            <LogoutButton/>
        </div>
    )
}

export default Logout
