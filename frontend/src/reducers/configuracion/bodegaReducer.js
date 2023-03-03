import {
    BODEGA_LIST_RESET,
    BODEGA_CREATE_FAIL,
    BODEGA_DELETE_REQUEST,
    BODEGA_CREATE_REQUEST,
    BODEGA_CREATE_SUCCESS,
    BODEGA_DELETE_FAIL,
    BODEGA_DELETE_RESET,
    BODEGA_DELETE_SUCCESS,
    BODEGA_DETAILS_FAIL,
    BODEGA_DETAILS_REQUEST,
    BODEGA_DETAILS_RESET,
    BODEGA_DETAILS_SUCCESS,
    BODEGA_LIST_FAIL,
    BODEGA_LIST_REQUEST,
    BODEGA_LIST_SUCCESS,
    BODEGA_UPDATE_FAIL,
    BODEGA_UPDATE_REQUEST,
    BODEGA_UPDATE_RESET,
    BODEGA_UPDATE_SUCCESS,
    BODEGA_ACTIVATE_REQUEST,
    BODEGA_ACTIVATE_SUCCESS,
    BODEGA_ACTIVATE_FAIL,
    BODEGA_ACTIVATE_RESET
} from '../../constants/bodegaConstants'
export const bodegaListReducer = (
    state = { loading: true, bodega: [] },
    action
) => {
    switch (action.type) {
        case BODEGA_LIST_REQUEST:
            return { loading: true, bodega: [] };
        case BODEGA_LIST_SUCCESS:
            return {
                loading: false,
                bodegas: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case BODEGA_LIST_FAIL:
            return { loading: false, error: action.payload };
        case BODEGA_LIST_RESET:
            return { bodega: [] };
        default:
            return state;
    }
};

export const bodegaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case BODEGA_CREATE_REQUEST:
            return { loading: true };
        case BODEGA_CREATE_SUCCESS:
            return { loading: false, success: true };
        case BODEGA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const bodegaDetailsReducer = (state = { bodega: {} }, action) => {
    switch (action.type) {
        case BODEGA_DETAILS_REQUEST:
            return { ...state, loading: true };
        case BODEGA_DETAILS_SUCCESS:
            return { loading: false, bodega: action.payload };
        case BODEGA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case BODEGA_DETAILS_RESET:
            return { bodega: {} };
        default:
            return state;
    }
};

export const bodegaUpdateReducer = (state = { bodega: {} }, action) => {
    switch (action.type) {
        case BODEGA_UPDATE_REQUEST:
            return { loading: true };
        case BODEGA_UPDATE_SUCCESS:
            return { loading: false, success: true, bodega: action.payload };
        case BODEGA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case BODEGA_UPDATE_RESET:
            return { bodega: {} };
        default:
            return state;
    }
};

export const bodegaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case BODEGA_DELETE_REQUEST:
            return { loading: true};
        case BODEGA_DELETE_SUCCESS:
            return { loading: false, success: true};
        case BODEGA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case BODEGA_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const bodegaActivateReducer = (state = {}, action) => {
    switch (action.type) {
        case BODEGA_ACTIVATE_REQUEST:
            return { loading: true};
        case BODEGA_ACTIVATE_SUCCESS:
            return { loading: false, success: true};
        case BODEGA_ACTIVATE_FAIL:
            return { loading: false, error: action.payload };
        case BODEGA_ACTIVATE_RESET:
            return {};
        default:
            return state;
    }
};



