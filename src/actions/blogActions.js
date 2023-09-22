import axios from "axios";
import { API_URL } from "../constants/config";
import { GET_ALL_BLOG_FAILURE, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_DETAILS_FAILURE, GET_BLOG_DETAILS_REQUEST, GET_BLOG_DETAILS_SUCCESS } from "../constants/blogConstants";

export const getBlogsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_BLOG_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/blogs`);

  
      dispatch({
        type: GET_ALL_BLOG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BLOG_FAILURE,
      });
    }
  };


  export const getBlogDetailsApi = (id) => async (dispatch) => {
    console.log(typeof(id))
    try {
      dispatch({ type: GET_BLOG_DETAILS_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/blogs/{id}`);

      console.log("action",data)
  
      dispatch({
        type:GET_BLOG_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_BLOG_DETAILS_FAILURE,
      });
    }
  };