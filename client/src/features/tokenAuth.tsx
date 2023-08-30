import axios from "axios";
import Cookies from "js-cookie";
const tokenAuth = axios.create();

tokenAuth.defaults.withCredentials = true;

tokenAuth.interceptors.request.use(
  function (config) {
    if (Cookies.get("Authorization")) {
      config.headers.Authorization = `Bearer ${Cookies.get("Authorization")}`;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default tokenAuth;
