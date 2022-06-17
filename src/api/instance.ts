import axios from "axios";
const instance = axios.create({
  baseURL: "http://api.openweathermap.org",
  headers: {
    // accept: "aplication/json",
  },
});
export default instance;
