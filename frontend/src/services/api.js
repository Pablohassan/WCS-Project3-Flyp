import axios from "axios";

const URL_API = "http://localhost:5000";

export const getContenu = async () => {
  return (await axios.get(`${URL_API}/cardlist`)).data;
};
