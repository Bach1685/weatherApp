import { WeatherData } from "./WeatherData";
import { IWeatherData } from "./IWeatherData";

class Mapper {
  map(responseFromServer: any): IWeatherData {
    const weatherData = new WeatherData();
    weatherData.city = responseFromServer.data.name;
    weatherData.country = responseFromServer.data.sys.country;
    weatherData.status = responseFromServer.data.weather.main;
    weatherData.deg = Math.round(
      this.toCelsius(responseFromServer.data.main.temp)
    );
    weatherData.degF = Math.round(
      this.toFahrenheit(responseFromServer.data.main.temp)
    );
    return weatherData;
  }
  toCelsius(kelvin: number) {
    return kelvin - 273;
  }
  toFahrenheit(kelvin: number) {
    return kelvin - 273 * (9 / 5) + 32;
  }
}
export const mapper = new Mapper();
