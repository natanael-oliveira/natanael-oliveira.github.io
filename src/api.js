import axios from 'axios';
const api = axios.create({
    baseURL: 'https://natanael-oliveira.github.io/'
    // baseURL: 'http://localhost:8080/'
})
export default api;