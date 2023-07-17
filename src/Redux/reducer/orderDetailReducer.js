import { createSlice } from '@reduxjs/toolkit';







const initialState = {
    loading: false,
    message: null,
    error: null,
    data: [],


};

const OrderDetailSlice = createSlice({
    name: 'orderdetail',
    initialState,
    reducers: {
        fetchOrderDetailStart(state) {
            state.loading = true;
            state.error = null;
            state.message = null;


        },

        fetchOrderDetailSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.data = action.payload
            state.message = "Your Response is Send successfully!"



        },


        fetchOrderDetailFailure(state, action) {
            state.loading = false;
            state.error = action.payload;

        },

        clearOrderDetailError(state) {
            state.error = null;


        },

    },
});

export const { fetchOrderDetailStart, fetchOrderDetailSuccess, fetchOrderDetailFailure, clearOrderDetailError } = OrderDetailSlice.actions;

export default OrderDetailSlice.reducer;
