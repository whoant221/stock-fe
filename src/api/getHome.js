import axios from "./axiosConfig";

function homePage1() {
    return axios.get('/api/home?page=1')
}
function homePage2() {
    return axios.get('/api/home?page=2')
}
function homePage3() {
    return axios.get('/api/home?page=3')
}
function homePage4() {
    return axios.get('/api/home?page=4')
}
function homePage5() {
    return axios.get('/api/home?page=5')
}

export default {
    homePage1,
    homePage2,
    homePage3,
    homePage4,
    homePage5,
}