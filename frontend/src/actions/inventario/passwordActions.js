import axios from "axios";
import {
  PASSWORD_CREATE_FAIL,
  PASSWORD_CREATE_REQUEST,
  PASSWORD_CREATE_SUCCESS,
  PASSWORD_DELETE_FAIL,
  PASSWORD_DELETE_REQUEST,
  PASSWORD_DELETE_SUCCESS,
  PASSWORD_DETAILS_FAIL,
  PASSWORD_DETAILS_REQUEST,
  PASSWORD_DETAILS_RESET,
  PASSWORD_DETAILS_SUCCESS,
  PASSWORD_LIST_FAIL,
  PASSWORD_LIST_REQUEST,
  PASSWORD_LIST_SUCCESS,
  PASSWORD_UPDATE_FAIL,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
} from "../../constants/passwordConstants";
import {
  CLAVE_UPDATE_REQUEST,
  CLAVE_UPDATE_SUCCESS,
  CLAVE_UPDATE_FAIL
} from "../../constants/claveConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

import { 
  PERFIL_LIST_REQUEST, 
  PERFIL_LIST_SUCCESS,
  PERFIL_LIST_FAIL
} from "../../constants/perfilConstants";

export const recuperarPassword = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PASSWORD_LIST_REQUEST,
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
      `/password/recuperarpassword`,
      config
    );
    dispatch({
      type: PASSWORD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PASSWORD_LIST_REQUEST,
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
    const { keyword, pageNumber, pageSize } = parameters;
    const { data } = await axios.get(
      URL_SERVER +
      `/usuario/company?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    dispatch({
      type: PASSWORD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCooperativa = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PASSWORD_DELETE_REQUEST,
    });

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

    //api call to delete product
    await axios.delete(URL_SERVER + `/usuario/${id}`, config);
    dispatch({
      type: PASSWORD_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCooperativa = (cooperativa) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PASSWORD_CREATE_REQUEST,
    });

    //get cooperativa from state
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

    //create cooperativa
    const { data } = await axios.post(
      URL_SERVER + "/usuario/",
      cooperativa,
      config
    );
    dispatch({
      type: PASSWORD_CREATE_SUCCESS,
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
      title: "Creado correctamente",
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_CREATE_FAIL,
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

export const updateCooperativa =
  (cooperativa) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PASSWORD_UPDATE_REQUEST,
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
        URL_SERVER + `/usuario/${cooperativa.id}`,
        cooperativa,
        config
      );
      dispatch({
        type: PASSWORD_UPDATE_SUCCESS,
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
    } catch (error) {
      dispatch({
        type: PASSWORD_UPDATE_FAIL,
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
export const listCooperativaDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PASSWORD_DETAILS_REQUEST });

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
    const { data } = await axios.get(URL_SERVER + `/usuario/${id}`, config);
    dispatch({
      type: PASSWORD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listaRegistrosPerfil = (parameters) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PERFIL_LIST_REQUEST,
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
    const { keyword, pageNumber, pageSize } = parameters;
    const { data } = await axios.get(
      URL_SERVER +
      `/perfil/perfiles?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    dispatch({
      type: PERFIL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PERFIL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: PASSWORD_DETAILS_RESET });
};

export const updateClave = (parametros) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLAVE_UPDATE_REQUEST,
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
    const { data } = await axios.put(URL_SERVER + `/usuario/cambiar_clave?clave=${parametros.clave}&clave_anterior=${parametros.clave_anterior}`,
      parametros,
      config
    );
    dispatch({
      type: CLAVE_UPDATE_SUCCESS,
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
      title: "Clave actualizada",
    });
  } catch (error) {
    dispatch({
      type: CLAVE_UPDATE_FAIL,
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
      title: "Error al cambiar clave",
    });
  }
};
