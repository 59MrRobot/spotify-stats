import axios from 'axios';

const BASE_URL = "https://api.spotify.com/v1";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "",
  },
});

userRequest.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);