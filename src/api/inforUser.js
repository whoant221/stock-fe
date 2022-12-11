import axios from "./axiosConfig";

const postRegister = async (body) => {
    return axios.post(`/api/v1/auth/register`, body)
};

const postLogin = async (body) => {
    return axios.post(`/api/v1/auth/login`, body)
};

export default {
    postRegister,
    postLogin,
};