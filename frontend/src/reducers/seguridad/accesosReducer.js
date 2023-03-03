import {
    ACCESOS_LIST_RESET,
    ACCESOS_LIST_FAIL,
    ACCESOS_LIST_REQUEST,
    ACCESOS_LIST_SUCCESS
} from '../../constants/accesosConstants'
export const accesosListReducer = (
    state = { loading: true, acceso: [] },
    action
) => {
    switch (action.type) {
        case ACCESOS_LIST_REQUEST:
            return { loading: true, acceso: [] };
        case ACCESOS_LIST_SUCCESS:
            return {
                loading: false,
                accesos: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case ACCESOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        case ACCESOS_LIST_RESET:
            return { acceso: [] };
        default:
            return state;
    }
};