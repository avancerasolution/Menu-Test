import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    messages: null,
    error: null,
    data: {},


};

const contactReducer = createSlice({
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
            state.messages = "Your Response is Send successfully!"



        },


        contactFail(state, action) {
            state.loading = false;
            state.error = action.payload;

        },

        clearContactError(state) {
            state.error = null;


        },
        clearContactMessage(state) {
            state.messages = null;
        }
    },
});

export const { contactRequest, contactSuccess, contactFail, clearContactError, clearContactMessage } = contactReducer.actions;

export default contactReducer.reducer;
