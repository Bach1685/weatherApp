import { AxiosResponse } from "axios";

export interface IWeatherApi {
  getWeatherByPlace(place: string): Promise<AxiosResponse<any, any>>;
  getWeatherByCoordinates(
    lat: number,
    lon: number
  ): Promise<AxiosResponse<any, any>>;
}
