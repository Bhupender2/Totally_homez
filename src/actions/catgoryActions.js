import axios from "axios";
import { CATEGORY_PROPERTIES_APARTMENT_FAILURE, CATEGORY_PROPERTIES_APARTMENT_FAILURE_RENT, CATEGORY_PROPERTIES_APARTMENT_REQUEST, CATEGORY_PROPERTIES_APARTMENT_REQUEST_RENT, CATEGORY_PROPERTIES_APARTMENT_SUCCESS, CATEGORY_PROPERTIES_APARTMENT_SUCCESS_RENT, CATEGORY_PROPERTIES_FAILURE, CATEGORY_PROPERTIES_FAILURE_RENT, CATEGORY_PROPERTIES_PENTHOUSE_FAILURE, CATEGORY_PROPERTIES_PENTHOUSE_FAILURE_RENT, CATEGORY_PROPERTIES_PENTHOUSE_REQUEST, CATEGORY_PROPERTIES_PENTHOUSE_REQUEST_RENT, CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS, CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS_RENT, CATEGORY_PROPERTIES_REQUEST, CATEGORY_PROPERTIES_REQUEST_RENT, CATEGORY_PROPERTIES_SUCCESS, CATEGORY_PROPERTIES_SUCCESS_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE, CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST, CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST_RENT, CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS, CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS_RENT } from "../constants/categoryConstants";

export const getCatgoryProperties = (propertyCategory) =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/${propertyCategory}/sale`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_FAILURE,
            });
        }
    };


    export const getCatgoryPropertiesRentApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_REQUEST_RENT });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/villa/rent`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_SUCCESS_RENT,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_FAILURE_RENT,
            });
        }
    };

    export const getTownhouseCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/townhouse/sale`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE,
            });
        }
    };

    export const getTownhouseCatgoryRentProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST_RENT });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/townhouse/rent`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS_RENT,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE_RENT,
            });
        }
    };



    export const getApartmentCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_APARTMENT_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/apartment/sale`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_APARTMENT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_APARTMENT_FAILURE,
            });
        }
    };


    export const getApartmentCatgoryRentProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_APARTMENT_REQUEST_RENT });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/apartment/rent`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_APARTMENT_SUCCESS_RENT,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_APARTMENT_FAILURE_RENT,
            });
        }
    };
    




    export const getPenthouseCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_PENTHOUSE_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/penthouse/sale`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_PENTHOUSE_FAILURE,
            });
        }
    };


    export const getPenthouseCatgoryRentProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_PENTHOUSE_REQUEST_RENT });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/penthouse/rent`);

console.log("penthouse rent",data)
            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS_RENT,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_PENTHOUSE_FAILURE_RENT,
            });
        }
    };




    