import axios from "axios";
import https from "https";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
