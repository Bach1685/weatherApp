import { AxiosResponse } from "axios";
import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";
import { Weather } from "@/businessLogic/Weather";
import { IMapper } from "@/mapper/IMapper";

export class Mapper implements IMapper {
  map(axiosResponse: AxiosResponse, lang = "en"): Weather {
    return {
      place: `${axiosResponse.data.name}, ${new Intl.DisplayNames(lang, {
        type: "region",
      }).of(axiosResponse.data.sys.country)}`,
      status: this.getWeatherStatus(axiosResponse.data.weather[0].id),
      description: axiosResponse.data.weather[0].description,
      degC: Math.round(this.toCelsius(axiosResponse.data.main.temp)),
      degF: Math.round(this.toFahrenheit(axiosResponse.data.main.temp)),
      date: new Date(),
    };
  }
  private getWeatherStatus(weatherId: number): WeatherStatus {
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
  private toCelsius(kelvin: number) {
    return kelvin - 273;
  }
  private toFahrenheit(kelvin: number) {
    return (kelvin - 273) * (9 / 5) + 32;
  }
}
