import axios from "axios";
import {
  PLANES_CREATE_FAIL,
  PLANES_CREATE_REQUEST,
  PLANES_CREATE_SUCCESS,
  PLANES_DELETE_FAIL,
  PLANES_DELETE_REQUEST,
  PLANES_DELETE_SUCCESS,
  PLANES_DETAILS_FAIL,
  PLANES_DETAILS_REQUEST,
  PLANES_DETAILS_RESET,
  PLANES_DETAILS_SUCCESS,
  PLANES_LIST_FAIL,
  PLANES_LIST_REQUEST,
  PLANES_LIST_SUCCESS,
  PLANES_UPDATE_FAIL,
  PLANES_UPDATE_REQUEST,
  PLANES_UPDATE_SUCCESS,
} from "../../constants/planesConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";
export const listaRegistros= (parameters) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLANES_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:parameters.id_permitido,
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
        `/planes/planes?keyword=${parameters.keyword}&pageNumber=${parameters.pageNumber}&pageSize=${parameters.pageSize}`,
      config
    );
    dispatch({
      type: PLANES_LIST_SUCCESS,
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
      type: PLANES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePlan = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLANES_DELETE_REQUEST,
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
    await axios.delete(URL_SERVER + `/planes/${id}`, config);
    dispatch({
      type: PLANES_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PLANES_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPlan = (plan) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PLANES_CREATE_REQUEST,
      });
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
      //create bodega
      const { data } = await axios.post(
        URL_SERVER + "/planes/",
        plan,
        config
      );
      dispatch({
        type: PLANES_CREATE_SUCCESS,
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
      dispatch(listaRegistros({
        keyword: plan.keyword,
        pageNumber: plan.pageCurrent,
        pageSize: plan.pageNumberCurrent,
        //id_permitido:plan.id_permitido,
      }));
    } catch (error) {
      dispatch({
        type: PLANES_CREATE_FAIL,
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
export const updatePlan =(plan) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PLANES_UPDATE_REQUEST,
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
        URL_SERVER + `/planes/${plan.id}`,
        plan,
        config
      );
      dispatch({
        type: PLANES_UPDATE_SUCCESS,
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
      dispatch(listaRegistros({
        keyword: plan.keyword,
        pageNumber: plan.pageCurrent,
        pageSize: plan.pageNumberCurrent,
        //id_permitido:plan.id_permitido,
      }));
      Toast.fire({
        showCloseButton: true,
        icon: "success",
        title: "Editado correctamente",
      });
    } catch (error) {
      dispatch({
        type: PLANES_UPDATE_FAIL,
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
export const listPlanesDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PLANES_DETAILS_REQUEST });
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
    const { data } = await axios.get(URL_SERVER + `/planes/${id}`, config);
    dispatch({
      type: PLANES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLANES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: PLANES_DETAILS_RESET });
};