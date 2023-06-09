import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "./reducer/userReducer";
import { signupreducer } from './reducer/signUpReducer';
import menuReducer from './reducer/menuReducer';
import categoryReducer from './reducer/categoryReducer';
import { contactreducer } from './reducer/contactReducer';
import voucherReducer from './reducer/voucherReducer';
import { checkOutreducer } from './reducer/checkoutreducer';
import orderreducer from './reducer/orderreducer';
import orderDetailReducer from './reducer/orderDetailReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: signupreducer,
        menu: menuReducer,
        category: categoryReducer,
        contact: contactreducer,
        voucher: voucherReducer,
        checkcout: checkOutreducer,
        order: orderreducer,
        orderdetail: orderDetailReducer

    },
})

export const server = "http://localhost:5000/api";