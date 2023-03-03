import axios from "axios";
import {
  USUARIO_CREATE_FAIL,
  USUARIO_CREATE_REQUEST,
  USUARIO_CREATE_SUCCESS,
  USUARIO_DELETE_FAIL,
  USUARIO_DELETE_REQUEST,
  USUARIO_DELETE_SUCCESS,
  USUARIO_DETAILS_FAIL,
  USUARIO_DETAILS_REQUEST,
  USUARIO_DETAILS_RESET,
  USUARIO_DETAILS_SUCCESS,
  USUARIO_LIST_FAIL,
  USUARIO_LIST_REQUEST,
  USUARIO_LIST_SUCCESS,
  USUARIO_UPDATE_FAIL,
  USUARIO_UPDATE_REQUEST,
  USUARIO_UPDATE_SUCCESS,
  USUARIO_ACTIVATE_REQUEST,
  USUARIO_ACTIVATE_SUCCESS,
  USUARIO_ACTIVATE_FAIL
} from "../../constants/usuarioConstants";
import {
  PERFIL_LIST_FAIL,
  PERFIL_LIST_REQUEST,
  PERFIL_LIST_SUCCESS,
} from "../../constants/perfilConstants";
import {
  REGION_LIST_FAIL,
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
} from "../../constants/regionConstants";
import {
  CLAVE_UPDATE_REQUEST,
  CLAVE_UPDATE_SUCCESS,
  CLAVE_UPDATE_FAIL
} from "../../constants/claveConstants";
import {
  COMBO_USUARIOS_LIST_FAIL,
  COMBO_USUARIOS_LIST_REQUEST,
  COMBO_USUARIOS_LIST_SUCCESS,
} from "../../constants/comboUsuariosConstants";
import {
  SOLICITUDM_CREATE_FAIL,
  SOLICITUDM_CREATE_REQUEST,
  SOLICITUDM_CREATE_SUCCESS,
  SOLICITUDM_DETAILS_RESET,
} from "../../constants/solicitudMaterialesConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

export const createSolicitud = (userData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOLICITUDM_CREATE_REQUEST,
    });
    //console.log(userData)
    const { data } = await axios.post(
      URL_SERVER + "/solicitudproducto/",
      userData
    );
    dispatch({
      type: SOLICITUDM_CREATE_SUCCESS,
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
      type: SOLICITUDM_CREATE_FAIL,
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
export const createReg = (pData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOLICITUDM_CREATE_REQUEST,
    });
    //console.log(pData)
    const { data } = await axios.post(
      URL_SERVER + "/solicitudproducto/reg",
      pData
    );
    dispatch({
      type: SOLICITUDM_CREATE_SUCCESS,
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
      type: SOLICITUDM_CREATE_FAIL,
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

export const listaComboRegion = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REGION_LIST_REQUEST,
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
      `/usuario/regiones`,
      config
    );
    dispatch({
      type: REGION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listaComboRegionNT = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REGION_LIST_REQUEST,
    });

    const { data } = await axios.get(
      URL_SERVER +
      `/detalle/regiones`,
    );
    dispatch({
      type: REGION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: USUARIO_LIST_REQUEST,
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
      `/usuario/company?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      // `/producto/?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`
      config
    );
    dispatch({
      type: USUARIO_LIST_SUCCESS,
      payload: data,
    });
    if(data.Message==="jwt expired")
    { 
      //console.log(data); 
      localStorage.removeItem("userInfo");
      dispatch({ type: USER_LOGOUT });
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: USER_LOGOUT });
    }
  } catch (error) {
    dispatch({
      type: USUARIO_LIST_FAIL,
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
      type: USUARIO_DELETE_REQUEST,
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
      type: USUARIO_DELETE_SUCCESS,
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
      type: USUARIO_ACTIVATE_FAIL,
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
export const activateCooperativa =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USUARIO_ACTIVATE_REQUEST,
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
        URL_SERVER + `/usuario/activate/${id}`,
        config
      );
      dispatch({
        type: USUARIO_ACTIVATE_SUCCESS,
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
        type: USUARIO_ACTIVATE_FAIL,
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
  /*
export const activateCooperativa = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USUARIO_ACTIVATE_REQUEST,
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
    console.log("id para actualziar: ", id)
    //api call to delete product
    await axios.put(URL_SERVER + `/usuario/activate/${id}`, config);
    dispatch({
      type: USUARIO_ACTIVATE_SUCCESS,
    });
    
  } catch (error) {
    dispatch({
      type: USUARIO_ACTIVATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};*/

export const createCooperativa = (cooperativa) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USUARIO_CREATE_REQUEST,
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
      type: USUARIO_CREATE_SUCCESS,
      payload: data,
    });
    dispatch(listaRegistros({
      keyword: cooperativa.keyword,
      pageNumber: cooperativa.pageCurrent,
      pageSize: cooperativa.pageNumberCurrent,
      id_permitido: cooperativa.id_permitido
    }));
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
      type: USUARIO_CREATE_FAIL,
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
        type: USUARIO_UPDATE_REQUEST,
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
        type: USUARIO_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch(listaRegistros({
        keyword: cooperativa.keyword,
        pageNumber: cooperativa.pageCurrent,
        pageSize: cooperativa.pageNumberCurrent,
        id_permitido: cooperativa.id_permitido
      }));
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
        type: USUARIO_UPDATE_FAIL,
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
    dispatch({ type: USUARIO_DETAILS_REQUEST });

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
      type: USUARIO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USUARIO_DETAILS_FAIL,
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
  dispatch({ type: USUARIO_DETAILS_RESET });
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
export const listaComboUsuarios = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMBO_USUARIOS_LIST_REQUEST,
    });
    const { data } = await axios.get(
      URL_SERVER +
      `/usuario/combousuarios`
    );
    //console.log("Data usuarios: ", data)
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
