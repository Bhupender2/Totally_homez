import axios from "axios";
import { GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS } from "../constants/contactConstants";

export const getContactUsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTACT_REQUEST});
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/contacts`);


console.log(data)
      dispatch({
        type: GET_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTACT_FAILURE
      });
    }
  };
