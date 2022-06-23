import axios from "axios";
const weatherInstance = axios.create({
  baseURL: "http://api.openweathermap.org",
  headers: {
    accept: "aplication/json",
  },
});
export default weatherInstance;
