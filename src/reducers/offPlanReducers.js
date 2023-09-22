
import { GET_OFF_PLAN_FAIL, GET_OFF_PLAN_REQUEST, GET_OFF_PLAN_SUCCESS } from "../constants/offPlanConstants";



export const getOffPlanReducer = (state = { offPlan: [] }, action) => {
    switch (action.type) {
        case GET_OFF_PLAN_REQUEST:
            return {
                loading: true,
                offPlan: [],
            }
        case GET_OFF_PLAN_SUCCESS:
            return {
                loading: false,
                offPlan: action.payload,
              
            }
        case GET_OFF_PLAN_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}