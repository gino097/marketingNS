import {
    COMBO_CIUDADES_LIST_RESET,
    COMBO_CIUDADES_LIST_FAIL,
    COMBO_CIUDADES_LIST_REQUEST,
    COMBO_CIUDADES_LIST_SUCCESS,
} from '../../constants/comboCiudadesConstants'
export const comboCiudadesListReducer = (
    state = { loading: true, combo_ciudades: [] },
    action
) => {
    switch (action.type) {
        case COMBO_CIUDADES_LIST_REQUEST:
            return { loading: true, combo_ciudades: [] };
        case COMBO_CIUDADES_LIST_SUCCESS:
            return {
                loading: false,
                combo_ciudades: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case COMBO_CIUDADES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case COMBO_CIUDADES_LIST_RESET:
            return { combo_ciudades: [] };
        default:
            return state;
    }
};