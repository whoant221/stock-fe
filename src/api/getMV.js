import axios from "./axiosConfig";

function getMVVN() {
    return axios.get('/api/listmv?id=IWZ9Z08I&page=1&count=500')
}

export default {
    getMVVN,
}