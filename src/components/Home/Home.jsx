import React from 'react'
import { Link } from "react-router-dom";
// Styles



const Home = () => {
    return (
        <div>
            <h2 className='text-center'>Like Tinder</h2>
            <div className='center-buttons'>
                <Link to ="/Login">
                    <button className='center-buttons'>Login</button>
                </Link>
                <Link to ="/Register">
                    <button className='center-buttons'>Register</button>
                </Link>

            </div>
        </div>
    )
}

export default Home
