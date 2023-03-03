import {
    SUPERVISOR_LIST_RESET,
    SUPERVISOR_CREATE_FAIL,
    SUPERVISOR_DELETE_REQUEST,
    SUPERVISOR_CREATE_REQUEST,
    SUPERVISOR_CREATE_SUCCESS,
    SUPERVISOR_DELETE_FAIL,
    SUPERVISOR_DELETE_RESET,
    SUPERVISOR_DELETE_SUCCESS,
    SUPERVISOR_DETAILS_FAIL,
    SUPERVISOR_DETAILS_REQUEST,
    SUPERVISOR_DETAILS_RESET,
    SUPERVISOR_DETAILS_SUCCESS,
    SUPERVISOR_LIST_FAIL,
    SUPERVISOR_LIST_REQUEST,
    SUPERVISOR_LIST_SUCCESS,
    SUPERVISOR_UPDATE_FAIL,
    SUPERVISOR_UPDATE_REQUEST,
    SUPERVISOR_UPDATE_RESET,
    SUPERVISOR_UPDATE_SUCCESS
} from '../../constants/supervisorConstants'
export const supervisorListReducer = (
    state = { loading: true, supervisores: [] },
    action
) => {
    switch (action.type) {
        case SUPERVISOR_LIST_REQUEST:
            return { loading: true, supervisores: [] };
        case SUPERVISOR_LIST_SUCCESS:
            return {
                loading: false,
                supervisores: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case SUPERVISOR_LIST_FAIL:
            return { loading: false, error: action.payload };
        case SUPERVISOR_LIST_RESET:
            return { supervisores: [] };
        default:
            return state;
    }
};

export const supervisorCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUPERVISOR_CREATE_REQUEST:
            return { loading: true };
        case SUPERVISOR_CREATE_SUCCESS:
            return { loading: false, success: true };
        case SUPERVISOR_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const supervisorDetailsReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case SUPERVISOR_DETAILS_REQUEST:
            return { ...state, loading: true };
        case SUPERVISOR_DETAILS_SUCCESS:
            return { loading: false, cooperativa: action.payload };
        case SUPERVISOR_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case SUPERVISOR_DETAILS_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const supervisorUpdateReducer = (state = { cooperativa: {} }, action) => {
    switch (action.type) {
        case SUPERVISOR_UPDATE_REQUEST:
            return { loading: true };
        case SUPERVISOR_UPDATE_SUCCESS:
            return { loading: false, success: true, cooperativa: action.payload };
        case SUPERVISOR_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case SUPERVISOR_UPDATE_RESET:
            return { cooperativa: {} };
        default:
            return state;
    }
};

export const supervisorDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SUPERVISOR_DELETE_REQUEST:
            return { loading: true};
        case SUPERVISOR_DELETE_SUCCESS:
            return { loading: false, success: true};
        case SUPERVISOR_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case SUPERVISOR_DELETE_RESET:
            return {};
        default:
            return state;
    }
};


