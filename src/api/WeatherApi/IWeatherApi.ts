export interface IWeatherApi {
  geo(place: string): Promise<any>;
  data(lat: number, lon: number): Promise<any>;
}
