import axios from "./axiosConfig";

//get

const getListStock = () => {
    return axios.get(`/api/v1/stocks`) 
};

const getinforStock = (id) => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=${id}`) 
};

const getPrice = (id) => {
    return axios.get(`/api/v1/orders/getLatestOrders?symbol=${id}`)
};

const getOrderAsk = (id) => {
    return axios.get(`/api/v1/orders?type=ask&symbol=${id}&limit=3`)
};

const getOrderBid = (id) => {
    return axios.get(`/api/v1/orders?type=bid&symbol=${id}&limit=3`)
};

const getChart = (id) => {
    return axios.get(`/api/v1/kLineChart?symbol=${id}`)
};

const getOrderBookAsk = (id) => {
    return axios.get(`/api/v1/orders?type=ask&symbol=${id}&limit=10`)
};

const getOrderBookBid = (id) => {
    return axios.get(`/api/v1/orders?type=bid&symbol=${id}&limit=10`)
};

const getHistoryStock = (id) => {
    return axios.get(`api/v1/orders/historyMatched?symbol=${id}`)
}

const getHistotyOrder = (id) => {
    return axios.get(`/api/v1/orders/enabled?symbol=${id}`)
}

const getOpenOrder= (id) => {
    return axios.get(`/api/v1/orders/history?symbol=${id}&state=enabled`)
}


export default {

    //get
    getListStock,
    getinforStock,
    getPrice,
    getOrderAsk,
    getOrderBid,
    getChart,

    getOrderBookAsk,
    getOrderBookBid,

    getHistoryStock,
    getOpenOrder,
    getHistotyOrder,
};