import { GET_PROPERTIES_BY_TYPE_FAILURE, GET_PROPERTIES_BY_TYPE_REQUEST, GET_PROPERTIES_BY_TYPE_SUCCESS } from "../constants/propertyyTypeConstants";

export const propertiesByTypeReducer = (state = { propertiesByType: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTIES_BY_TYPE_REQUEST:
            return {
                loading: true,
                propertiesByType: [],
            }
        case GET_PROPERTIES_BY_TYPE_SUCCESS:
            return {
                loading: false,
                propertiesByType: action.payload,
              
            }
        case GET_PROPERTIES_BY_TYPE_FAILURE: {
            return {
                loading: false,
                error:true,
            }
        }
        default:
            return state;

    }
}