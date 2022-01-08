import React, { useState, useEffect } from "react";
import UserInfoApi from "./UserInfoApi";



const Card = () => {
    //State
const [userApi, SetUserApi] = useState([]);
//Fetch API 
const getAllData = async () => {
    const response = await fetch('https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos');
    const result = await response.json();
    SetUserApi(result.allWaifusAndHusbandos)
    console.log(result.allWaifusAndHusbandos)
  };
  //Effect
      useEffect(() => {
      getAllData();
    }, []);

    return (
        <>
        <div className='cardsTinder'>
            <div className="cardsTinderContainer">
                <h2>Cards</h2>

                { userApi && userApi.length > 0 
                    ? userApi.map(user => (
                        <UserInfoApi 
                        key={user.name}
                        name ={user}
                        age={user.age}
                        gender={user.gender}
                        image={user.image}
                        />
                    ))
                    : null
                }
                {/* { userApi && userApi.allWaifusAndHusbandos ?
                <UserInfoApi 
                name={userApi.allWaifusAndHusbandos[0].name}
                age={userApi.allWaifusAndHusbandos[0].age}
                gender={userApi.allWaifusAndHusbandos[0].gender}
                image={userApi.allWaifusAndHusbandos[0].image}
                /> : null
                } */}
            </div>
        </div>
        </>
    )
}

export default Card
