import {
    CLAVE_UPDATE_FAIL,
    CLAVE_UPDATE_REQUEST,
    CLAVE_UPDATE_RESET,
    CLAVE_UPDATE_SUCCESS
} from '../../constants/claveConstants'


export const claveUpdateReducer = (state = { clave: {} }, action) => {
    switch (action.type) {
        case CLAVE_UPDATE_REQUEST:
            return { loading: true };
        case CLAVE_UPDATE_SUCCESS:
            return { loading: false, success: true, clave: action.payload };
        case CLAVE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CLAVE_UPDATE_RESET:
            return { clave: {} };
        default:
            return state;
    }
};



