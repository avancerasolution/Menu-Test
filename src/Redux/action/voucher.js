import axios from 'axios';
import { fetchVoucherStart, fetchVoucherSuccess, fetchVoucherFailure } from '../reducer/voucherReducer';


export const fetchVoucher = () => async (dispatch) => {
    dispatch(fetchVoucherStart());

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/voucher`)

        const data = await response.data.result;
        dispatch(fetchVoucherSuccess(data));
    } catch (error) {
        dispatch(fetchVoucherFailure(error.message));
    }
};