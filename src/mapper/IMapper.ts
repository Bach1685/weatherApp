import { Weather } from "@/businessLogic/Weather";
import { AxiosResponse } from "axios";

export interface IMapper {
  map(originalObject: AxiosResponse, lang: string): Weather;
}
