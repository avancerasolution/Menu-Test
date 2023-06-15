import { createSlice } from '@reduxjs/toolkit';

const voucherCodeSlice = createSlice({
    name: 'voucherbycode',
    initialState: {
        voucherbycode: undefined,
        loading: false,
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
        },
        fetchVoucherCodeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchVoucherCodeStart,
    fetchVoucherCodeSuccess,
    fetchVoucherCodeFailure,
} = voucherCodeSlice.actions;

export default voucherCodeSlice.reducer;