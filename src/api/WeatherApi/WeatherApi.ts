import instance from "../instance";
import { IWeatherApi } from "./IWeatherApi";
class WeatherApi implements IWeatherApi {
  private key = "1f9bacfa4612bda68445c63f8d79f738";

  async getWeatherByPlace(place: string, lang = "ru"): Promise<any> {
    try {
      return await instance.get("/data/2.5/weather", {
        params: {
          q: place,
          appid: this.key,
          limit: 1,
          lang: lang,
        },
      });
    } catch (ex: any) {
      throw new Error(ex.message);
    }
  }

  async getWeatherByCoordinates(
    lat: number,
    lon: number,
    lang = "en"
  ): Promise<any> {
    try {
      return await instance.get("/data/2.5/weather", {
        params: {
          lat: lat,
          lon: lon,
          appid: this.key,
          lang: lang,
        },
      });
    } catch (ex: any) {
      throw new Error(ex.message);
    }
  }
}

export const weatherApi = new WeatherApi();
