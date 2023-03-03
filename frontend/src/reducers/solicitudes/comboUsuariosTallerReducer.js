import {
    COMBO_USUARIOS_TALLER_LIST_RESET,
    COMBO_USUARIOS_TALLER_LIST_FAIL,
    COMBO_USUARIOS_TALLER_LIST_REQUEST,
    COMBO_USUARIOS_TALLER_LIST_SUCCESS,
} from '../../constants/comboUsuariosTallerConstants'
export const comboUsuariosTallerListReducer = (
    state = { loading: true, combo_usuarios_taller: [] },
    action
) => {
    switch (action.type) {
        case COMBO_USUARIOS_TALLER_LIST_REQUEST:
            return { loading: true, combo_usuarios_taller: [] };
        case COMBO_USUARIOS_TALLER_LIST_SUCCESS:
            return {
                loading: false,
                combo_usuarios_taller: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case COMBO_USUARIOS_TALLER_LIST_FAIL:
            return { loading: false, error: action.payload };
        case COMBO_USUARIOS_TALLER_LIST_RESET:
            return { combo_usuarios_taller: [] };
        default:
            return state;
    }
};