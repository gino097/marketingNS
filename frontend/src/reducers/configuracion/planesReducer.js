import {
    PLANES_LIST_RESET,
    PLANES_CREATE_FAIL,
    PLANES_DELETE_REQUEST,
    PLANES_CREATE_REQUEST,
    PLANES_CREATE_SUCCESS,
    PLANES_DELETE_FAIL,
    PLANES_DELETE_RESET,
    PLANES_DELETE_SUCCESS,
    PLANES_DETAILS_FAIL,
    PLANES_DETAILS_REQUEST,
    PLANES_DETAILS_RESET,
    PLANES_DETAILS_SUCCESS,
    PLANES_LIST_FAIL,
    PLANES_LIST_REQUEST,
    PLANES_LIST_SUCCESS,
    PLANES_UPDATE_FAIL,
    PLANES_UPDATE_REQUEST,
    PLANES_UPDATE_RESET,
    PLANES_UPDATE_SUCCESS,
    PLANES_ACTIVATE_REQUEST,
    PLANES_ACTIVATE_SUCCESS,
    PLANES_ACTIVATE_FAIL,
    PLANES_ACTIVATE_RESET
} from '../../constants/planesConstants'
export const planListReducer = (
    state = { loading: true, plan: [] },
    action
) => {
    switch (action.type) {
        case PLANES_LIST_REQUEST:
            return { loading: true, plan: [] };
        case PLANES_LIST_SUCCESS:
            return {
                loading: false,
                planes: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case PLANES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case PLANES_LIST_RESET:
            return { plan: [] };
        default:
            return state;
    }
};

export const planCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLANES_CREATE_REQUEST:
            return { loading: true };
        case PLANES_CREATE_SUCCESS:
            return { loading: false, success: true };
        case PLANES_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const planDetailsReducer = (state = { plan: {} }, action) => {
    switch (action.type) {
        case PLANES_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PLANES_DETAILS_SUCCESS:
            return { loading: false, plan: action.payload };
        case PLANES_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case PLANES_DETAILS_RESET:
            return { plan: {} };
        default:
            return state;
    }
};

export const planUpdateReducer = (state = { plan: {} }, action) => {
    switch (action.type) {
        case PLANES_UPDATE_REQUEST:
            return { loading: true };
        case PLANES_UPDATE_SUCCESS:
            return { loading: false, success: true, plan: action.payload };
        case PLANES_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PLANES_UPDATE_RESET:
            return { plan: {} };
        default:
            return state;
    }
};

export const planDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PLANES_DELETE_REQUEST:
            return { loading: true};
        case PLANES_DELETE_SUCCESS:
            return { loading: false, success: true};
        case PLANES_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PLANES_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const planActivateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLANES_ACTIVATE_REQUEST:
            return { loading: true};
        case PLANES_ACTIVATE_SUCCESS:
            return { loading: false, success: true};
        case PLANES_ACTIVATE_FAIL:
            return { loading: false, error: action.payload };
        case PLANES_ACTIVATE_RESET:
            return {};
        default:
            return state;
    }
};



