import { WeatherApiMapper } from "./WeatherApiMapper";
import { IAxiosResponseMapper } from "../IAxiosResponseMapper";
export const mapper: IAxiosResponseMapper = new WeatherApiMapper();
