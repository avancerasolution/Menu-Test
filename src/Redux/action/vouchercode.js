import axios from 'axios';
import { fetchVoucherCodeStart, fetchVoucherCodeSuccess, fetchVoucherCodeFailure, clearVoucherMessage } from '../reducer/voucherbycode';
import { createAsyncThunk } from '@reduxjs/toolkit';




export const fetchVoucherCode = createAsyncThunk(
    'voucherbycode',
    async ({ code }, thunkAPI) => {
        try {

            thunkAPI.dispatch(fetchVoucherCodeStart()); // Dispatch the start action

            // Make your API request here, e.g., using fetch or axios
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/voucher/code/${code}`)



            console.log(response.data, "uper")
            thunkAPI.dispatch(fetchVoucherCodeSuccess(response.data));
            console.log(response.data, "neeche")
            thunkAPI.dispatch(clearVoucherMessage())
        } catch (error) {

            thunkAPI.dispatch(fetchVoucherCodeFailure(error.response.data.message)); // Dispatch the failure action

            throw error;

        }
    }
);


