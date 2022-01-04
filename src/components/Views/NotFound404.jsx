import React from 'react'
import { Link } from "react-router-dom";


const NotFound404 = () => {
    return (
        <>
            <div className='text-center'>
                <h3>Error 404</h3>
                <p>Not Found</p>

            </div>
            <Link to ="/">
                <button className='center-buttons'>Go Home</button>
            </Link>
        </>
    )
}

export default NotFound404
