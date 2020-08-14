import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const api = axios.create({
  httpsAgent: agent,
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
