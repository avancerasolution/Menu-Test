import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../reducer/menuReducer';
import { server } from '../store';

export const fetchMenuData = () => async (dispatch) => {
    dispatch(fetchDataStart());

    try {
        const response = await axios.get(`${server}/item`)

        const data = await response.data.result;
        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};