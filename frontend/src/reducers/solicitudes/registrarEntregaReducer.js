import {
    ENTREGA_UPDATE_FAIL,
    ENTREGA_UPDATE_REQUEST,
    ENTREGA_UPDATE_RESET,
    ENTREGA_UPDATE_SUCCESS
} from '../../constants/registrarEntregaConstants'


export const registrarEntregaUpdateReducer = (state = { clave: {} }, action) => {
    switch (action.type) {
        case ENTREGA_UPDATE_REQUEST:
            return { loading: true };
        case ENTREGA_UPDATE_SUCCESS:
            return { loading: false, success: true, clave: action.payload };
        case ENTREGA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ENTREGA_UPDATE_RESET:
            return { clave: {} };
        default:
            return state;
    }
};



