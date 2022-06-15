import { IWeatherApp } from "./IWeatherApp";
import { WeekDay } from "./WeekDay";
import axios from "axios";

export class WeatherApp implements IWeatherApp {
  city = "";
  country = "";
  weekDay = WeekDay.Monday;
  status = "";
  deg = 20;
  async updateWeather(lat: number, lon: number): Promise<any> {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f9bacfa4612bda68445c63f8d79f738`
    );
    this.city = response.data.name;
    this.country = response.data.sys.country;
    this.status = response.data.weather.main;
    this.deg = response.data.main.temp - 273;
    console.log(response.data);
  }
}
