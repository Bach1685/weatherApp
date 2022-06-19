import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";
import { Weather } from "@/businessLogic/Weather";

export class Mapper {
  static getWeatherStatus(weatherId: number) : WeatherStatus {
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
  static map(responseFromServer: any): Weather {
    return {
      place: responseFromServer.data.name,
        status: this.getWeatherStatus(
          responseFromServer.data.weather[0].id
        ),
        description: responseFromServer.data.weather[0].description,
        degC: Math.round(
          this.toCelsius(responseFromServer.data.main.temp)
        ),
        degF: Math.round(
          this.toFahrenheit(responseFromServer.data.main.temp)
        ),
        date: new Date(),
    };
  }
  static toCelsius(kelvin: number) {
    return kelvin - 273;
  }
  static toFahrenheit(kelvin: number) {
    return (kelvin - 273) * (9 / 5) + 32;
  }
}
