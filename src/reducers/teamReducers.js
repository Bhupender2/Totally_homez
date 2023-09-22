import { GET_ALL_TEAM_FAILURE, GET_ALL_TEAM_REQUEST, GET_ALL_TEAM_SUCCESS, GET_TEAM_DETAILS_FAILURE, GET_TEAM_DETAILS_REQUEST, GET_TEAM_DETAILS_SUCCESS } from "../constants/teamConstants";

export const teamReducer = (state = { team: [] }, action) => {
    switch (action.type) {
        case GET_ALL_TEAM_REQUEST:
            return {
                loading: true,
                team: [],
            }
        case GET_ALL_TEAM_SUCCESS:
            return {
                loading: false,
                team: action.payload.data,
              
            }
        case GET_ALL_TEAM_FAILURE: {
            return {
                loading: false,
                error:true,
            }
        }
        default:
            return state;

    }
}


export const teamDetailsReducer = (state = { teamDetails: {} }, action) => {
    switch (action.type) {
        case GET_TEAM_DETAILS_REQUEST:
            return {
                loading: true,
                teamDetails: {},
            }
        case GET_TEAM_DETAILS_SUCCESS:
            return {
                loading: false,
                teamDetails: action.payload.data,
              
            }
        case GET_TEAM_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}