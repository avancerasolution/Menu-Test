import { createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const contactreducer = createReducer(
    {},
    {




        contactRequest: (state) => {
            state.loading = true;
        },
        contactSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;

        },
        contactFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    })










const initialState = {
    loading: false,
    message: null,
    error: null,
    data: {},


};

const signupreducer = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        contactRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;


        },

        contactSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.data = action.payload
            state.message = "Your Response is Send successfully!"



        },


        contactFail(state, action) {
            state.loading = false;
            state.error = action.payload;

        },

        clearContactError(state) {
            state.error = null;


        },
        clearContactMessage(state) {
            state.message = null;
        }
    },
});

export const { contactRequest, contactSuccess, contactFail, clearContactError, clearContactMessage } = signupreducer.actions;

export default signupreducer.reducer;
