import axios from "axios";
import https from "https";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default api;
