import {
    REGION_LIST_RESET,
    REGION_CREATE_FAIL,
    REGION_LIST_FAIL,
    REGION_LIST_REQUEST,
    REGION_LIST_SUCCESS
} from '../../constants/regionConstants'
export const regionListReducer = (
    state = { loading: true, regiones: [] },
    action
) => {
    switch (action.type) {
        case REGION_LIST_REQUEST:
            return { loading: true, regiones: [] };
        case REGION_LIST_SUCCESS:
            return {
                loading: false,
                regiones: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case REGION_LIST_FAIL:
            return { loading: false, error: action.payload };
        case REGION_LIST_RESET:
            return { regiones: [] };
        default:
            return state;
    }
};


