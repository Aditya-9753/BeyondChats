import axios from "axios";

const API = axios.create({
  baseURL: "https://beyondchats-backend-cgyv.onrender.com/api",
});

export default API;
