import * as types from '~/constant/actionTypes';

export const setLayout = (data) => ({
    type: types.SET_ACTIVE_LAYOUT,
    payload: data,
});

export const setInfo = (data) => ({
    type: types.SET_INFO_CLIENT,
    payload: data,
});


