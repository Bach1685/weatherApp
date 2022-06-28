import { citiesApi } from "@/api/CitiesApi";
import { citiesMapper } from "@/mapper/CitiesApiMapper";
import lodash from "lodash";
import { ref } from "vue";

export function useTips(lang: string) {
  const tips = ref([]);
  const debounce = ref(
    lodash.debounce(async (query: string, lang: string) => {
      const citiesServerData = await citiesApi.getCitiesByName(query, lang);
      tips.value = citiesMapper.map(citiesServerData);
    }, 2000)
  );

  const findTips = async (query: string) => {
    await debounce.value(query, lang);
  };
  const clearTips = () => {
    tips.value = [];
  };

  return {
    tips,
    debounce,
    findTips,
    clearTips,
  };
}
