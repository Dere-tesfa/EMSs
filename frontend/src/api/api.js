import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/login",
  baseURL: "http://localhost:3000/register",
});

export default api;
