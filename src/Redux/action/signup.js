import axios from "axios";
import { server } from "../store";

export const signup = ({ first_name, last_name, main_email, password, user_type }) => async (dispatch) => {
    console.log(first_name, last_name, main_email, password, user_type)
    try {
        dispatch({
            type: "signup",
        });

        const { data } = await axios.post(`${server}/user`, {

            first_name, last_name, main_email, password, user_type
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