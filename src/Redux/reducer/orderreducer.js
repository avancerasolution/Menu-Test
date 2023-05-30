import { createSlice } from '@reduxjs/toolkit';

const OrderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchOrderStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchOrderSuccess: (state, action) => {
            state.order = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchOrderFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchOrderStart,
    fetchOrderSuccess,
    fetchOrderFailure,
} = OrderSlice.actions;

export default OrderSlice.reducer;