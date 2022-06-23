import { AxiosResponse } from "axios";

export interface ICitiesApi {
  getCitiesByName(
    place: string,
    lang: string
  ): Promise<AxiosResponse<any, any>>;
}
