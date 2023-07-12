import axios from "axios";

import { signUpRequest, signUpSuccess, signUpFail } from '../reducer/signUpReducer';
import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";




export const signup = createAsyncThunk(
    'signup',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(signUpRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${window.env.API_URL}/customer`,
                data
            );

            console.log(response.data, "uper")
            thunkAPI.dispatch(signUpSuccess(response.data));
            console.log(response.data)
            Cookies.set("token", response.data.token)









        } catch (error) {

            thunkAPI.dispatch(signUpFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);




export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logout",
        });

        Cookies.remove('Token')

        dispatch({
            type: "logoutSuccess",

        });
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: "Logout Successfully",
        });
    }
};