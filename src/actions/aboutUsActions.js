import axios from "axios";
import { GET_ABOUT_US_FAILURE, GET_ABOUT_US_REQUEST, GET_ABOUT_US_SUCCESS } from "../constants/aboutConstants";

export const getAboutUsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ABOUT_US_REQUEST});
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/abouts`);

  
      dispatch({
        type: GET_ABOUT_US_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ABOUT_US_FAILURE,
      });
    }
  };
