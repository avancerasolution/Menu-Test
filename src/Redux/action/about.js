import axios from 'axios';
import { fetchAboutStart, fetchAboutSuccess, fetchAboutFailure } from '../reducer/aboutReducer';


export const fetchAbout = () => async (dispatch) => {
    dispatch(fetchAboutStart());

    try {
        const response = await axios.get(`${window.env.API_URL}/content/heading/about_us`)

        const data = await response.data;
        dispatch(fetchAboutSuccess(data));
    } catch (error) {
        dispatch(fetchAboutFailure(error.response.message));
    }
};