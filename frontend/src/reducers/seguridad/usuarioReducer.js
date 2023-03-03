import {
    USUARIO_LIST_RESET,
    USUARIO_CREATE_FAIL,
    USUARIO_DELETE_REQUEST,
    USUARIO_CREATE_REQUEST,
    USUARIO_CREATE_SUCCESS,
    USUARIO_DELETE_FAIL,
    USUARIO_DELETE_RESET,
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
    USUARIO_UPDATE_RESET,
    USUARIO_UPDATE_SUCCESS,
    USUARIO_ACTIVATE_REQUEST,
    USUARIO_ACTIVATE_SUCCESS,
    USUARIO_ACTIVATE_FAIL,
    USUARIO_ACTIVATE_RESET
} from '../../constants/usuarioConstants'
export const cooperativaListReducer = (
    state = { loading: true, cooperativa: [] },
    action
) => {
    switch (action.type) {
        case USUARIO_LIST_REQUEST:
            return { loading: true, cooperativa: [] };
        case USUARIO_LIST_SUCCESS:
            return {
                loading: false,
                cooperativas: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case USUARIO_LIST_FAIL:
            return { loading: false, error: action.payload };
        case USUARIO_LIST_RESET:
            return { cooperativa: [] };
        default:
            return state;
    }
};

export const cooperativaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USUARIO_CREATE_REQUEST:
            return { loading: true };
        case USUARIO_CREATE_SUCCESS:
            return { loading: false, success: true };
        case USUARIO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const cooperativaDetailsReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case USUARIO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USUARIO_DETAILS_SUCCESS:
            return { loading: false, cooperativa: action.payload };
        case USUARIO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case USUARIO_DETAILS_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const cooperativaUpdateReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case USUARIO_UPDATE_REQUEST:
            return { loading: true };
        case USUARIO_UPDATE_SUCCESS:
            return { loading: false, success: true, cooperativa: action.payload };
        case USUARIO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case USUARIO_UPDATE_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const cooperativaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USUARIO_DELETE_REQUEST:
            return { loading: true};
        case USUARIO_DELETE_SUCCESS:
            return { loading: false, success: true};
        case USUARIO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case USUARIO_DELETE_RESET:
            return {};
        default:
            return state;
    }
};
export const cooperativaActivateReducer = (state = {}, action) => {
    switch (action.type) {
        case USUARIO_ACTIVATE_REQUEST:
            return { loading: true};
        case USUARIO_ACTIVATE_SUCCESS:
            return { loading: false, success: true};
        case USUARIO_ACTIVATE_FAIL:
            return { loading: false, error: action.payload };
        case USUARIO_ACTIVATE_RESET:
            return {};
        default:
            return state;
    }
};



