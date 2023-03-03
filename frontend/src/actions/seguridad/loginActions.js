import axios from "axios";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from "../../constants/loginConstants";
import {URL_SERVER} from '../../constants/serverUrl'

export const login = (credenciales) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            URL_SERVER+"/users/login",
            { ...credenciales},
            config
        );
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        //set user info into local storage
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

