import { IWeatherApp } from "./IWeatherApp";
import { WeekDay } from "./WeekDay";
import axios from "axios";

export class WeatherApp implements IWeatherApp {
  city = "Москва";
  country = "";
  weekDay = WeekDay.Monday;
  status = "";
  deg = 20;
  degF = 0;

  // async updateWeather(city: string): Promise<any> {
  //   const response = await this.getResponse(city);
  //   this.city = response.data.name;
  //   this.country = response.data.sys.country;
  //   this.status = response.data.weather.main;
  //   this.deg = response.data.main.temp - 273;
  //   this.degF = this.deg * (9 / 5) + 32;
  // }

  // async getResponse(city: string): Promise<any> {
  //   const responseCoordinate = await axios.get(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1f9bacfa4612bda68445c63f8d79f738`
  //   );
  //   const response = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${responseCoordinate.data[0].lat}&lon=${responseCoordinate.data[0].lon}&appid=1f9bacfa4612bda68445c63f8d79f738`
  //   );
  // }
}
