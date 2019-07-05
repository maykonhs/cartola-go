import axios from 'axios';

// 172.24.182.209
const api = axios.create({
  baseURL: 'http://10.0.3.2:3333'
});

export default api;
