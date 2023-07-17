import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { loginRequest, loginSuccess, loginFail } from '../reducer/userReducer';
import Cookies from "js-cookie";
export const loadUser = () => async (dispatch) => {
    const token = Cookies.get("Token")

    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(`${window.env.API_URL}/auth/me`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
            },

        });

        dispatch({
            type: "loadUserSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            // payload: error.response.data.message,
        });
    }
};









export const login = createAsyncThunk(
    'login',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loginRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${window.env.API_URL}/auth/loggingIn`,
                data
            );


            thunkAPI.dispatch(loginSuccess(response.data));

         









        } catch (error) {

            thunkAPI.dispatch(loginFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);

