import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    SHOW_DROPDOWN,
    HIDE_DROPDOWN
} from '../constants';

const initialState = {
    isRequesting: false,
    items: [],
    isDropdownOpen: false,
    activeCurrency: '',

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                isLoggedIn: action.payload !== '',
                token: action.payload
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                isRequesting: false,
                isLoggedIn: false,
                token: ''
            };
        case SHOW_DROPDOWN:
            return {
                ...state,
                isDropdownOpen: true
            };
        case HIDE_DROPDOWN:
            return {
                ...state,
                isDropdownOpen: false
            };
        default:
            return {
                ...state
            }
    }
}