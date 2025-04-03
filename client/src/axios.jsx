import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BE_URL}/api`,
  // baseURL: "/api",
});

// Add a request interceptor to include the authorization header
instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = authToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
