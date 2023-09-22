import { CATEGORY_PROPERTIES_APARTMENT_FAILURE, CATEGORY_PROPERTIES_APARTMENT_FAILURE_RENT, CATEGORY_PROPERTIES_APARTMENT_REQUEST, CATEGORY_PROPERTIES_APARTMENT_REQUEST_RENT, CATEGORY_PROPERTIES_APARTMENT_SUCCESS, CATEGORY_PROPERTIES_APARTMENT_SUCCESS_RENT, CATEGORY_PROPERTIES_FAILURE, CATEGORY_PROPERTIES_FAILURE_RENT, CATEGORY_PROPERTIES_PENTHOUSE_FAILURE, CATEGORY_PROPERTIES_PENTHOUSE_FAILURE_RENT, CATEGORY_PROPERTIES_PENTHOUSE_REQUEST, CATEGORY_PROPERTIES_PENTHOUSE_REQUEST_RENT, CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS, CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS_RENT, CATEGORY_PROPERTIES_REQUEST, CATEGORY_PROPERTIES_REQUEST_RENT, CATEGORY_PROPERTIES_SUCCESS, CATEGORY_PROPERTIES_SUCCESS_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE, CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST, CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS, CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS_RENT } from "../constants/categoryConstants";

export const catgoryReducer = (state = { categoryProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_REQUEST:
            return {
                loading: true,
                catgoryProperties: [],
            }
        case CATEGORY_PROPERTIES_SUCCESS:
            return {
                loading: false,
                categoryProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_FAILURE: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}




export const catgoryPropertiesRentReducer = (state = { categoryRentProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_REQUEST_RENT:
            return {
                loading: true,
                categoryRentProperties: [],
            }
        case CATEGORY_PROPERTIES_SUCCESS_RENT:
            return {
                loading: false,
                categoryRentProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_FAILURE_RENT: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}


export const townhouseCategoryReducer = (state = { townhouseCategoryProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST:
            return {
                loading: true,
                townhouseCategoryProperties: [],
            }
        case CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS:
            return {
                loading: false,
                townhouseCategoryProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}

export const townhouseCategoryRentReducer = (state = { townhouseCategoryRentProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST_RENT:
            return {
                loading: true,
                townhouseCategoryRentProperties: [],
            }
        case CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS_RENT:
            return {
                loading: false,
                townhouseCategoryRentProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE_RENT: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}


export const apartmentCategoryReducer = (state = { apartmentCategoryProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_APARTMENT_REQUEST:
            return {
                loading: true,
                apartmentCategoryProperties: [],
            }
        case CATEGORY_PROPERTIES_APARTMENT_SUCCESS:
            return {
                loading: false,
                apartmentCategoryProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_APARTMENT_FAILURE: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}



export const apartmentCategoryRentReducer = (state = { apartmentCategoryRentProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_APARTMENT_REQUEST_RENT:
            return {
                loading: true,
                apartmentCategoryRentProperties: [],
            }
        case CATEGORY_PROPERTIES_APARTMENT_SUCCESS_RENT:
            return {
                loading: false,
                apartmentCategoryRentProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_APARTMENT_FAILURE_RENT: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}



export const penthouseCategoryReducer = (state = { penthouseCategoryProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_PENTHOUSE_REQUEST:
            return {
                loading: true,
                penthouseCategoryProperties: [],
            }
        case CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS:
            return {
                loading: false,
                penthouseCategoryProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_PENTHOUSE_FAILURE: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}



export const penthouseCategoryRentReducer = (state = { penthouseCategoryRentProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_PENTHOUSE_REQUEST_RENT:
            return {
                loading: true,
                penthouseCategoryRentProperties: [],
            }
        case CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS_RENT:
            return {
                loading: false,
                penthouseCategoryRentProperties: action.payload,
              
            }
        case CATEGORY_PROPERTIES_PENTHOUSE_FAILURE_RENT: {
            return {
                loading: false,
                error: true,
            }
        }
        default:
            return state;

    }
}