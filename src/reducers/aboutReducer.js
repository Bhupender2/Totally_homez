import { GET_ABOUT_US_FAILURE, GET_ABOUT_US_REQUEST, GET_ABOUT_US_SUCCESS } from "../constants/aboutConstants";

export const aboutReducer = (state = { about: [] }, action) => {
    switch (action.type) {
        case GET_ABOUT_US_REQUEST:
            return {
                loading: true,
                about: [],
            }
        case GET_ABOUT_US_SUCCESS:
            return {
                loading: false,
                about: action.payload,
              
            }
        case GET_ABOUT_US_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
