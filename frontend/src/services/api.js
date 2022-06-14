import axios from "axios";

const API_URL = "http://localhost:5000";

export const getContenu = async () => {
  return (await axios.get(`${API_URL}/cardlist`)).data;
};

export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};
