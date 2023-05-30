import { createSlice } from '@reduxjs/toolkit';

const OrderDetailSlice = createSlice({
    name: 'orderdetail',
    initialState: {
        orderdetail: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchOrderDetailStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchOrderDetailSuccess: (state, action) => {
            state.orderdetail = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchOrderDetailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchOrderDetailStart,
    fetchOrderDetailSuccess,
    fetchOrderDetailFailure,
} = OrderDetailSlice.actions;

export default OrderDetailSlice.reducer;