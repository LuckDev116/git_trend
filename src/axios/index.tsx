import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export function getApiClient() {
  return axiosInstance;
}
