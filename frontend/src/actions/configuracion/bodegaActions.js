import axios from "axios";
import {
  BODEGA_CREATE_FAIL,
  BODEGA_CREATE_REQUEST,
  BODEGA_CREATE_SUCCESS,
  BODEGA_DELETE_FAIL,
  BODEGA_DELETE_REQUEST,
  BODEGA_DELETE_SUCCESS,
  BODEGA_DETAILS_FAIL,
  BODEGA_DETAILS_REQUEST,
  BODEGA_DETAILS_RESET,
  BODEGA_DETAILS_SUCCESS,
  BODEGA_LIST_FAIL,
  BODEGA_LIST_REQUEST,
  BODEGA_LIST_SUCCESS,
  BODEGA_UPDATE_FAIL,
  BODEGA_UPDATE_REQUEST,
  BODEGA_UPDATE_SUCCESS,
  BODEGA_ACTIVATE_REQUEST,
  BODEGA_ACTIVATE_SUCCESS,
  BODEGA_ACTIVATE_FAIL
} from "../../constants/bodegaConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

export const listaRegistros= (parameters) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BODEGA_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    //headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:parameters.id_permitido,
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
        `/ware/bodega?keyword=${parameters.keyword}&pageNumber=${parameters.pageNumber}&pageSize=${parameters.pageSize}`,
      config
    );
    dispatch({
      type: BODEGA_LIST_SUCCESS,
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
      type: BODEGA_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBodega = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BODEGA_DELETE_REQUEST,
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
    await axios.delete(URL_SERVER + `/ware/${id}`, config);
    dispatch({
      type: BODEGA_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: BODEGA_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBodega = (bodega) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BODEGA_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      //headers
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
          id_permitido:bodega.id_permitido
        },
      };
      //create bodega
      const { data } = await axios.post(
        URL_SERVER + "/ware/",
        bodega,
        config
      );
      dispatch({
        type: BODEGA_CREATE_SUCCESS,
        payload: data,
      });
      dispatch(listaRegistros({
        keyword: bodega.keyword,
        pageNumber: bodega.pageCurrent,
        pageSize: bodega.pageNumberCurrent,
        id_permitido:bodega.id_permitido,
      }));
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
        type: BODEGA_CREATE_FAIL,
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
  export const activeBodega = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BODEGA_ACTIVATE_REQUEST,
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
      await axios.put(URL_SERVER + `/ware/activate/${id}`, config);
      dispatch({
        type: BODEGA_ACTIVATE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: BODEGA_ACTIVATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const updateBodega =
  (bodega) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BODEGA_UPDATE_REQUEST,
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
          id_permitido: bodega.id_permitido
        },
      };
      //update product
      const { data } = await axios.put(
        URL_SERVER + `/ware/${bodega.id}`,
        bodega,
        config
      );
      dispatch({
        type: BODEGA_UPDATE_SUCCESS,
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
        title: "Editado correctamente",
      });
      dispatch(listaRegistros({
        keyword: bodega.keyword,
        pageNumber: bodega.pageCurrent,
        pageSize: bodega.pageNumberCurrent,
        id_permitido: bodega.id_permitido,
      }));
    } catch (error) {
      dispatch({
        type: BODEGA_UPDATE_FAIL,
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
export const listBodegaDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BODEGA_DETAILS_REQUEST });
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
    const { data } = await axios.get(URL_SERVER + `/ware/${id}`, config);
    dispatch({
      type: BODEGA_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BODEGA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: BODEGA_DETAILS_RESET });
};