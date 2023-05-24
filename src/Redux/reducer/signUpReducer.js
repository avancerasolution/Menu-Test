import { createReducer } from "@reduxjs/toolkit";

export const signupreducer = createReducer(
    {},
    {
        signUpRequest: (state) => {
            state.loading = true;
        },
        signUpSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
            state.user = null;
        },
        signUpFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },



        logoutRequest: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
            state.user = null;
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },



        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    })