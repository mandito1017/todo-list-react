import axios from 'axios';

const API_KEY = 'mi-api-key-secreta-2024';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  },
});

export default api;