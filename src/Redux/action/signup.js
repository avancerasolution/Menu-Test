import axios from "axios";

import Cookies from "js-cookie";
export const signup = ({ first_name, last_name, main_email, password }) => async (dispatch) => {

    try {
        dispatch({
            type: "signup",
        });

        const { data } = await axios.post(`${window.env.API_URL}/customer`, {

            first_name, last_name, main_email, password
        }, {



        },
        );

        dispatch({
            type: "signUpRequest",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "signUpFail",
            payload: error.response.data.message,
        });
    }
};





export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logout",
        });

        Cookies.remove('Token')

        dispatch({
            type: "logoutSuccess",

        });
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: "Logout Successfully",
        });
    }
};