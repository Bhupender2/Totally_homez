import axios from "axios";
import { GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS } from "../constants/contactConstants";
import { GET_LIST_WITH_US_FAILURE, GET_LIST_WITH_US_REQUEST, GET_LIST_WITH_US_SUCCESS } from "../constants/listWithUsConstants";

export const getListWithUsUsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_WITH_US_REQUEST});
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/list_with_us`);

  
      dispatch({
        type: GET_LIST_WITH_US_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_LIST_WITH_US_FAILURE
      });
    }
  };
