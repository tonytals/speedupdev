import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:7083/api/"
})

export default api;