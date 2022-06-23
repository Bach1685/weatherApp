import { AxiosResponse } from "axios";

export interface IAxiosResponseMapper {
  map(axiosResponse: AxiosResponse): any;
}
