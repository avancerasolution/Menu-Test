import axios from 'axios';
import { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure } from '../reducer/orderreducer';
import { server } from '../store';
import Cookies from 'js-cookie';

export const fetchOrder = ({ id }) => async (dispatch) => {
    dispatch(fetchOrderStart());
    const token = Cookies.get("Token")
    try {
        const response = await axios.get(`${server}/Transaction/customer/${id}`, {

            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
            },

        })
        const data = await response.data;
        dispatch(fetchOrderSuccess(data));
    } catch (error) {
        dispatch(fetchOrderFailure(error.message));
    }
};