import { createReducer } from "@reduxjs/toolkit";

export const checkOutreducer = createReducer(
    {},
    {
        checkOutRequest: (state) => {
            state.loading = true;
        },
        checkOutSuccess: (state, action) => {
            state.loading = false;

            state.message = action.payload;

        },
        checkOutFail: (state, action) => {
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