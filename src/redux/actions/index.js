import * as types from '~/constant/actionTypes';

export const addName = (data) => ({
    type: types.SET_ACTIVE_GET_NAME,
    payload: data,
});

export const checkChart = (data) => ({
    type: types.SET_ACTIVE_CHECK_CHART,
    payload: data,
});

