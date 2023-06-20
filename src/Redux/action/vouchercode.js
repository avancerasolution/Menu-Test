import axios from 'axios';
import { fetchVoucherCodeStart, fetchVoucherCodeSuccess, fetchVoucherCodeFailure } from '../reducer/voucherbycode';


export const fetchVoucherCode = ({ code }) => async (dispatch) => {
    dispatch(fetchVoucherCodeStart());

    try {
        const response = await axios.get(`${window.env.API_URL}/voucher/code/${code}`)

        const data = await response.data.result
        dispatch(fetchVoucherCodeSuccess(data));
    } catch (error) {
        dispatch(fetchVoucherCodeFailure(error.message));
    }
};