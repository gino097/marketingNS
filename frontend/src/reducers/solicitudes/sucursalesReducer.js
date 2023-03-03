import {
    SUCURSALES_LIST_RESET,
    SUCURSALES_LIST_FAIL,
    SUCURSALES_LIST_REQUEST,
    SUCURSALES_LIST_SUCCESS,
} from '../../constants/sucursalesConstants'
export const sucursalesListReducer = (
    state = { loading: true, sucursales: [] },
    action
) => {
    switch (action.type) {
        case SUCURSALES_LIST_REQUEST:
            return { loading: true, sucursales: [] };
        case SUCURSALES_LIST_SUCCESS:
            return {
                loading: false,
                sucursales: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case SUCURSALES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case SUCURSALES_LIST_RESET:
            return { sucursales: [] };
        default:
            return state;
    }
};