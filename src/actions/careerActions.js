import axios from "axios";
import { GET_CAREER_DETAILS_FAILURE, GET_CAREER_DETAILS_REQUEST, GET_CAREER_DETAILS_SUCCESS } from "../constants/careerConstants";

export const getCarrerApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CAREER_DETAILS_REQUEST});
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/careers`);

  
      dispatch({
        type: GET_CAREER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CAREER_DETAILS_FAILURE
      });
    }
  };
