import axios from "./axiosConfig";

//get
const getACB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=ACB`)
};

const getTCB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=TCB`)
};

const getVCB = () => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=VCB`)
};

export default {

    //get
    getACB,
    getTCB,
    getVCB,

};