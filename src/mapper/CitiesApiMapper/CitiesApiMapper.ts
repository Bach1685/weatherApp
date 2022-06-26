import { IAxiosResponseMapper } from "@/mapper/IAxiosResponseMapper";
import { AxiosResponse } from "axios";

export class CitiesApiMapper implements IAxiosResponseMapper {
  map(axiosResponse: AxiosResponse): Set<string> {
    const cities = axiosResponse.data.suggestions
      .map((elem: any) => {
        return elem.data.city ? elem.data.city : "";
      })
      .filter((elem: any) => elem);
    const uniqueCities = new Set<string>(cities);

    return uniqueCities;
  }
}
