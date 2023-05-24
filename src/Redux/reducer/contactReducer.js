import { createReducer } from "@reduxjs/toolkit";

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