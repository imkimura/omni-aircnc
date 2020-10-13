import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.86.69:8080',
});

export default api;