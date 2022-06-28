import { Expressions } from "./Expressions";
import { ITranslater } from "./ITranslater";
export class Translater implements ITranslater {
  get availableCountriesCodes(): string[] {
    return this.expressions[0].translations.map(
      (translation) => translation.countryCode
    );
  }

  private expressions = [
    {
      id: Expressions.Search,
      translations: [
        {
          countryCode: "ru",
          expression: "Поиск",
        },
        {
          countryCode: "en",
          expression: "Search",
        },
      ],
    },
    {
      id: Expressions.EnterTheCity,
      translations: [
        {
          countryCode: "ru",
          expression: "Введите город",
        },
        {
          countryCode: "en",
          expression: "Enter the city",
        },
      ],
    },
  ];

  getTranslateById(id: number, lang: string): string {
    const expression: string | undefined = this.findExpression(id, lang);
    return expression ? expression : "";
  }

  private findExpression(id: number, lang: string): string | undefined {
    return this.expressions
      .find((expression) => expression.id == id)
      ?.translations.find(
        (translation) => translation.countryCode == lang.toLowerCase()
      )?.expression;
  }
}
