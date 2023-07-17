import { createSlice } from '@reduxjs/toolkit';





const initialState = {
    loading: false,
    error: null,
    order: [],


};

const OrderSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        fetchOrderStart(state) {
            state.loading = true;
            state.error = null;


        },

        fetchOrderSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.order = action.payload



        },


        fetchOrderFailure(state, action) {
            state.loading = false;
            state.error = action.payload;

        },

        clearOrderError(state) {
            state.error = null;


        },

    },
});
export const {
    fetchOrderStart,
    fetchOrderSuccess,
    clearOrderError,
    fetchOrderFailure,
} = OrderSlice.actions;

export default OrderSlice.reducer;
