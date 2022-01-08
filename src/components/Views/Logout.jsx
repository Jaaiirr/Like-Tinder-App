import React from 'react'
import {Link} from 'react-router-dom'
//Material Icons
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core'
import Card from './Card'
const Logout = () => {
    // const {user,isAuthenticated} = useAuth0();

    return (
        <>
            <div className='text-center header'>
                <Link to= "/profile">
                    <IconButton>
                        <PersonIcon fontSize='large' className='header__icon'/> 
                    </IconButton>
                </Link>

                <Link to="/logout">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
                    alt="logo" className='header__logo' />
                </Link>
                
                <Link to="/chats">
                    <IconButton>
                        <ForumIcon fontSize='large' className='header__icon'/>
                    </IconButton>
                </Link>
              
            </div>

            <Card/>

     </>
    )
}

export default Logout

