import { IWeatherData } from "./IWeatherData";
import { WeekDay } from "./WeekDay";

export class WeatherData implements IWeatherData {
  city = "Москва";
  country = "";
  weekDay = WeekDay.Monday;
  status = "";
  deg = 20;
  degF = 0;
}
