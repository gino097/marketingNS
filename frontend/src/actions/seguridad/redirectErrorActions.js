import axios from "axios";
import {
  ERRORREDIRECT_LIST_FAIL,
  ERRORREDIRECT_LIST_REQUEST,
  ERRORREDIRECT_LIST_SUCCESS,
} from "../../constants/errorRedirectConstants";
import { URL_SERVER } from "../../constants/serverUrl";
export const errorRedirectMensaje = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ERRORREDIRECT_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    
    const { data } = await axios.get(
      URL_SERVER +
      `/errorRedirect/errorRedirect`,
      config
    );
    dispatch({
      type: ERRORREDIRECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERRORREDIRECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};