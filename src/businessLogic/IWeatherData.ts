import { WeekDay } from "./WeekDay";

export interface IWeatherData {
  city: string;
  country: string;
  weekDay: WeekDay;
  status: string;
  deg: number;
  degF: number;
}
