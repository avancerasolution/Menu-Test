import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkOutFail, checkOutRequest, checkOutSuccess } from "../reducer/checkoutreducer";



export const checkout = createAsyncThunk(
    'checkout',
    async ({ formData }, thunkAPI) => {
        try {

            const token = thunkAPI.getState().auth.token
            thunkAPI.dispatch(checkOutRequest()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/transaction`,
                formData
                , {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `${token}`
                    },


                },
            );


            thunkAPI.dispatch(checkOutSuccess(response.data));











        } catch (error) {

            thunkAPI.dispatch(checkOutFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);