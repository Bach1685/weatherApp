import axios from "axios";
export const citiesInstance = axios.create({
  baseURL: "https://suggestions.dadata.ru",
  headers: {
    Authorization: "Token " + "4eab9f458c2fa9d169b78b4b22e0aaa2607a135c",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
