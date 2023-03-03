import {
    COMBO_PLANES_LIST_RESET,
    COMBO_PLANES_LIST_FAIL,
    COMBO_PLANES_LIST_REQUEST,
    COMBO_PLANES_LIST_SUCCESS,
} from '../../constants/comboPlanesConstants'
export const comboPlanesListReducer = (
    state = { loading: true, combo_planes: [] },
    action
) => {
    switch (action.type) {
        case COMBO_PLANES_LIST_REQUEST:
            return { loading: true, combo_planes: [] };
        case COMBO_PLANES_LIST_SUCCESS:
            return {
                loading: false,
                combo_planes: action.payload.result,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case COMBO_PLANES_LIST_FAIL:
            return { loading: false, error: action.payload };
        case COMBO_PLANES_LIST_RESET:
            return { combo_planes: [] };
        default:
            return state;
    }
};