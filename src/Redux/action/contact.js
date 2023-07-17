import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { contactFail, contactRequest, contactSuccess } from "../reducer/contactReducer";



export const contact = createAsyncThunk(
    'contact',
    async (data, thunkAPI) => {
        try {

            thunkAPI.dispatch(contactRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${window.env.API_URL}/contactUs`,
                data
            );

            console.log(response.data, "uper")
            thunkAPI.dispatch(contactSuccess(response.data));
            console.log(response.data, "neeche")










        } catch (error) {

            thunkAPI.dispatch(contactFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);