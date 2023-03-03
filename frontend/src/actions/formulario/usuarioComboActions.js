import axios from "axios";
import {
  COMBO_USUARIOS_LIST_FAIL,
  COMBO_USUARIOS_LIST_REQUEST,
  COMBO_USUARIOS_LIST_SUCCESS,
} from "../../constants/comboUsuariosConstants";

import {
  COMBO_CIUDADES_LIST_REQUEST,
  COMBO_CIUDADES_LIST_SUCCESS,
  COMBO_CIUDADES_LIST_FAIL
} from "../../constants/comboCiudadesConstants";

import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";
/***** COMBOS *****/

export const listaComboDispositivosEntregaId = (parameters) => async (dispatch, getState) => {
const {intermediario, lugar}=parameters
  try {
    dispatch({
      type: COMBO_USUARIOS_LIST_REQUEST,
    });
    const { data } = await axios.get(
      URL_SERVER +
      `/solicitudes/combointermediario/${intermediario}/${lugar}`,parameters
    );
    dispatch({
      type: COMBO_USUARIOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMBO_USUARIOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listaComboCiudades = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: COMBO_CIUDADES_LIST_REQUEST,
      });
      const { data } = await axios.get(
        URL_SERVER +
        `/solicitudes/ciudades`
      );
      dispatch({
        type: COMBO_CIUDADES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COMBO_CIUDADES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };