import axios from "axios";
import { GET_OFF_PLAN_FAIL, GET_OFF_PLAN_REQUEST, GET_OFF_PLAN_SUCCESS } from "../constants/offPlanConstants"

export const getOffPlanApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_OFF_PLAN_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/offplans`);

  
      dispatch({
        type: GET_OFF_PLAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_OFF_PLAN_FAIL,
      });
    }
  };