import {
    PRODUCTO_LIST_RESET,
    PRODUCTO_CREATE_FAIL,
    PRODUCTO_DELETE_REQUEST,
    PRODUCTO_CREATE_REQUEST,
    PRODUCTO_CREATE_SUCCESS,
    PRODUCTO_DELETE_FAIL,
    PRODUCTO_DELETE_RESET,
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
    PRODUCTO_UPDATE_RESET,
    PRODUCTO_UPDATE_SUCCESS,
    PRODUCTO_ACTIVATE_REQUEST,
    PRODUCTO_ACTIVATE_SUCCESS,
    PRODUCTO_ACTIVATE_FAIL,
    PRODUCTO_ACTIVATE_RESET
} from '../../constants/productoConstants'
export const productoListReducer = (
    state = { loading: true, producto: [] },
    action
) => {
    switch (action.type) {
        case PRODUCTO_LIST_REQUEST:
            return { loading: true, producto: [] };
        case PRODUCTO_LIST_SUCCESS:
            return {
                loading: false,
                productos: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case PRODUCTO_LIST_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCTO_LIST_RESET:
            return { producto: [] };
        default:
            return state;
    }
};

export const productoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCTO_CREATE_REQUEST:
            return { loading: true };
        case PRODUCTO_CREATE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCTO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productoDetailsReducer = (state = { producto: {} }, action) => {
    switch (action.type) {
        case PRODUCTO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCTO_DETAILS_SUCCESS:
            return { loading: false, producto: action.payload };
        case PRODUCTO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCTO_DETAILS_RESET:
            return { producto: {} };
        default:
            return state;
    }
};

export const productoUpdateReducer = (state = { producto: {} }, action) => {
    switch (action.type) {
        case PRODUCTO_UPDATE_REQUEST:
            return { loading: true };
        case PRODUCTO_UPDATE_SUCCESS:
            return { loading: false, success: true, producto: action.payload };
        case PRODUCTO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCTO_UPDATE_RESET:
            return { producto: {} };
        default:
            return state;
    }
};

export const productoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCTO_DELETE_REQUEST:
            return { loading: true};
        case PRODUCTO_DELETE_SUCCESS:
            return { loading: false, success: true};
        case PRODUCTO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCTO_DELETE_RESET:
            return {};
        default:
            return state;
    }
};
export const productoActivateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCTO_ACTIVATE_REQUEST:
            return { loading: true};
        case PRODUCTO_ACTIVATE_SUCCESS:
            return { loading: false, success: true};
        case PRODUCTO_ACTIVATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCTO_ACTIVATE_RESET:
            return {};
        default:
            return state;
    }
};



