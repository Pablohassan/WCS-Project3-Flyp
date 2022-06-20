import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000/api";

// modif session Configure axios pour envoyer les cookies à chaque requête
axios.defaults.withCredentials = true;
//
// @returns {Promise<Array>}
//
export const getContenu = async () => {
  return (await axios.get(`${API_URL}/cardlist`)).data;
};
// * @returns {Promise<Array>}
///*** Authentifie l'utilisateur

export const login = async (data) => {
  return (await axios.post(`${API_URL}/login`, data)).data;
};

export const logout = async () => {
  return (await axios(`${API_URL}/logout`)).data;
};

/**
 * Revoie le profil de l'utilisateur
 *
 * @returns {Promise<Object>}
 */
export const fetchMe = async (data) => {
  try {
    return (await axios.get(`${API_URL}/me`, data)).data;
  } catch (err) {
    return null;
  }
};
