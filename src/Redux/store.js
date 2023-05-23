import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "./reducer/userReducer";
import { signupreducer } from './reducer/signUpReducer';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: signupreducer
    },
})

export const server = "http://192.168.100.12:5000/api";