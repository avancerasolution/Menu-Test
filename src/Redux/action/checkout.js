import axios from "axios";
import { server } from "../store";
import Cookies from "js-cookie";

export const checkout = (formData) => async (dispatch) => {
    const token = Cookies.get("Token")
    try {
        dispatch({
            type: "checkout",
        });

        const { data } = await axios.post(`${server}/transaction`,

            formData
            , {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${token}`
                },


            },
        );

        dispatch({
            type: "checkOutRequest",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "checkOutFail",
            payload: error.response.data.error,
        });
    }
};





