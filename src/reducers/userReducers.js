import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/userConstants";

export const userReducer = (state = {user:{name:'rohit rai',isLoggedIn:true}}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                loading:true,
                isAuthenticated:false
            }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                }
                case LOGIN_FAILURE:{
                    return {
                        ...state,
                        loading:false,
                        isAuthenticated:false,
                        user:null,
                        error:action.payload
                    }
                }
                default:
                    return state;
            
    }
}