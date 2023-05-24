import axios from 'axios';
import { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailure } from '../reducer/categoryReducer';
import { server } from '../store';

export const fetchCategory = () => async (dispatch) => {
    dispatch(fetchCategoryStart());

    try {
        const response = await axios.get(`${server}/item-category`)
        console.log(response, "dsadsa")
        const data = await response.data.result;
        dispatch(fetchCategorySuccess(data));
    } catch (error) {
        dispatch(fetchCategoryFailure(error.message));
    }
};