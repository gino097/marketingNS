import {
    ASIGNACIONES_LIST_RESET,
    ASIGNACIONES_CREATE_FAIL,
    ASIGNACIONES_DELETE_REQUEST,
    ASIGNACIONES_CREATE_REQUEST,
    ASIGNACIONES_CREATE_SUCCESS,
    ASIGNACIONES_DELETE_FAIL,
    ASIGNACIONES_DELETE_RESET,
    ASIGNACIONES_DELETE_SUCCESS,
    ASIGNACIONES_DETAILS_FAIL,
    ASIGNACIONES_DETAILS_REQUEST,
    ASIGNACIONES_DETAILS_RESET,
    ASIGNACIONES_DETAILS_SUCCESS,
    ASIGNACIONES_LIST_FAIL,
    ASIGNACIONES_LIST_REQUEST,
    ASIGNACIONES_LIST_SUCCESS,
    ASIGNACIONES_UPDATE_FAIL,
    ASIGNACIONES_UPDATE_REQUEST,
    ASIGNACIONES_UPDATE_RESET,
    ASIGNACIONES_UPDATE_SUCCESS
} from '../../constants/asignacionesConstants'
export const asignacionesListReducer = (
    state = { loading: true, asignaciones: [] },
    action
) => {
    switch (action.type) {
        case ASIGNACIONES_LIST_REQUEST:
            return { loading: true, asignaciones: [] };
        case ASIGNACIONES_LIST_SUCCESS:
            return {
                loading: false,
                asignaciones: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case ASIGNACIONES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case ASIGNACIONES_LIST_RESET:
            return { asignaciones: [] };
        default:
            return state;
    }
};

export const asignacionesCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ASIGNACIONES_CREATE_REQUEST:
            return { loading: true };
        case ASIGNACIONES_CREATE_SUCCESS:
            return { loading: false, success: true };
        case ASIGNACIONES_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const asignacionesDetailsReducer = (state = { asignaciones: {} }, action) => {
    switch (action.type) {
        case ASIGNACIONES_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ASIGNACIONES_DETAILS_SUCCESS:
            return { loading: false, asignaciones: action.payload };
        case ASIGNACIONES_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case ASIGNACIONES_DETAILS_RESET:
            return { asignaciones: {} };
        default:
            return state;
    }
};

export const asignacionesUpdateReducer = (state = { asignaciones: {} }, action) => {
    switch (action.type) {
        case ASIGNACIONES_UPDATE_REQUEST:
            return { loading: true };
        case ASIGNACIONES_UPDATE_SUCCESS:
            return { loading: false, success: true, asignaciones: action.payload };
        case ASIGNACIONES_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ASIGNACIONES_UPDATE_RESET:
            return { asignaciones: {} };
        default:
            return state;
    }
};

export const asignacionesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ASIGNACIONES_DELETE_REQUEST:
            return { loading: true};
        case ASIGNACIONES_DELETE_SUCCESS:
            return { loading: false, success: true};
        case ASIGNACIONES_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case ASIGNACIONES_DELETE_RESET:
            return {};
        default:
            return state;
    }
};