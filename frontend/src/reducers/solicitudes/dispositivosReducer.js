import {
    DISPOSITIVOS_LIST_RESET,
    DISPOSITIVOS_CREATE_FAIL,
    DISPOSITIVOS_DELETE_REQUEST,
    DISPOSITIVOS_CREATE_REQUEST,
    DISPOSITIVOS_CREATE_SUCCESS,
    DISPOSITIVOS_DELETE_FAIL,
    DISPOSITIVOS_DELETE_RESET,
    DISPOSITIVOS_DELETE_SUCCESS,
    DISPOSITIVOS_DETAILS_FAIL,
    DISPOSITIVOS_DETAILS_REQUEST,
    DISPOSITIVOS_DETAILS_RESET,
    DISPOSITIVOS_DETAILS_SUCCESS,
    DISPOSITIVOS_LIST_FAIL,
    DISPOSITIVOS_LIST_REQUEST,
    DISPOSITIVOS_LIST_SUCCESS,
    DISPOSITIVOS_UPDATE_FAIL,
    DISPOSITIVOS_UPDATE_REQUEST,
    DISPOSITIVOS_UPDATE_RESET,
    DISPOSITIVOS_UPDATE_SUCCESS
} from '../../constants/dispositivosConstants'
export const dispositivosListReducer = (
    state = { loading: true, dispositivos: [] },
    action
) => {
    switch (action.type) {
        case DISPOSITIVOS_LIST_REQUEST:
            return { loading: true, dispositivos: [] };
        case DISPOSITIVOS_LIST_SUCCESS:
            return {
                loading: false,
                dispositivos: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case DISPOSITIVOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        case DISPOSITIVOS_LIST_RESET:
            return { dispositivos: [] };
        default:
            return state;
    }
};

export const dispositivosCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPOSITIVOS_CREATE_REQUEST:
            return { loading: true };
        case DISPOSITIVOS_CREATE_SUCCESS:
            return { loading: false, success: true };
        case DISPOSITIVOS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const dispositivosDetailsReducer = (state = { dispositivos: {} }, action) => {
    switch (action.type) {
        case DISPOSITIVOS_DETAILS_REQUEST:
            return { ...state, loading: true };
        case DISPOSITIVOS_DETAILS_SUCCESS:
            return { loading: false, dispositivos: action.payload };
        case DISPOSITIVOS_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case DISPOSITIVOS_DETAILS_RESET:
            return { dispositivos: {} };
        default:
            return state;
    }
};

export const dispositivosUpdateReducer = (state = { dispositivos: {} }, action) => {
    switch (action.type) {
        case DISPOSITIVOS_UPDATE_REQUEST:
            return { loading: true };
        case DISPOSITIVOS_UPDATE_SUCCESS:
            return { loading: false, success: true, dispositivos: action.payload };
        case DISPOSITIVOS_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case DISPOSITIVOS_UPDATE_RESET:
            return { dispositivos: {} };
        default:
            return state;
    }
};

export const dispositivosDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DISPOSITIVOS_DELETE_REQUEST:
            return { loading: true};
        case DISPOSITIVOS_DELETE_SUCCESS:
            return { loading: false, success: true};
        case DISPOSITIVOS_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case DISPOSITIVOS_DELETE_RESET:
            return {};
        default:
            return state;
    }
};


