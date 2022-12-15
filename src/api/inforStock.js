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

const getOrderAskACB = () => {
    return axios.get(`/api/v1/orders?type=ask&symbol=ACB&limit=3`)
};

const getOrderBidACB = () => {
    return axios.get(`/api/v1/orders?type=bid&symbol=ACB&limit=3`)
};

const getOrderAskTCB = () => {
    return axios.get(`/api/v1/orders?type=ask&symbol=TCB&limit=3`)
};

const getOrderBidTCB = () => {
    return axios.get(`/api/v1/orders?type=bid&symbol=TCB&limit=3`)
};

const getOrderAskVCB = () => {
    return axios.get(`/api/v1/orders?type=ask&symbol=TCB&limit=3`)
};

const getOrderBidVCB = () => {
    return axios.get(`/api/v1/orders?type=bid&symbol=TCB&limit=3`)
};

const getChartACB = () => {
    return axios.get(`/api/v1/kLineChart?symbol=ACB`)
};

const getChartTCB = () => {
    return axios.get(`/api/v1/kLineChart?symbol=TCB`)
};

const getChartVCB = () => {
    return axios.get(`/api/v1/kLineChart?symbol=VCB`)
};

export default {

    //get
    getACB,
    getTCB,
    getVCB,

    getPriceACB,
    getPriceTCB,
    getPriceVCB,

    getOrderAskACB,
    getOrderBidACB,
    getOrderAskTCB,
    getOrderBidTCB,
    getOrderAskVCB,
    getOrderBidVCB,

    getChartACB,
    getChartTCB,
    getChartVCB,
};