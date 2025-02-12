import axios from "axios";

const apiKey = "fb212590f27247d68a631867e849c86f"; 

const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: apiKey, 
  },
});

export default axiosInstance;
