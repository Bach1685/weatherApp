import { translater } from "@/lang";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export function useTranslates() {
  const lang = ref("en");

  const languages = computed((): string[] => {
    console.log(translater.availableCountriesCodes);
    return translater.availableCountriesCodes;
  });

  const searchFormTranslates = computed((): any => {
    const searchId = 1;
    const enterTheCityId = 2;
    return {
      search: translater.getTranslateById(searchId, lang.value),
      enterTheCity: translater.getTranslateById(enterTheCityId, lang.value),
    };
  });

  return { lang, languages, searchFormTranslates };
}
