import { IWeatherApi } from "./IWeatherApi";
import { WeatherApi } from "./WeatherApi";
export const weatherApi: IWeatherApi = new WeatherApi();
