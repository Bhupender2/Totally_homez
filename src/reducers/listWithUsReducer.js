import { GET_LIST_WITH_US_FAILURE, GET_LIST_WITH_US_REQUEST, GET_LIST_WITH_US_SUCCESS } from "../constants/listWithUsConstants";

export const listWithUsReducer = (state = { listWithUs: [] }, action) => {
    switch (action.type) {
        case GET_LIST_WITH_US_REQUEST:
            return {
                loading: true,
                listWithUs: [],
            }
        case GET_LIST_WITH_US_SUCCESS:
            return {
                loading: false,
                listWithUs: action.payload,
              
            }
        case GET_LIST_WITH_US_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
