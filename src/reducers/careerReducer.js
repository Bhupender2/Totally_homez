import { GET_CAREER_DETAILS_FAILURE, GET_CAREER_DETAILS_REQUEST, GET_CAREER_DETAILS_SUCCESS } from "../constants/careerConstants";

export const careerReducer = (state = { career: [] }, action) => {
    switch (action.type) {
        case GET_CAREER_DETAILS_REQUEST:
            return {
                loading: true,
                career: [],
            }
        case GET_CAREER_DETAILS_SUCCESS:
            return {
                loading: false,
                career: action.payload,
              
            }
        case GET_CAREER_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
