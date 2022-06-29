import { weatherApi } from "@/api/WeatherApi";
import { weather, Weather } from "@/businessLogic/Weather";
import { mapper } from "@/mapper/WeatherApiMapper";
import { StringNullableChain } from "lodash";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { searchStringModule } from "./searchStringModule";

export interface State {
  weather: Weather;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    weather: weather,
  },
  mutations: {
    setPlace(state, newPlace) {
        console.log(newPlace.target.value);
      state.weather.place = newPlace.target.value;
    },
    setStatus(state, newStatus) {
      state.weather.status = newStatus;
    },
    setDescription(state, newDescription) {
      state.weather.description = newDescription;
    },
    setDegC(state, newDegC) {
      state.weather.degC = newDegC;
    },
    setDegF(state, newDegF) {
      state.weather.degF = newDegF;
    },
    setDate(state, newDate) {
      state.weather.date = newDate;
    },
  },
  getters: {
    getPlace(state) {
      return state.weather.place;
    },
    getStatus(state) {
      return state.weather.status;
    },
    getDescription(state) {
      return state.weather.description;
    },
    getDegC(state) {
      return state.weather.degC;
    },
    getDegF(state) {
      return state.weather.degF;
    },
    getDate(state) {
      return state.weather.date;
    },
  },
  actions: {
    async find({ state }, lang: string) {
        console.log(state.weather.place);
      try {
        const weatherServerData = await weatherApi.getWeatherByPlace(
          state.weather.place,
          lang
        );
        state.weather = mapper.map(weatherServerData);
        state.weather.date = new Date();
        state.weather.place += `, ${new Intl.DisplayNames(lang, {
          type: "region",
        }).of(weatherServerData.data.sys.country)}`;
      } catch (ex) {
        alert(ex);
      }
    },
  },
  modules: {
    searchString: searchStringModule,
  },
});
