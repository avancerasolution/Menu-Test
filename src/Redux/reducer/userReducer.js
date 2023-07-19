import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    loading: false,
    message: null,
    error: null,
    data: {},
    isAuthenticated: false,
    token: null
};

const authReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loadUserRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;
            state.isAuthenticated = false
            state.token = null  

        },

        loadUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true
            state.data = action.payload




        },


        loadUserFail(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null
            state.isAuthenticated = false
            state.token = null
        },
        loginRequest(state) {
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.message = "Login Successfully";
            state.data = action.payload;
            state.token = action.payload.tokens.token
        },
        loginFail(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },
        logoutRequest(state) {
            state.loading = true;
        },
        logoutSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.message = action.payload;
            state.data = null;
            state.token = null
        },
        logoutFail(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
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

export const { loadUserRequest, loadUserSuccess, loadUserFail, logoutRequest, loginRequest, logoutSuccess, loginSuccess, loginFail, clearError, clearMessage } = authReducer.actions;

export default authReducer.reducer;