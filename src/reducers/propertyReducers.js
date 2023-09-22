import { GET_ALL_PROPERTIES_FAILURE, GET_ALL_PROPERTIES_REQUEST, GET_ALL_PROPERTIES_SUCCESS, GET_PROPERTY_DETAILS_FAILURE, GET_PROPERTY_DETAILS_REQUEST, GET_PROPERTY_DETAILS_SUCCESS } from "../constants/propertyConstants";

export const propertyReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PROPERTIES_REQUEST:
            return {
                loading: true,
                properties: [],
            }
        case GET_ALL_PROPERTIES_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
              
            }
        case GET_ALL_PROPERTIES_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}


export const propertyDetailsReducer = (state = { propertyDetails: {} }, action) => {
    switch (action.type) {
        case GET_PROPERTY_DETAILS_REQUEST:
            return {
                loading: true,
                properties: {},
            }
        case GET_PROPERTY_DETAILS_SUCCESS:
            return {
                loading: false,
                propertyDetails: action.payload,
              
            }
        case GET_PROPERTY_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}