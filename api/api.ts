import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "https://event-manger-back-end.onrender.com/";

export const apiHitter: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

