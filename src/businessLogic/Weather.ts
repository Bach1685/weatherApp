import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";

export type Weather = {
  place: string;
  status: WeatherStatus;
  description: string;
  degC: number;
  degF: number;
  date: Date;
};

export const weather: Weather = {
  place: "",
  status: WeatherStatus.Clear,
  description: "",
  degC: 0,
  degF: 0,
  date: new Date(),
};
