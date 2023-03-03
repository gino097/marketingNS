import {
    REPORTES_LIST_RESET,
    REPORTES_CREATE_FAIL,
    REPORTES_DELETE_REQUEST,
    REPORTES_CREATE_REQUEST,
    REPORTES_CREATE_SUCCESS,
    REPORTES_DELETE_FAIL,
    REPORTES_DELETE_RESET,
    REPORTES_DELETE_SUCCESS,
    REPORTES_DETAILS_FAIL,
    REPORTES_DETAILS_REQUEST,
    REPORTES_DETAILS_RESET,
    REPORTES_DETAILS_SUCCESS,
    REPORTES_LIST_FAIL,
    REPORTES_LIST_REQUEST,
    REPORTES_LIST_SUCCESS,
    REPORTES_UPDATE_FAIL,
    REPORTES_UPDATE_REQUEST,
    REPORTES_UPDATE_RESET,
    REPORTES_UPDATE_SUCCESS
} from '../../constants/reportesConstants'
export const reportesListReducer = (
    state = { loading: true, bodega: [] },
    action
) => {
    switch (action.type) {
        case REPORTES_LIST_REQUEST:
            return { loading: true, bodega: [] };
        case REPORTES_LIST_SUCCESS:
            return {
                loading: false,
                bodegas: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case REPORTES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case REPORTES_LIST_RESET:
            return { bodega: [] };
        default:
            return state;
    }
};

export const reportesCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORTES_CREATE_REQUEST:
            return { loading: true };
        case REPORTES_CREATE_SUCCESS:
            return { loading: false, success: true };
        case REPORTES_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const reportesDetailsReducer = (state = { bodega: {} }, action) => {
    switch (action.type) {
        case REPORTES_DETAILS_REQUEST:
            return { ...state, loading: true };
        case REPORTES_DETAILS_SUCCESS:
            return { loading: false, bodega: action.payload };
        case REPORTES_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case REPORTES_DETAILS_RESET:
            return { bodega: {} };
        default:
            return state;
    }
};

export const reportesUpdateReducer = (state = { bodega: {} }, action) => {
    switch (action.type) {
        case REPORTES_UPDATE_REQUEST:
            return { loading: true };
        case REPORTES_UPDATE_SUCCESS:
            return { loading: false, success: true, bodega: action.payload };
        case REPORTES_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case REPORTES_UPDATE_RESET:
            return { bodega: {} };
        default:
            return state;
    }
};

export const reportesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORTES_DELETE_REQUEST:
            return { loading: true};
        case REPORTES_DELETE_SUCCESS:
            return { loading: false, success: true};
        case REPORTES_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case REPORTES_DELETE_RESET:
            return {};
        default:
            return state;
    }
};