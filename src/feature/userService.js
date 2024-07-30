import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response;
};

const login_google = async (userData) => {
  const response = await axios.post(`${API_URL}/login_google`, userData);
  return response;
};

export const authservice = {
  register,
  login,
  login_google
};
