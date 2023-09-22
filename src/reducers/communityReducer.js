import { GET_COMMUNITY_GUIDELINES_FAILURE, GET_COMMUNITY_GUIDELINES__SUCCESS, GET_COMMUNITY_GUIDELINES__REQUEST } from "../constants/communityConstants";


export const communityReducer = (state={community:[]}, action) =>{

switch(action.type){
    case GET_COMMUNITY_GUIDELINES__REQUEST:
        return{
            loading: true,
            community:[],
        }

        case GET_COMMUNITY_GUIDELINES__SUCCESS:
            return{
                loading: false,
                community: action.payload,
            }
        case GET_COMMUNITY_GUIDELINES_FAILURE:{
            return{
                loading: true,
                error: action.payload,
            }
        }
        default:
            return state;
}

}
