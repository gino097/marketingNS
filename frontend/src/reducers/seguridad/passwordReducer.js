import {
    PASSWORD_LIST_RESET,
    PASSWORD_CREATE_FAIL,
    PASSWORD_DELETE_REQUEST,
    PASSWORD_CREATE_REQUEST,
    PASSWORD_CREATE_SUCCESS,
    PASSWORD_DELETE_FAIL,
    PASSWORD_DELETE_RESET,
    PASSWORD_DELETE_SUCCESS,
    PASSWORD_DETAILS_FAIL,
    PASSWORD_DETAILS_REQUEST,
    PASSWORD_DETAILS_RESET,
    PASSWORD_DETAILS_SUCCESS,
    PASSWORD_LIST_FAIL,
    PASSWORD_LIST_REQUEST,
    PASSWORD_LIST_SUCCESS,
    PASSWORD_UPDATE_FAIL,
    PASSWORD_UPDATE_REQUEST,
    PASSWORD_UPDATE_RESET,
    PASSWORD_UPDATE_SUCCESS
} from '../../constants/passwordConstants'
export const passwordListReducer = (
    state = { loading: true, password: [] },
    action
) => {
    switch (action.type) {
        case PASSWORD_LIST_REQUEST:
            return { loading: true, password: [] };
        case PASSWORD_LIST_SUCCESS:
            return {
                loading: false,
                password: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case PASSWORD_LIST_FAIL:
            return { loading: false, error: action.payload };
        case PASSWORD_LIST_RESET:
            return { password: [] };
        default:
            return state;
    }
};

export const passwordCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PASSWORD_CREATE_REQUEST:
            return { loading: true };
        case PASSWORD_CREATE_SUCCESS:
            return { loading: false, success: true };
        case PASSWORD_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const passwordDetailsReducer = (state = { password: {} }, action) => {
    switch (action.type) {
        case PASSWORD_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PASSWORD_DETAILS_SUCCESS:
            return { loading: false, password: action.payload };
        case PASSWORD_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case PASSWORD_DETAILS_RESET:
            return { password: {} };
        default:
            return state;
    }
};

export const passwordUpdateReducer = (state = { password: {} }, action) => {
    switch (action.type) {
        case PASSWORD_UPDATE_REQUEST:
            return { loading: true };
        case PASSWORD_UPDATE_SUCCESS:
            return { loading: false, success: true, password: action.payload };
        case PASSWORD_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PASSWORD_UPDATE_RESET:
            return { password: {} };
        default:
            return state;
    }
};

export const passwordDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PASSWORD_DELETE_REQUEST:
            return { loading: true};
        case PASSWORD_DELETE_SUCCESS:
            return { loading: false, success: true};
        case PASSWORD_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PASSWORD_DELETE_RESET:
            return {};
        default:
            return state;
    }
};


