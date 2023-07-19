import axios from 'axios';
import { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailure } from '../reducer/categoryReducer';


export const fetchCategory = () => async (dispatch) => {
    dispatch(fetchCategoryStart());

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/item-category`)

        const data = await response.data.result;
        dispatch(fetchCategorySuccess(data));
    } catch (error) {
        dispatch(fetchCategoryFailure(error.message));
    }
};