import axios from "axios";

// API URL
const API = "https://right-soda-production.up.railway.app/api/v1";

const headers = {
  contentType: "application/json",
};

export const axiosInstance = axios.create({
  baseURL: API,
  timeout: 25000,
  headers: headers,
});
