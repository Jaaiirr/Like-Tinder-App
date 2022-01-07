import { types } from "../types/types";
import { setUser } from "../actions/user.actions";

const initialState = {
    email: "",
    password: ""
   
}

export const userReducer = (state = initialState, action) => {
    // console.log("PAYLOAD: "+action.payload);
    switch(action.type){
        case types.setUser:
            return{
                ...state,
                email: action.payload,
                password: action.payload
            }
        default:
            return state
    }
}