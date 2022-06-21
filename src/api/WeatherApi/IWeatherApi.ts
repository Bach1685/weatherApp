import { AxiosResponse } from "axios";

export interface IWeatherApi {
  getWeatherByPlace(
    place: string,
    lang: string
  ): Promise<AxiosResponse<any, any>>;
  getWeatherByCoordinates(
    lat: number,
    lon: number,
    lang: string
  ): Promise<AxiosResponse<any, any>>;
}
