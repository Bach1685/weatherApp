import { Expressions } from "../lang/Expressions";
import { translater } from "@/lang";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export function useTranslates() {
  const lang = ref("en");

  const languages = computed((): string[] => {
    return translater.availableCountriesCodes;
  });

  const searchFormTranslates = computed((): any => {
    return {
      search: translater.getTranslateById(Expressions.Search, lang.value),
      enterTheCity: translater.getTranslateById(
        Expressions.EnterTheCity,
        lang.value
      ),
    };
  });

  return { lang, languages, searchFormTranslates };
}
