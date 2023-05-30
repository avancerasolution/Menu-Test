import axios from "axios";
import { server } from "../store";
import Cookies from "js-cookie";
export const signup = ({ first_name, last_name, main_email, password }) => async (dispatch) => {
    console.log(first_name, last_name, main_email, password,)
    try {
        dispatch({
            type: "signup",
        });

        const { data } = await axios.post(`${server}/customer`, {

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
        console.log("chala")
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