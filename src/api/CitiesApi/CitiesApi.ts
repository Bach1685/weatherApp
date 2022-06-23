import { AxiosResponse } from "axios";
import { citiesInstance } from "./citiesInstance";
import { ICitiesApi } from "./ICitiesApi";

export class CitiesApi implements ICitiesApi {
  async getCitiesByName(
    name: string,
    lang: string
  ): Promise<AxiosResponse<any, any>> {
    try {
      return await citiesInstance.get(
        "/suggestions/api/4_1/rs/suggest/address",
        {
          params: {
            query: name,
          },
        }
      );
    } catch (ex: any) {
      throw new Error(ex.message);
    }
  }
}
