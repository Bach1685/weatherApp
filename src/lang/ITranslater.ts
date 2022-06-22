export interface ITranslater {
  availableCountriesCodes: string[];
  getTranslateById(id: number, lang: string): string;
}
