import { createSlice } from "@reduxjs/toolkit";








const initialState = {
    loading: false,
    message: null,
    error: null,
    data: {},
    isAuthenticated: false,
    token: null
};

const signupreducer = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signUpRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;
            state.isAuthenticated = false
            state.token = null

        },

        signUpSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.data = action.payload
            state.message = "User created successfully!"
            console.log(state.message, "action")


        },


        signUpFail(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null
            state.isAuthenticated = false
            state.token = null
        },

        clearUserError(state) {
            state.error = null;


        },
        clearUserMessage(state) {
            state.message = null;
        }
    },
});

export const { signUpRequest, signUpSuccess, signUpFail, clearUserError, clearUserMessage } = signupreducer.actions;

export default signupreducer.reducer;