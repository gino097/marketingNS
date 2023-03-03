import axios from "axios";
import {
  COMBO_PLANES_LIST_FAIL,
  COMBO_PLANES_LIST_REQUEST,
  COMBO_PLANES_LIST_SUCCESS,
  
} from "../../constants/comboPlanesConstants";
import {
  ASIGNACIONES_CREATE_FAIL,
  ASIGNACIONES_CREATE_REQUEST,
  ASIGNACIONES_CREATE_SUCCESS,
  ASIGNACIONES_LIST_REQUEST,
  ASIGNACIONES_LIST_SUCCESS,
  ASIGNACIONES_LIST_FAIL,
  ASIGNACIONES_ACTIVATE_REQUEST,
  ASIGNACIONES_ACTIVATE_SUCCESS,
  ASIGNACIONES_ACTIVATE_FAIL,
  ASIGNACIONES_DELETE_REQUEST,
  ASIGNACIONES_DELETE_SUCCESS
}from "../../constants/asignacionesConstants"
import { USER_LOGOUT, USER_DETAILS_RESET } from "../../constants/loginConstants";
import { URL_SERVER } from "../../constants/serverUrl";
import Swal from "sweetalert2";

export const listaRegistros = (parameters) => async (dispatch, getState) => {
  try {
    const { keyword, pageNumber, pageSize} = parameters;
    dispatch({
      type: ASIGNACIONES_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        //id_permitido:id_permitido,
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/asignacion/asignaciones?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      config
    );
    dispatch({
      type: ASIGNACIONES_LIST_SUCCESS,
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
  } catch (error) {
    dispatch({
      type: ASIGNACIONES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createAsignacion = (informacion) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ASIGNACIONES_CREATE_REQUEST,
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
    //create asignacion
    const { data } = await axios.post(
      URL_SERVER + "/asignacion/",
      informacion,
      config
    );
    dispatch({
      type: ASIGNACIONES_CREATE_SUCCESS,
      payload: data,
    });
    dispatch(listaRegistros({
      keyword: informacion.keyword,
      pageNumber: informacion.pageCurrent,
      pageSize: informacion.pageNumberCurrent,
      //id_permitido:bodega.id_permitido,
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
      type: ASIGNACIONES_CREATE_FAIL,
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
/*export const createAsignacion = (informacion) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ASIGNACIONES_CREATE_REQUEST,
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
      URL_SERVER + "/asignacion/",
      informacion,
      config
    );
    dispatch({
      type: ASIGNACIONES_CREATE_SUCCESS,
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
    dispatch(listaRegistros({
      keyword: informacion.keyword,
      pageNumber: informacion.pageCurrent,
      pageSize: informacion.pageNumberCurrent,
      //id_permitido: informacion.id_permitido
    }));
  } catch (error) {
    dispatch({
      type: ASIGNACIONES_CREATE_FAIL,
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
    dispatch(listaRegistros({
      keyword: informacion.keyword,
      pageNumber: informacion.pageCurrent,
      pageSize: informacion.pageNumberCurrent,
      //id_permitido: informacion.id_permitido
    }));
  }
};*/

export const listaComboPlanes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMBO_PLANES_LIST_REQUEST,
    });
    const { data } = await axios.get(
      URL_SERVER +
      `/usuario/comboplanes`
    );
    //console.log("Data planes: ", data)
    dispatch({
      type: COMBO_PLANES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMBO_PLANES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const activateAsignacion =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ASIGNACIONES_ACTIVATE_REQUEST,
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
        URL_SERVER + `/asignacion/activate/${id}`,
        config
      );
      dispatch({
        type: ASIGNACIONES_ACTIVATE_SUCCESS,
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
        type: ASIGNACIONES_ACTIVATE_FAIL,
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
  export const deleteAsignacion = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ASIGNACIONES_DELETE_REQUEST,
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
      await axios.delete(URL_SERVER + `/asignacion/${id}`, config);
      dispatch({
        type: ASIGNACIONES_DELETE_SUCCESS,
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
        type: ASIGNACIONES_ACTIVATE_FAIL,
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
