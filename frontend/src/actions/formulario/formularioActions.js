import axios from "axios";
import {
  SOLICITUD_CREATE_FAIL,
  SOLICITUD_CREATE_REQUEST,
  SOLICITUD_CREATE_SUCCESS,
  SOLICITUD_DETAILS_RESET,
} from "../../constants/solicitudConstants";

import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";


export const createSolicitud = (userData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SOLICITUD_CREATE_REQUEST,
      });
      //console.log("Disparo formulario OK"+userData);
      const { data } = await axios.post(
        URL_SERVER + "/formulario/",
        userData
      );
      dispatch({
        type: SOLICITUD_CREATE_SUCCESS,
        payload: data,
      });
      var mensajeAlerta="Creado exitosamente";
      var backgroundMensaje="#4caf50";
      var iconMensaje = "success";
      if(data.success==="ERROR"){
        if(data.status_code==="REGISTRO_REPETIDO"){
          mensajeAlerta=data.mensaje;
        }else{
          mensajeAlerta="Error";
        }
        backgroundMensaje="#f44336";
        iconMensaje = "error";
      }
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        color: "white",
        background: backgroundMensaje,
        iconColor: "white",
        width: "420",
        timerProgressBar: true,
        customClass:
          "!h-13 !py-2 !px-2 !rounded-none !ml-20 !m-50 !w-60 !text-sm sm:!w-80 !mb-10 font-normal sm:!text-base",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        showCloseButton: true,
        icon: iconMensaje,
        title: mensajeAlerta,
      });
    } catch (error) {
      dispatch({
        type: SOLICITUD_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });

      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        color: "white",
        background: "#f44336",
        iconColor: "white",
        width: "420",
        timerProgressBar: true,
        customClass:
          "!h-13 !py-2 !px-2 !rounded-none !ml-20 !m-50 !w-60 !text-sm sm:!w-80 !mb-10 font-normal sm:!text-base",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        showCloseButton: true,
        icon: "error",
        title: "Error al crear",
      });
    }
};

export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: SOLICITUD_DETAILS_RESET });
};