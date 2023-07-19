import axios from "axios";
import { signUpRequest, signUpSuccess, signUpFail, } from '../reducer/signUpReducer';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutRequest, logoutSuccess } from "../reducer/userReducer";




export const signup = createAsyncThunk(
    'signup',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(signUpRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/customer`,
                data
            );

            thunkAPI.dispatch(signUpSuccess(response.data));










        } catch (error) {

            thunkAPI.dispatch(signUpFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);





export const logout = createAsyncThunk(
    'signup',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(logoutRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios



            thunkAPI.dispatch(logoutSuccess());










        } catch (error) {

            console.log(error)

        }
    }
);
