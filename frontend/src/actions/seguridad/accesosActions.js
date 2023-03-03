import axios from "axios";
import {
  ACCESOS_LIST_FAIL,
  ACCESOS_LIST_REQUEST,
  ACCESOS_LIST_SUCCESS,
} from "../../constants/accesosConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";

export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: ACCESOS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:id_permitido,
      },
    };
    
    const { data } = await axios.get(
      URL_SERVER +
        `/accesos/logs?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    dispatch({
      type: ACCESOS_LIST_SUCCESS,
      payload: data,
    });
    if(data.Message==="jwt expired")
    { 
      console.log(data); 
      localStorage.removeItem("userInfo");
      dispatch({ type: USER_LOGOUT });
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: USER_LOGOUT });
    }
  } catch (error) {
    dispatch({
      type: ACCESOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};