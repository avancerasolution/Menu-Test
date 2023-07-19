import axios from 'axios';
import { fetchOrderDetailStart, fetchOrderDetailSuccess, fetchOrderDetailFailure } from '../reducer/orderDetailReducer';
import { createAsyncThunk } from '@reduxjs/toolkit';





export const fetchOrderDetail = createAsyncThunk(
    'order',
    async (id, thunkAPI) => {
        console.log(id, "chala")
        try {
            const token = thunkAPI.getState().auth.token
            thunkAPI.dispatch(fetchOrderDetailStart()); // Dispatch the start action
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Transaction/order/${id}`, {

                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${token}`
                },

            })

            console.log(response.data, "uper")
            thunkAPI.dispatch(fetchOrderDetailSuccess(response.data));
            console.log(response.data, "neeche")










        } catch (error) {

            thunkAPI.dispatch(fetchOrderDetailFailure(error.message));// Dispatch the failure action

            throw error;

        }
    }
);