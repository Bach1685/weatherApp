import instance from "../instance";
import { IWeatherApi } from "./IWeatherApi";
class WeatherApi implements IWeatherApi {
  private key = "1f9bacfa4612bda68445c63f8d79f738";

  async getWeatherByPlace(place: string): Promise<any> {
    try {
      return await instance.get("/data/2.5/weather", {
        params: {
          q: place,
          appid: this.key,
          limit: 1,
          lang: "ru",
        },
      });
    } catch (ex) {
      return ex;
    }
  }

  async getWeatherByCoordinates(lat: number, lon: number): Promise<any> {
    try {
      return await instance.get("/data/2.5/weather", {
        params: {
          lat: lat,
          lon: lon,
          appid: this.key,
          lang: "ru",
        },
      });
    } catch (ex) {
      return ex;
    }
  }
}

export const weatherApi = new WeatherApi();
