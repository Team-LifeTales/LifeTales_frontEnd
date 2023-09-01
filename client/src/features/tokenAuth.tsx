import axios from "axios";
import Cookies from "js-cookie";
const tokenAuth = axios.create();

tokenAuth.defaults.withCredentials = true;

tokenAuth.interceptors.request.use(
  function (config) {
    const token = Cookies.get("Authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default tokenAuth;
