// src/features/auth/services/authApi.js
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = `${API_KEY}/v1/users`;
//bắt API
export async function loginApi(email, password) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data; // { user, token }
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
}
