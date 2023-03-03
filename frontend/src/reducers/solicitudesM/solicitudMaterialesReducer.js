import {
    SOLICITUDM_CREATE_FAIL,
    SOLICITUDM_CREATE_REQUEST,
    SOLICITUDM_CREATE_SUCCESS
} from '../../constants/solicitudMaterialesConstants'


export const solicitudMCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SOLICITUDM_CREATE_REQUEST:
            return { loading: true };
        case SOLICITUDM_CREATE_SUCCESS:
            return { loading: false, success: true };
        case SOLICITUDM_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};