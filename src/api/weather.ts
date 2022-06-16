// import { AxiosInstance } from "axios";
import instance from "./instance";

// export default function (instance: AxiosInstance) {
//   return {
//     geo(payload: any) {
//       return instance.get("/geo/1.0/direct", payload);
//     },
//     data(payload: any) {
//       return instance.get("/data/2.5/weather", payload);
//     },
//   };
// }

class WeatherApi {
  geo(payload: any) {
    return instance.get("/geo/1.0/direct", payload);
  }
  data(payload: any) {
    return instance.get("/data/2.5/weather", payload);
  }
}
