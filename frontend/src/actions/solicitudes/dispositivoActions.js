import axios from "axios";
import {
  DISPOSITIVOS_DELETE_FAIL,
  DISPOSITIVOS_DELETE_REQUEST,
  DISPOSITIVOS_DELETE_SUCCESS,
  DISPOSITIVOS_DETAILS_FAIL,
  DISPOSITIVOS_DETAILS_REQUEST,
  DISPOSITIVOS_DETAILS_RESET,
  DISPOSITIVOS_DETAILS_SUCCESS,
  DISPOSITIVOS_LIST_FAIL,
  DISPOSITIVOS_LIST_REQUEST,
  DISPOSITIVOS_LIST_SUCCESS,
  DISPOSITIVOS_UPDATE_FAIL,
  DISPOSITIVOS_UPDATE_REQUEST,
  DISPOSITIVOS_UPDATE_SUCCESS,
} from "../../constants/dispositivosConstants";
import {
  COMBO_DISPOSITIVOS_LIST_FAIL,
  COMBO_DISPOSITIVOS_LIST_REQUEST,
  COMBO_DISPOSITIVOS_LIST_SUCCESS,
} from "../../constants/comboDispositivosConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

/***** COMBOS *****/
export const listaComboDispositivosEntrega = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMBO_DISPOSITIVOS_LIST_REQUEST,
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
      `/solicitudes/comboplanes`,
      config
    );
    dispatch({
      type: COMBO_DISPOSITIVOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMBO_DISPOSITIVOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: DISPOSITIVOS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:id_permitido,
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/solicitudproducto/listado?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    
    dispatch({
      type: DISPOSITIVOS_LIST_SUCCESS,
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
      type: DISPOSITIVOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const informePDF = (parameters) => async (dispatch, getState) => {
  try {
    //const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: DISPOSITIVOS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        //id_permitido:id_permitido,
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/solicitudproducto/informePDF/${parameters.codigo}`,
      {
        responseType: 'blob'
       }).then(response => {
          let filename = "Informe.pdf"
          const url = window.URL.createObjectURL(new Blob([response.data], 
          {type:'application/pdf'}));
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
      type: DISPOSITIVOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
  }
};





export const informePDFMostrar = (parametros) => async (dispatch, getState) => {
  //console.log(parametros);
  try {
    //const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: DISPOSITIVOS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        //id_permitido:id_permitido,
      },
    };
    
    const { data } = await axios.get(
      URL_SERVER +
      `/solicitudproducto/informePDF/${parametros.id}`,
      {
        responseType: 'blob'
       }).then(response => {
          let filename = "Informe.pdf"
          const url = window.URL.createObjectURL(new Blob([response.data], 
          {type:'application/pdf'}));
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
      type: DISPOSITIVOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
  }
};
export const updateDispositivos = (dispositivos) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DISPOSITIVOS_UPDATE_REQUEST,
    });

    //get user from state
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido: dispositivos.id_permitido
      },
    };
    //update product
    const { data } = await axios.put(
      //Recibe un json
      URL_SERVER + `/solicitudproducto/${dispositivos.id}`,dispositivos,config);
    dispatch({
      type: DISPOSITIVOS_UPDATE_SUCCESS,
      payload: data,
    });
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
    var mensajeOk="Solicitud Actualizada";
    Toast.fire({
      showCloseButton: true,
      icon: "success",
      title: mensajeOk,
    });
    dispatch(listaRegistros({
      keyword: dispositivos.keyword,
      pageNumber: dispositivos.pageCurrent,
      pageSize: dispositivos.pageNumberCurrent,
      id_permitido: dispositivos.id_permitido,
    }));
  } catch (error) {
    dispatch({
      type: DISPOSITIVOS_UPDATE_FAIL,
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
      title: "Error al editar",
    });
  }
};

export const updateEmisionPoliza = (dispositivos) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DISPOSITIVOS_UPDATE_REQUEST,
    });
    //get user from state
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    //update product
    const { data } = await axios.put(
      URL_SERVER + `/solicitudesemision/${dispositivos.id}`,dispositivos,config);
    dispatch({
      type: DISPOSITIVOS_UPDATE_SUCCESS,
      payload: data,
    });
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
      title: "Emisión actualizada",
    });
    dispatch(listaRegistros({
      keyword: dispositivos.keyword,
      pageNumber: dispositivos.pageCurrent,
      pageSize: dispositivos.pageNumberCurrent,
      id_permitido: dispositivos.id_permitido,
    }));
  } catch (error) {
    dispatch({
      type: DISPOSITIVOS_UPDATE_FAIL,
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
      title: "Error al editar",
    });
  }
};

export const deleteDispositivos = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DISPOSITIVOS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(URL_SERVER + `/solicitudproducto/${id}`, config);
    dispatch({
      type: DISPOSITIVOS_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DISPOSITIVOS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listDispositivosDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DISPOSITIVOS_DETAILS_REQUEST });
    //get user from state
    const {
      userLogin: { userInfo },
    } = getState();

    //headers
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    //api call to get product
    const { data } = await axios.get(URL_SERVER + `/solicitudproducto/${id}`, config);
    dispatch({
      type: DISPOSITIVOS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISPOSITIVOS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: DISPOSITIVOS_DETAILS_RESET });
};