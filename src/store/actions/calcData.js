import request from 'superagent';
import { apiRequest, apiSuccess, apiFail } from './api';

import {
    BASE_URL,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    SHOW_DROPDOWN,
    HIDE_DROPDOWN
} from '../constants';

export const getCalculated = calcData => async (dispatch) => {
    dispatch(apiRequest(GET_DATA_REQUEST));

    request.get(`${BASE_URL}/merchants/password`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .query({email: forgotPasswordObj.email})
        .end((err, res) => {
            if (err || res.body.errorMessage ) {
                if (!err) {
                    dispatch(apiRequest(GET_DATA_REQUEST));
                } else {
                    dispatch(apiRequest(GET_DATA_REQUEST));
                }
            } else {
                dispatch(apiRequest(GET_DATA_REQUEST));
            }
        });

};

export const openDropdown = () => async (dispatch) => {
    dispatch(apiRequest(SHOW_DROPDOWN));
}

export const closeDropdown = () => async (dispatch) => {
    dispatch(apiRequest(HIDE_DROPDOWN));
}