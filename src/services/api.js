import axios from 'axios';

// 172.24.182.209
const api = axios.create({
  baseURL: 'https://cartola-go-api.herokuapp.com'
});

export default api;
