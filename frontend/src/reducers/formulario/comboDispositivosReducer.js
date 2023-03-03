import {
    COMBO_USUARIOS_LIST_RESET,
    COMBO_USUARIOS_LIST_FAIL,
    COMBO_USUARIOS_LIST_REQUEST,
    COMBO_USUARIOS_LIST_SUCCESS,
} from '../../constants/comboUsuariosConstants'
export const comboUsuariosListReducer = (
    state = { loading: true, combo_usuarios: [] },
    action
) => {
    switch (action.type) {
        case COMBO_USUARIOS_LIST_REQUEST:
            return { loading: true, combo_usuarios: [] };
        case COMBO_USUARIOS_LIST_SUCCESS:
            return {
                loading: false,
                combo_usuarios: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case COMBO_USUARIOS_LIST_FAIL:
            return { loading: false, error: action.payload };
        case COMBO_USUARIOS_LIST_RESET:
            return { combo_usuarios: [] };
        default:
            return state;
    }
};