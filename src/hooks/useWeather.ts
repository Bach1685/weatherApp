import { weatherApi } from "@/api/WeatherApi";
import { mapper } from "@/mapper/WeatherApiMapper";
import { onMounted, ref, watch } from "vue";
import { weather } from "./../businessLogic/Weather";
export function useWeather(lang: any, cities: string[]) {
  const weatherData = ref(weather);
// test
  const findWeather = async (query: string) => {
    cities = [];
    try {
      const weatherServerData = await weatherApi.getWeatherByPlace(
        query,
        lang.value
      );
      weatherData.value = mapper.map(weatherServerData);
      weatherData.value.date = new Date();
      weatherData.value.place += `, ${new Intl.DisplayNames(lang.value, {
        type: "region",
      }).of(weatherServerData.data.sys.country)}`;
    } catch (ex) {
      alert(ex);
    }
  };
  const finding = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const weatherServerData = await weatherApi.getWeatherByCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          lang.value
        );
        weatherData.value = mapper.map(weatherServerData);
        weatherData.value.date = new Date();
        weatherData.value.place += `, ${new Intl.DisplayNames(lang.value, {
          type: "region",
        }).of(weatherServerData.data.sys.country)}`;
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onMounted(finding);

  watch(lang, async () => {
    await findWeather(weatherData.value.place);
  });

  return { weatherData, findWeather };
}
