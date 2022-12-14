import axios from "./axiosConfig";

//get
const getACB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=ACB`) 
};

const getPriceACB = () => {
    return axios.get(`/api/v1/orders/getLatestOrders?symbol=ACB`)
};

const getTCB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=TCB`)
};

const getPriceTCB = () => {
    return axios.get(`/api/v1/orders/getLatestOrders?symbol=TCB`)
};

const getVCB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=VCB`)
};

const getPriceVCB = () => {
    return axios.get(`/api/v1/orders/getLatestOrders?symbol=VCB`)
};

const getOrderAsk = () => {
    return axios.get(`/api/v1/orders?type=ask&symbol=ACB&limit=3`)
};

const getOrderBid = () => {
    return axios.get(`/api/v1/orders?type=bid&symbol=ACB&limit=3`)
};

export default {

    //get
    getACB,
    getTCB,
    getVCB,

    getPriceACB,
    getPriceTCB,
    getPriceVCB,

    getOrderAsk,
    getOrderBid,

};