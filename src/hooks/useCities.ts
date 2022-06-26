import { citiesApi } from "@/api/CitiesApi";
import { citiesMapper } from "@/mapper/CitiesApiMapper";
import lodash from "lodash";
import { ref } from "vue";
export function useCities(lang: string) {
  const cities = ref([]);
  const debounce = ref(
    lodash.debounce(async (query: string, lang: string) => {
      const citiesServerData = await citiesApi.getCitiesByName(query, lang);
      cities.value = citiesMapper.map(citiesServerData);
    }, 2000)
  );

  const findCities = async (query: string) => {
    await debounce.value(query, lang);
  };
  const clearCitiesTip = () => {
    cities.value = [];
  };

  return {
    cities,
    debounce,
    findCities,
    clearCitiesTip,
  };
}
