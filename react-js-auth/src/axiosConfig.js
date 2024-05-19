// src/axiosConfig.js
import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: process.env.NODE_URL || `http://localhost:8000`,
  headers: {
    'Authorization': token ? `Bearer ${token}` : ''
  }
});

export default instance;
