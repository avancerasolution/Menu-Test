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

            console.log(action.payload, "action")


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
            state.data = null;
        },
        loginFail(state, action) {
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

export const { loadUserRequest, loadUserSuccess, loadUserFail, loginRequest, loginSuccess, loginFail, clearError, clearMessage } = authReducer.actions;

export default authReducer.reducer;