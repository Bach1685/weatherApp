class Translater {
  get availableCountriesCodes(): string[] {
    return this.expressions[0].translations.map(
      (translation) => translation.countryCode
    );
  }
  private expressions = [
    {
      id: 1,
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
      id: 2,
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
    console.log("+");
    const expression: string | undefined = this.findInExpressions(id, lang);
    return expression ? expression : "";
  }

  private findInExpressions(id: number, lang: string): string | undefined {
    return this.expressions
      .find((expression) => expression.id == id)
      ?.translations.find(
        (translation) => translation.countryCode == lang.toLowerCase()
      )?.expression;
  }
}

export const translater = new Translater();

//   translations = [
//     {
//       id: 1,
//       value: {
//         ru: "Поиск",
//         en: "Search",
//       },
//     },
//     {
//       id: 2,
//       value: {
//         ru: "Введите город",
//         en: "Enter the city",
//       },
//     },
//   ];
