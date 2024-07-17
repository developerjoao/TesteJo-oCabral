import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';
const api = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

class UserService {
  list() {
    return api.get('users').then(response => response.data);
  }
  get(id) {
    return api.get(`users/${id}`).then(response => response.data);
  }
  create(data) {
    return api.post('users', data).then(response => response.data);
  }
  update(id, data) {
    return api.put(`users/${id}`, data).then(response => response.data);
  }
  delete(id) {
    return api.delete(`users/${id}`).then(response => response.data);
  }
}

export default new UserService();
