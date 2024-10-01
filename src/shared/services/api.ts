import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://f3b7-2804-8b08-206-9a00-8896-1e26-6caf-414f.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
  withCredentials: true,
});
