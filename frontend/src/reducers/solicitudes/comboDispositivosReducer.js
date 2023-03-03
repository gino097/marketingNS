import {
    COMBO_DISPOSITIVOS_LIST_RESET,
    COMBO_DISPOSITIVOS_LIST_FAIL,
    COMBO_DISPOSITIVOS_LIST_REQUEST,
    COMBO_DISPOSITIVOS_LIST_SUCCESS,
} from '../../constants/comboDispositivosConstants'
export const comboDispositivosListReducer = (
    state = { loading: true, combo_dispositivos: [] },
    action
) => {
    switch (action.type) {
        case COMBO_DISPOSITIVOS_LIST_REQUEST:
            return { loading: true, combo_dispositivos: [] };
        case COMBO_DISPOSITIVOS_LIST_SUCCESS:
            return {
                loading: false,
                combo_dispositivos: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case COMBO_DISPOSITIVOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        case COMBO_DISPOSITIVOS_LIST_RESET:
            return { combo_dispositivos: [] };
        default:
            return state;
    }
};