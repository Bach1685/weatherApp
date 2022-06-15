import { WeekDay } from "./WeekDay";

export interface IWeatherApp {
  city: string;
  country: string;
  weekDay: WeekDay;
  status: string;
  deg: number;
  updateWeather(city: string): Promise<any>;
}
