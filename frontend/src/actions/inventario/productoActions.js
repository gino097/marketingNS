import axios from "axios";
import {
  PRODUCTO_CREATE_FAIL,
  PRODUCTO_CREATE_REQUEST,
  PRODUCTO_CREATE_SUCCESS,
  //PRODUCTO_DELETE_FAIL,
  PRODUCTO_DELETE_REQUEST,
  PRODUCTO_DELETE_SUCCESS,
  PRODUCTO_DETAILS_FAIL,
  PRODUCTO_DETAILS_REQUEST,
  PRODUCTO_DETAILS_RESET,
  PRODUCTO_DETAILS_SUCCESS,
  PRODUCTO_LIST_FAIL,
  PRODUCTO_LIST_REQUEST,
  PRODUCTO_LIST_SUCCESS,
  PRODUCTO_UPDATE_FAIL,
  PRODUCTO_UPDATE_REQUEST,
  PRODUCTO_UPDATE_SUCCESS,
  PRODUCTO_ACTIVATE_REQUEST,
  PRODUCTO_ACTIVATE_SUCCESS,
  PRODUCTO_ACTIVATE_FAIL
} from "../../constants/productoConstants";
import {
  REGION_LIST_FAIL,
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
} from "../../constants/regionConstants";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

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

export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize, id_permitido} = parameters;
    dispatch({
      type: PRODUCTO_LIST_REQUEST,
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
      //`/usuario/company?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
       `/producto/listado?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    dispatch({
      type: PRODUCTO_LIST_SUCCESS,
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
      type: PRODUCTO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listaRegistrosForm = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize, ciudad } = parameters;
    dispatch({
      type: PRODUCTO_LIST_REQUEST,
    });

    const { data } = await axios.get(
      URL_SERVER +
      //`/usuario/company?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
       `/detalle/listado?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}&ciudad=${ciudad}`,
    );
    dispatch({
      type: PRODUCTO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProducto = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTO_DELETE_REQUEST,
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
    await axios.delete(URL_SERVER + `/producto/${id}`, config);
    dispatch({
      type: PRODUCTO_DELETE_SUCCESS,
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
      type: PRODUCTO_ACTIVATE_FAIL,
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
export const activateProducto =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCTO_ACTIVATE_REQUEST,
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
        URL_SERVER + `/producto/activate/${id}`,
        config
      );
      dispatch({
        type: PRODUCTO_ACTIVATE_SUCCESS,
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
        type: PRODUCTO_ACTIVATE_FAIL,
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
export const createProducto = (producto, parametros) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTO_CREATE_REQUEST,
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
        id_permitido:parametros.id_permitido
      },
    };
    const { data } = await axios.post(
      URL_SERVER + "/producto/",
      producto, config
    );
    dispatch({
      type: PRODUCTO_CREATE_SUCCESS,
      payload: data,
    });
    dispatch(listaRegistros({
      keyword: parametros.keyword,
      pageNumber: parametros.pageCurrent,
      pageSize: parametros.pageNumberCurrent,
      id_permitido: parametros.id_permitido
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
      type: PRODUCTO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    //console.log(error.response.status);
    //console.log(error.message);

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
/*
    if(error.response.status===409){
      Toast.fire({
        showCloseButton: true,
        icon: "error",
        title: "Dato repetido",
      });
    }
    else{*/
      Toast.fire({
        showCloseButton: true,
        icon: "error",
        title: "Error al crear",
      });
  //}
    
  }
};

export const updateProducto =
  (producto) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCTO_UPDATE_REQUEST,
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
          id_permitido: producto.id_permitido
        },
      };

      //update product
      const { data } = await axios.put(
        URL_SERVER + `/producto/${producto.id}`,
        producto,
        config
      );
      dispatch({
        type: PRODUCTO_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch(listaRegistros({
        keyword: producto.keyword,
        pageNumber: producto.pageCurrent,
        pageSize: producto.pageNumberCurrent,
        id_permitido: producto.id_permitido
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
        type: PRODUCTO_UPDATE_FAIL,
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
export const updateProductoImg =
  (producto, parametros) => async (dispatch, getState) => {
    console.log(parametros);
    try {
      dispatch({
        type: PRODUCTO_UPDATE_REQUEST,
      });

      //get user from state
      const {
        userLogin: { userInfo },
      } = getState();
      //headers
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
          id_permitido: parametros.id_permitido
        },
      };

      //update product
      console.log(parametros.id_permitido);
      const { data } = await axios.put(
        URL_SERVER + `/producto/img/${parametros.id}`,
        producto,
        config
      );
      dispatch({
        type: PRODUCTO_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch(listaRegistros({
        keyword: parametros.keyword,
        pageNumber: parametros.pageCurrent,
        pageSize: parametros.pageNumberCurrent,
        id_permitido: parametros.id_permitido
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
      console.log(error);
      dispatch({
        type: PRODUCTO_UPDATE_FAIL,
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
export const listProdcutoDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTO_DETAILS_REQUEST });

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
    const { data } = await axios.get(URL_SERVER + `/producto/${id}`, config);
    dispatch({
      type: PRODUCTO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const clearData = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCTO_DETAILS_RESET });
};