import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    SHOW_DROPDOWN,
    HIDE_DROPDOWN,
    GET_CURRENCIES_FAIL,
    GET_CURRENCIES_REQUEST,
    GET_CURRENCIES_SUCCESS
} from '../constants';
import * as moment from 'moment';

const initialState = {
    isRequesting: false,
    graph: [],
    isDropdownOpen: false,
    currencies: [],
    activeCurrency: '',
    reward: '',
    inCurrency: ''

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case GET_DATA_SUCCESS:
            action.payload.graph.map(item => {
                console.log(item);
            })
            return {
                ...state,
                isRequesting: false,
                graph: action.payload.graph,
                inCurrency: action.payload.inCurrency,
                reward: action.payload.reward,
                total: action.payload.total
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                isRequesting: false,
            };
        case GET_CURRENCIES_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case GET_CURRENCIES_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                currencies: action.payload
            };
        case GET_CURRENCIES_FAIL:
            return {
                ...state,
                isRequesting: false,
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