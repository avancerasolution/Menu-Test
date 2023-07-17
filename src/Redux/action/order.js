import axios from 'axios';
import { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure } from '../reducer/orderreducer';

import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchOrder = createAsyncThunk(
    'order',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token
            thunkAPI.dispatch(fetchOrderStart()); // Dispatch the start action

            const response = await axios.get(`${window.env.API_URL}/Transaction/customer/${id}`, {

                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${token}`
                },

            })

            console.log(response.data, "uper")
            thunkAPI.dispatch(fetchOrderSuccess(response.data.result));
            console.log(response.data.result, "neeche")










        } catch (error) {

            thunkAPI.dispatch(fetchOrderFailure(error.message));// Dispatch the failure action

            throw error;

        }
    }
);