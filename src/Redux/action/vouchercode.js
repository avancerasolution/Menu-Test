import axios from 'axios';
import { fetchVoucherCodeStart, fetchVoucherCodeSuccess, fetchVoucherCodeFailure } from '../reducer/voucherbycode';
import { server } from '../store';

export const fetchVoucherCode = ({ code }) => async (dispatch) => {
    dispatch(fetchVoucherCodeStart());

    try {
        const response = await axios.get(`${server}/voucher/code/${code}`)

        const data = await response.data.result
        dispatch(fetchVoucherCodeSuccess(data));
    } catch (error) {
        dispatch(fetchVoucherCodeFailure(error.message));
    }
};