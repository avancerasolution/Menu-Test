import axios from 'axios';
import { fetchVoucherStart, fetchVoucherSuccess, fetchVoucherFailure } from '../reducer/voucherReducer';
import { server } from '../store';

export const fetchVoucher = () => async (dispatch) => {
    dispatch(fetchVoucherStart());

    try {
        const response = await axios.get(`${server}/voucher`)

        const data = await response.data.result;
        dispatch(fetchVoucherSuccess(data));
    } catch (error) {
        dispatch(fetchVoucherFailure(error.message));
    }
};