import {
    SOLICITUD_CREATE_FAIL,
    SOLICITUD_CREATE_REQUEST,
    SOLICITUD_CREATE_SUCCESS
} from '../../constants/solicitudConstants'


export const solicitudCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SOLICITUD_CREATE_REQUEST:
            return { loading: true };
        case SOLICITUD_CREATE_SUCCESS:
            return { loading: false, success: true };
        case SOLICITUD_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};