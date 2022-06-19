import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";

export type Weather = {
    place: string;
    status: WeatherStatus;
    description: string;
    degC: number;
    degF: number;
    date: Date;
}