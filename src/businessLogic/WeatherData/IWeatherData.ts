import { WeatherStatus } from "../enum/WeatherStatus";
import { WeekDay } from "../enum/WeekDay";

export interface IWeatherData {
  place: string;
  weekDay: WeekDay;
  status: WeatherStatus;
  description: string;
  degC: number;
  degF: number;
  date: Date;
}
