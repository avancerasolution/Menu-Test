import { createSlice } from "@reduxjs/toolkit";

// export const signupreducer = createReducer(
//     {},
//     {
//         signUpRequest: (state) => {
//             state.loading = true;
//         },
//         signUpSuccess: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = false;
//             state.message = action.payload;
//             state.user = null;
//         },
//         signUpFail: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.error = action.payload;
//         },



//         logoutRequest: (state) => {
//             state.loading = true;
//         },
//         logoutSuccess: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = false;
//             state.message = action.payload;
//             state.user = null;
//         },
//         logoutFail: (state, action) => {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.error = action.payload;
//         },



//         clearError: (state) => {
//             state.error = null;
//         },
//         clearMessage: (state) => {
//             state.message = null;
//         },
//     })






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
        logoutRequest(state) {
            state.loading = true;
        },
        logoutSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
            state.data = null;
        },
        logoutFail(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
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