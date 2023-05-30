import { createSlice } from '@reduxjs/toolkit';

const voucherSlice = createSlice({
    name: 'voucher',
    initialState: {
        category: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchVoucherStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchVoucherSuccess: (state, action) => {
            state.voucher = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchVoucherFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchVoucherStart,
    fetchVoucherSuccess,
    fetchVoucherFailure,
} = voucherSlice.actions;

export default voucherSlice.reducer;