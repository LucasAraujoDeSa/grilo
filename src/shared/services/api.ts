import axios from "axios";
import Cookies from "js-cookie";
import { revogateAccess } from "../functions/revogate-access";
import { ensureAccess } from "../functions/ensure-access";

export const api = axios.create({
  baseURL:
    "https://7a5b-2804-8b08-204-b400-c142-27ec-daee-926a.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("@refresh_token");
        const response = await api.post("api/Account/RefreshToken", {
          refreshToken: refreshToken,
        });
        console.log(response.data);
        revogateAccess();
        ensureAccess({
          accessToken: response.data.content.accessToken,
          refreshToken: response.data.content.refreshToken,
          username: response.data.content.userName,
        });

        originalRequest.headers.Authorization = `Bearer ${response.data.content.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token inválido ou expirado", refreshError);
      }
    }

    return Promise.reject(error);
  }
);
