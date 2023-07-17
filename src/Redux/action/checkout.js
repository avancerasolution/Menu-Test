import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkOutFail, checkOutRequest, checkOutSuccess } from "../reducer/checkoutreducer";



export const checkout = createAsyncThunk(
    'checkout',
    async ({ formData }, thunkAPI) => {
        try {
            console.log(formData, "data")
            const token = thunkAPI.getState().auth.token
            thunkAPI.dispatch(checkOutRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${window.env.API_URL}/transaction`,
                formData
                , {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `${token}`
                    },


                },
            );
            console.log(formData, "data")
            console.log(response.data, "uper")
            thunkAPI.dispatch(checkOutSuccess(response.data));
            console.log(response.data, "neeche")










        } catch (error) {

            thunkAPI.dispatch(checkOutFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);