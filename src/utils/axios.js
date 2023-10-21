import axios from "axios";

const instance = axios({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "applicatoin/json",
  },
});

export default instance;
