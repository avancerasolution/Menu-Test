import axios from "axios";
import { server } from "../store";
import Cookies from "js-cookie";
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(`${server}/auth/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: Cookies.get("Token")
            },

        });

        dispatch({
            type: "loadUserSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message,
        });
    }
};

export const login = ({ email, password }) => async (dispatch) => {
    console.log(email, password)

    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        dispatch({
            type: "loginRequest",
        });

        const { data } = await axios.post(`${server}/auth/loggingIn`, {

            email,
            password,
        }, config
        );
        Cookies.set("Token", data.tokens.token);
        dispatch({
            type: "loginSuccess",
            payload: data.tokens.token
        });
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message,
        });
    }
};






