import { GET_ALL_CAROUSELS_FAILURE, GET_ALL_CAROUSELS_REQUEST, GET_ALL_CAROUSELS_SUCCESS, GET_CAROUSEL_DETAILS_FAILURE, GET_CAROUSEL_DETAILS_REQUEST, GET_CAROUSEL_DETAILS_SUCCESS } from "../constants/carouselConstants";

export const carouselReducer = (state = { carousels: [] }, action) => {
    switch (action.type) {
        case GET_ALL_CAROUSELS_REQUEST:
            return {
                loading: true,
                carousels: [],
            }
        case GET_ALL_CAROUSELS_SUCCESS:
            return {
                loading: false,
                carousels: action.payload.data,
              
            }
        case GET_ALL_CAROUSELS_FAILURE: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}


export const carouselDetailsReducer = (state = { carouselDetails: {} }, action) => {
    switch (action.type) {
        case GET_CAROUSEL_DETAILS_REQUEST:
            return {
                loading: true,
                carouselDetails: {},
            }
        case GET_CAROUSEL_DETAILS_SUCCESS:
            return {
                loading: false,
                carouselDetails: action.payload.data,
              
            }
        case GET_CAROUSEL_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}