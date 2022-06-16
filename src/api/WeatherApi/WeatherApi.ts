import instance from "../instance";
import { IWeatherApi } from "./IWeatherApi";
class WeatherApi implements IWeatherApi {
  private key = "1f9bacfa4612bda68445c63f8d79f738";

  async geo(place: string): Promise<any> {
    try {
      console.log(place);
      await instance.get("/geo/1.0/direct", {
        params: {
          q: place,
          appid: this.key,
          limit: 1,
        },
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async data(lat: number, lon: number): Promise<any> {
    try {
      await instance.get("/data/2.5/weather", {
        params: {
          lat: lat,
          lon: lon,
          appid: this.key,
        },
      });
    } catch (ex) {
      console.log(ex);
    }
  }
}

export default new WeatherApi();
