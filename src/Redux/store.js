import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "./reducer/userReducer";
import { signupreducer } from './reducer/signUpReducer';
import menuReducer from './reducer/menuReducer';
import categoryReducer from './reducer/categoryReducer';
import { contactreducer } from './reducer/contactReducer';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: signupreducer,
        menu: menuReducer,
        category: categoryReducer,
        contact: contactreducer


    },
})

export const server = "http://192.168.100.12:5000/api";