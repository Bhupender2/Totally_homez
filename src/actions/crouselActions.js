import axios from "axios";
import { GET_ALL_CAROUSELS_FAILURE, GET_ALL_CAROUSELS_REQUEST, GET_ALL_CAROUSELS_SUCCESS, GET_CAROUSEL_DETAILS_FAILURE, GET_CAROUSEL_DETAILS_REQUEST, GET_CAROUSEL_DETAILS_SUCCESS } from "../constants/carouselConstants";

export const getCarouselsApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_CAROUSELS_REQUEST });



            const  {data} = await axios.get(`https://totallyhomerealestate.com/API/api/carousels`);

            dispatch({
                type: GET_ALL_CAROUSELS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:GET_ALL_CAROUSELS_FAILURE,
            });
        }
    };


    export const getCarouselDetailsApi = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_CAROUSEL_DETAILS_REQUEST });



            const  {data} = await axios.get(`https://totallyhomerealestate.com/API/api/carousels/${id}`);

            dispatch({
                type: GET_CAROUSEL_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:GET_CAROUSEL_DETAILS_FAILURE,
            });
        }
    };