import axios from "axios";
import {
  DASHBOARD_LIST_FAIL,
  DASHBOARD_LIST_REQUEST,
  DASHBOARD_LIST_SUCCESS,
  DASHBOARDC2_LIST_FAIL,
  DASHBOARDC2_LIST_REQUEST,
  DASHBOARDC2_LIST_SUCCESS,
  DASHBOARDC3_LIST_FAIL,
  DASHBOARDC3_LIST_REQUEST,
  DASHBOARDC3_LIST_SUCCESS,
  DASHBOARDC4_LIST_FAIL,
  DASHBOARDC4_LIST_REQUEST,
  DASHBOARDC4_LIST_SUCCESS,
  DASHBOARDLINEDATA_LIST_FAIL,
  DASHBOARDLINEDATA_LIST_REQUEST,
  DASHBOARDLINEDATA_LIST_SUCCESS,
  DASHBOARDBARDATA_LIST_FAIL,
  DASHBOARDBARDATA_LIST_REQUEST,
  DASHBOARDBARDATA_LIST_SUCCESS,
} from "../../constants/dashboardConstants";
import { URL_SERVER } from "../../constants/serverUrl";
export const listDashboardSoliPendientes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARD_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:[14, 15],
      },
    };
    
    const { data } = await axios.get(
      URL_SERVER +
      `/dashboard/solipendientes`,
      config
    );
    dispatch({
      type: DASHBOARD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listDashboardCuadro2 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARDC2_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:[14, 15],
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/dashboard/soliaprobadas`,
      config
    );
    dispatch({
      type: DASHBOARDC2_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARDC2_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listDashboardCuadro3 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARDC3_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:[14, 15],
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/dashboard/solirechazadas`,
      config
    );
    dispatch({
      type: DASHBOARDC3_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARDC3_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listDashboardCuadro4 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARDC4_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:[14, 15],
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/dashboard/solicitudes`,
      config
    );
    dispatch({
      type: DASHBOARDC4_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARDC4_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const lineChartDataSoli = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DASHBOARDLINEDATA_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        id_permitido:[14, 15],
      },
    };
    const { data } = await axios.get(
      URL_SERVER +
      `/dashboard/solicitudesData`,
      config
    );
    dispatch({
      type: DASHBOARDLINEDATA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARDLINEDATA_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};