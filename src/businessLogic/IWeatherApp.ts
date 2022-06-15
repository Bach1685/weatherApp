import { WeekDay } from "./WeekDay";

export interface IWeatherApp {
  city: string;
  country: string;
  weekDay: WeekDay;
  status: string;
  deg: number;
  getWeather(lat: number, lon: number): Promise<any>;
}
