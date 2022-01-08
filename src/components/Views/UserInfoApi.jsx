import React from 'react'

const UserInfoApi = ({name, age, gender, image}) => {
    console.log(UserInfoApi)
    return (
        <div>
           <p>{image}</p>
           <p>{name}</p>
           <p>{gender}</p>
           <p>{age}</p>

        </div>
        
    )
}

export default UserInfoApi
