import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'  // Express 後端網址
});

export default api;