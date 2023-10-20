import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../reducer/menuReducer';

export const fetchMenuData = () => async (dispatch) => {
    dispatch(fetchDataStart());

    try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/item?pageSize=1000`
        );

        const data = await response.data.result;
        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};