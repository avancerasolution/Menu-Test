import axios from 'axios';
import { fetchAboutStart, fetchAboutSuccess, fetchAboutFailure } from '../reducer/aboutReducer';
import { server } from '../store';

export const fetchAbout = () => async (dispatch) => {
    dispatch(fetchAboutStart());

    try {
        const response = await axios.get(`${server}/content/heading/about_us`)

        const data = await response.data;
        dispatch(fetchAboutSuccess(data));
    } catch (error) {
        dispatch(fetchAboutFailure(error.message));
    }
};