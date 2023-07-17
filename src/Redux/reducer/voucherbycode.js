import { createSlice } from '@reduxjs/toolkit';

const voucherCodeSlice = createSlice({
    name: 'voucherbycode',
    initialState: {
        voucherbycode: undefined,
        loading: false,
        message: null,
        error: null,
    },
    reducers: {
        fetchVoucherCodeStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchVoucherCodeSuccess: (state, action) => {
            state.voucherbycode = action.payload;
            state.loading = false;
            state.error = null;
            state.message = "Voucher is available"
        },
        fetchVoucherCodeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearVoucherError: (state) => {
            state.error = null;



        }
    },
});

export const {
    fetchVoucherCodeStart,
    fetchVoucherCodeSuccess,
    fetchVoucherCodeFailure,
    clearVoucherError
} = voucherCodeSlice.actions;

export default voucherCodeSlice.reducer;