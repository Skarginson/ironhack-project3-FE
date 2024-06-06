import axios from "axios";
import { API_BASE_URL } from "../consts";

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const authToken = localStorage.getItem("authToken");
        const accountType = localStorage.getItem("accountType");

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken} ${accountType}`;
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  getUser() {
    return this.api.get("/users/me");
  }
}

const apiHandler = new ApiHandler();

export default apiHandler;
