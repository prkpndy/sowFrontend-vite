import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sowbackend-production.up.railway.app",
});

export default axiosInstance;
