import axios from 'axios';
import { fetchOrderDetailStart, fetchOrderDetailSuccess, fetchOrderDetailFailure } from '../reducer/orderDetailReducer';

import Cookies from 'js-cookie';

export const fetchOrderDetail = ({ id }) => async (dispatch) => {
    dispatch(fetchOrderDetailStart());
    const token = Cookies.get("Token")
    try {
        const response = await axios.get(`${window.env.API_URL}/Transaction/order/${id}`, {

            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
            },

        })
        const data = await response.data;
        dispatch(fetchOrderDetailSuccess(data));
    } catch (error) {
        dispatch(fetchOrderDetailFailure(error.message));
    }
};