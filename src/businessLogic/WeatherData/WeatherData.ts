import { IWeatherData } from "./IWeatherData";
import { WeekDay } from "../enum/WeekDay";
import { WeatherStatus } from "../enum/WeatherStatus";

export class WeatherData implements IWeatherData {
  place = "";
  status = WeatherStatus.Clear;
  description = "";
  weekDay = WeekDay.Monday;
  date = new Date(); 
  degC = 20;
  degF = 0;
}
