import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://041e-2804-8b08-206-9a00-779c-81a3-35e0-56fb.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
});
