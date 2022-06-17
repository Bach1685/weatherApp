import { WeatherStatus } from "./enum/WeatherStatus";
import { WeatherData } from "./WeatherData/WeatherData";
import { IWeatherData } from "./WeatherData/IWeatherData";
import { Static } from "vue";

export class Mapper {
  static getWeatherStatus(weatherId: number) {
    if (weatherId < 700) {
      return WeatherStatus.Rain;
    }
    if (weatherId < 800 || weatherId == 804) {
      return WeatherStatus.Clouds;
    }
    if (weatherId == 800) {
      return WeatherStatus.Clear;
    }

    return WeatherStatus.PartlyClouds;
  }
  static map(responseFromServer: any): IWeatherData {
    const weatherData = new WeatherData();
    weatherData.place = responseFromServer.data.name;
    weatherData.description = responseFromServer.data.weather[0].description;
    weatherData.date = new Date();
    weatherData.status = this.getWeatherStatus(
      responseFromServer.data.weather[0].id
    );
    weatherData.degC = Math.round(
      this.toCelsius(responseFromServer.data.main.temp)
    );
    weatherData.degF = Math.round(
      this.toFahrenheit(responseFromServer.data.main.temp)
    );
    return weatherData;
  }
  static toCelsius(kelvin: number) {
    return kelvin - 273;
  }
  static toFahrenheit(kelvin: number) {
    return (kelvin - 273) * (9 / 5) + 32;
  }
}
