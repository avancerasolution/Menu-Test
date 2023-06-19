import axios from "axios";
import { server } from "../store";

const email = "muhammad.faiz@avancerasolutions.com"
export const contact = ({ message, to, subject }) => async (dispatch) => {

    try {
        dispatch({
            type: "contact",
        });

        const { data } = await axios.post(`${server}/contactUs`, {

            message, email, subject, to
        }, {



        },
        );

        dispatch({
            type: "contactRequest",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "contactFail",
            payload: error.response.data.message,
        });
    }
};





