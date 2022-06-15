import { IWeatherApp } from "./IWeatherApp";
import { WeekDay } from "./WeekDay";
import axios from "axios";

export class WeatherApp implements IWeatherApp {
  city = "";
  country = "";
  weekDay = WeekDay.Monday;
  status = "";
  deg = 20;
  async getWeather(lat: number, lon: number): Promise<any> {
    console.log(12);
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f9bacfa4612bda68445c63f8d79f738`
    );
  }
}
