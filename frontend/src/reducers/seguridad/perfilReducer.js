import {
    PERFIL_LIST_RESET,
    PERFIL_CREATE_FAIL,
    PERFIL_DELETE_REQUEST,
    PERFIL_CREATE_REQUEST,
    PERFIL_CREATE_SUCCESS,
    PERFIL_DELETE_FAIL,
    PERFIL_DELETE_RESET,
    PERFIL_DELETE_SUCCESS,
    PERFIL_DETAILS_FAIL,
    PERFIL_DETAILS_REQUEST,
    PERFIL_DETAILS_RESET,
    PERFIL_DETAILS_SUCCESS,
    PERFIL_LIST_FAIL,
    PERFIL_LIST_REQUEST,
    PERFIL_LIST_SUCCESS,
    PERFIL_UPDATE_FAIL,
    PERFIL_UPDATE_REQUEST,
    PERFIL_UPDATE_RESET,
    PERFIL_UPDATE_SUCCESS
} from '../../constants/perfilConstants'
export const perfilListReducer = (
    state = { loading: true, perfiles: [] },
    action
) => {
    switch (action.type) {
        case PERFIL_LIST_REQUEST:
            return { loading: true, perfiles: [] };
        case PERFIL_LIST_SUCCESS:
            return {
                loading: false,
                perfiles: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case PERFIL_LIST_FAIL:
            return { loading: false, error: action.payload };
        case PERFIL_LIST_RESET:
            return { perfiles: [] };
        default:
            return state;
    }
};

export const perfilCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PERFIL_CREATE_REQUEST:
            return { loading: true };
        case PERFIL_CREATE_SUCCESS:
            return { loading: false, success: true };
        case PERFIL_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const perfilDetailsReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case PERFIL_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PERFIL_DETAILS_SUCCESS:
            return { loading: false, cooperativa: action.payload };
        case PERFIL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case PERFIL_DETAILS_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const perfilUpdateReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case PERFIL_UPDATE_REQUEST:
            return { loading: true };
        case PERFIL_UPDATE_SUCCESS:
            return { loading: false, success: true, cooperativa: action.payload };
        case PERFIL_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PERFIL_UPDATE_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const perfilDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PERFIL_DELETE_REQUEST:
            return { loading: true};
        case PERFIL_DELETE_SUCCESS:
            return { loading: false, success: true};
        case PERFIL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PERFIL_DELETE_RESET:
            return {};
        default:
            return state;
    }
};


