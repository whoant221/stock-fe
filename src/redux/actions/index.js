import * as types from '~/constant/actionTypes';

export const setLayout = (data) => ({
    type: types.SET_ACTIVE_LAYOUT,
    payload: data,
});

export const setInfo = (data) => ({
    type: types.SET_INFO_CLIENT,
    payload: data,
});

export const setNameBank = (data) => ({
    type: types.SET_NAME_BANK,
    payload: data,
});

export const setDetailBank = (data) => ({
    type: types.SET_DETAIL_BANK,
    payload: data,
});

export const setOrderBookAsk = (data) => ({
    type: types.SET_ORDER_BOOK_ASK,
    payload: data,
});

export const setOrderBookBid = (data) => ({
    type: types.SET_ORDER_BOOK_BID,
    payload: data,
});

export const setPriceStock = (data) => ({
    type: types.SET_PRICE_STOCK,
    payload: data,
});