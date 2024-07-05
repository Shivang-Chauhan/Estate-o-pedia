import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://estate-echo-backend-a9z0.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
