import axios from "axios";
import { server } from "../store";

const to = "muhammadfaizraza48@gmail.com"
export const contact = ({ message, email, subject }) => async (dispatch) => {
    console.log(message, email, subject)
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





