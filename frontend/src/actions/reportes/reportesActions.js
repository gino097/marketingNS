import axios from "axios";
import {
  REPORTES_CREATE_FAIL,
  REPORTES_CREATE_REQUEST,
  REPORTES_CREATE_SUCCESS,
  REPORTES_DETAILS_RESET,
} from "../../constants/reportesConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

export const getExcel =
  (parameters) => async (dispatch, getState) => {
    try {
      const {value, name}=parameters;
      dispatch({
        type: REPORTES_CREATE_REQUEST,
      });

      const data = await axios.get(
        URL_SERVER + `/reportes/${value}`,{
          responseType: 'blob'
         }).then(response => {
            let filename = "Reporte "+name+".xlsx"
            const url = window.URL.createObjectURL(new Blob([response.data], 
            {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
         }).catch(error => {
            console.log(error)
         }
      );
      dispatch({
        type: REPORTES_CREATE_SUCCESS,
        payload: data,
      });
      /*if(data.Message==="jwt expired")
    { 
      console.log(data); 
      localStorage.removeItem("userInfo");
      dispatch({ type: USER_LOGOUT });
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: USER_LOGOUT });
    }*/
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        color: "white",
        background: "#4caf50",
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
        icon: "success",
        title: "Generado exitosamente",
      });
    } catch (error) {
      dispatch({
        type: REPORTES_CREATE_FAIL,
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
        title: "Error al generar reporte",
      });
    }
  };

export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: REPORTES_DETAILS_RESET });
};