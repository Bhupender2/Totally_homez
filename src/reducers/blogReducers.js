import { GET_ALL_BLOG_FAILURE, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_DETAILS_FAILURE, GET_BLOG_DETAILS_REQUEST, GET_BLOG_DETAILS_SUCCESS } from "../constants/blogConstants";

export const blogReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_REQUEST:
            return {
                loading: true,
                blogs: [],
            }
        case GET_ALL_BLOG_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
              
            }
        case GET_ALL_BLOG_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}


export const blogDetailsReducer = (state = {blogDetails: {} }, action) => {
    switch (action.type) {
        case GET_BLOG_DETAILS_REQUEST:
            return {
                loading: true,
                properties: {},
            }
        case GET_BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                blogDetails: action.payload.blogDetails,
              
            }
        case GET_BLOG_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}