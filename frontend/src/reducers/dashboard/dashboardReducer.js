import {
    DASHBOARD_LIST_RESET,
    DASHBOARD_LIST_FAIL,
    DASHBOARD_LIST_REQUEST,
    DASHBOARD_LIST_SUCCESS,
    DASHBOARDC2_LIST_RESET,
    DASHBOARDC2_LIST_FAIL,
    DASHBOARDC2_LIST_REQUEST,
    DASHBOARDC2_LIST_SUCCESS,
    DASHBOARDC3_LIST_RESET,
    DASHBOARDC3_LIST_FAIL,
    DASHBOARDC3_LIST_REQUEST,
    DASHBOARDC3_LIST_SUCCESS,
    DASHBOARDC4_LIST_RESET,
    DASHBOARDC4_LIST_FAIL,
    DASHBOARDC4_LIST_REQUEST,
    DASHBOARDC4_LIST_SUCCESS,
    DASHBOARDLINEDATA_LIST_FAIL,
    DASHBOARDLINEDATA_LIST_REQUEST,
    DASHBOARDLINEDATA_LIST_SUCCESS,
    DASHBOARDLINEDATA_LIST_RESET,
} from '../../constants/dashboardConstants'
export const dashboardListReducer = (
    state = { loading: true, datos_dashboard: [] },
    action
) => {
    switch (action.type) {
        case DASHBOARD_LIST_REQUEST:
            return { loading: true, datos_dashboard: [] };
        case DASHBOARD_LIST_SUCCESS:
            return {
                loading: false,
                datos_dashboard: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DASHBOARD_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DASHBOARD_LIST_RESET:
            return { datos_dashboard: [] };
        default:
            return state;
    }
};
export const dashboardLineDataReducer = (
    state = { loading: true, datos_linedata: [] },
    action
) => {
    switch (action.type) {
        case DASHBOARDLINEDATA_LIST_REQUEST:
            return { loading: true, datos_linedata: [] };
        case DASHBOARDLINEDATA_LIST_SUCCESS:
            return {
                loading: false,
                datos_linedata: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DASHBOARDLINEDATA_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DASHBOARDLINEDATA_LIST_RESET:
            return { datos_linedata: [] };
        default:
            return state;
    }
};
export const dashboardCuadro2Reducer = (
    state = { loading: true, datos_dashboardc2: [] },
    action
) => {
    switch (action.type) {
        case DASHBOARDC2_LIST_REQUEST:
            return { loading: true, datos_dashboardc2: [] };
        case DASHBOARDC2_LIST_SUCCESS:
            return {
                loading: false,
                datos_dashboardc2: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DASHBOARDC2_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DASHBOARDC2_LIST_RESET:
            return { datos_dashboardc2: [] };
        default:
            return state;
    }
};
export const dashboardCuadro3Reducer = (
    state = { loading: true, datos_dashboardc3: [] },
    action
) => {
    switch (action.type) {
        case DASHBOARDC3_LIST_REQUEST:
            return { loading: true, datos_dashboardc3: [] };
        case DASHBOARDC3_LIST_SUCCESS:
            return {
                loading: false,
                datos_dashboardc3: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DASHBOARDC3_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DASHBOARDC3_LIST_RESET:
            return { datos_dashboardc3: [] };
        default:
            return state;
    }
};
export const dashboardCuadro4Reducer = (
    state = { loading: true, datos_dashboardc4: [] },
    action
) => {
    switch (action.type) {
        case DASHBOARDC4_LIST_REQUEST:
            return { loading: true, datos_dashboardc4: [] };
        case DASHBOARDC4_LIST_SUCCESS:
            return {
                loading: false,
                datos_dashboardc4: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DASHBOARDC4_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DASHBOARDC4_LIST_RESET:
            return { datos_dashboardc4: [] };
        default:
            return state;
    }
};