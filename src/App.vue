<template>
  <div class="app">
    <language-selector-form
      v-model="lang"
      :options="languages"
      class="app__language-selector-form"
    />
    <search-form
      @find="find"
      :translates="searchFormTranslates"
      :cities="cities"
      class="app__search-form"
      @keypress="findCities"
      @choiseCity="choiseCity"
    ></search-form>
    <weather-card
      :weather="weather"
      :lang="lang"
      class="app__wrapper"
    ></weather-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { weatherApi } from "@/api/WeatherApi";
import { mapper } from "@/mapper/WeatherApiMapper";
import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";
import { translater } from "@/lang";
import { citiesApi } from "./api/CitiesApi";
import { citiesMapper } from "./mapper/CitiesApiMapper";
export default defineComponent({
  data() {
    return {
      weather: {
        place: "",
        status: WeatherStatus.Clear,
        description: "",
        degC: 0,
        degF: 0,
        date: new Date(),
      },
      query: "",
      lang: "en",
      cities: [],
    };
  },
  computed: {
    searchFormTranslates(): any {
      const searchId = 1;
      const enterTheCityId = 2;
      return {
        search: translater.getTranslateById(searchId, this.lang),
        enterTheCity: translater.getTranslateById(enterTheCityId, this.lang),
      };
    },

    languages(): string[] {
      return translater.availableCountriesCodes;
    },
  },
  methods: {
    async find(query: string) {
      this.cities = [];
      try {
        const weatherServerData = await weatherApi.getWeatherByPlace(
          query,
          this.lang
        );
        this.weather = mapper.map(weatherServerData);
        this.weather.date = new Date();
        this.weather.place += `, ${new Intl.DisplayNames(this.lang, {
          type: "region",
        }).of(weatherServerData.data.sys.country)}`;
      } catch (ex) {
        alert(ex);
      }
    },
    async findCities(query: string) {
      const citiesServerData = await citiesApi.getCitiesByName(
        query,
        this.lang
      );
      this.cities = citiesMapper.map(citiesServerData);
    },
    async choiseCity(city: string) {
      await this.find(city);
    },
  },

  watch: {
    async lang() {
      await this.find(this.weather.place);
    },
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const weatherServerData = await weatherApi.getWeatherByCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          this.lang
        );
        this.weather = mapper.map(weatherServerData);
        this.weather.date = new Date();
        this.weather.place += `, ${new Intl.DisplayNames(this.lang, {
          type: "region",
        }).of(weatherServerData.data.sys.country)}`;
      },
      (error) => {
        console.error(error);
      }
    );
  },
});
</script>

<style scoped>
.app {
  margin: 100px auto;
  max-width: 652px;
}
.app__wrapper {
  position: relative;
  z-index: -1;
}
.app__search-form {
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
}

.app__language-selector-form {
  float: right;
}
</style>

<style>
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/* -------- */
</style>