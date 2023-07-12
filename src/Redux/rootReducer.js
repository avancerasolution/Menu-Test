import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducer/userReducer";
import signUpReducer from './reducer/signUpReducer';
import menuReducer from './reducer/menuReducer';
import categoryReducer from './reducer/categoryReducer';
import { contactreducer } from './reducer/contactReducer';
import voucherReducer from './reducer/voucherReducer';
import { checkOutreducer } from './reducer/checkoutreducer';
import orderreducer from './reducer/orderreducer';
import orderDetailReducer from './reducer/orderDetailReducer';
import aboutReducer from './reducer/aboutReducer';
import voucherCodeSlice from './reducer/voucherbycode';

const rootReducer = combineReducers({

    auth: authReducer,
    signup: signUpReducer,
    menu: menuReducer,
    category: categoryReducer,
    contact: contactreducer,
    voucher: voucherReducer,
    checkcout: checkOutreducer,
    order: orderreducer,
    orderdetail: orderDetailReducer,
    about: aboutReducer,
    vouchercode: voucherCodeSlice
})

export default rootReducer