import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkOutFail, checkOutRequest, checkOutSuccess } from "../reducer/checkoutreducer";
import { toast } from "react-toastify";



export const checkout = createAsyncThunk(
    'checkout',
    async ({ formData, navigate }, thunkAPI) => {
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
            if (error?.response?.status === 401) {
                toast.error("Session expired, please login !")
                navigate("/login")
            }
            thunkAPI.dispatch(checkOutFail(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);