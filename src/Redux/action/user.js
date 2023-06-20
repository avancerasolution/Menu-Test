import axios from "axios";

import Cookies from "js-cookie";
export const loadUser = () => async (dispatch) => {
    const token = Cookies.get("Token")

    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(`${window.env.API_URL}/auth/me`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
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


    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        dispatch({
            type: "loginRequest",
        });

        const { data } = await axios.post(`${window.env.API_URL}/auth/loggingIn`, {

            email,
            password,
        }, config
        );
        Cookies.set("Token", data.tokens.token);
        dispatch({
            type: "loginSuccess",
            payload: "Login Successfully"
        });
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error,
        });
    }
};






