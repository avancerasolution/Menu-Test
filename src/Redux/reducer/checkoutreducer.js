import { createSlice } from "@reduxjs/toolkit";








const initialState = {
    loading: false,
    message: null,
    error: null,
    data: {},


};

const checkOutReducer = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        checkOutRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;


        },

        checkOutSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.data = action.payload
            state.message = "Your Order is Created successfully!"

            localStorage.removeItem("items");
            localStorage.setItem("totalValue", 0);
 

        },


        checkOutFail(state, action) {
            state.loading = false;
            state.error = action.payload;

        },

        clearError(state) {
            state.error = null;


        },
        clearMessage(state) {
            state.message = null;
        }
    },
});

export const { checkOutRequest, checkOutSuccess, checkOutFail, clearError, clearMessage } = checkOutReducer.actions;

export default checkOutReducer.reducer;
