<template>
  <div class="main">
    <language-selector-form
      v-model="lang"
      :options="languages"
      class="main__language-selector-form"
    />
    <search-form
      @find="find"
      :translates="searchFormTranslates"
      :cities="cities"
      class="main__search-form"
      @keypress="findCities"
      @choiseCity="choiseCity"
    ></search-form>
    <weather-card
      :weather="weather"
      :lang="lang"
      class="main__wrapper"
    ></weather-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { weatherApi } from "@/api/WeatherApi";
import { mapper } from "@/mapper";
import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";
import { translater } from "@/lang";
import { citiesApi } from "./api/CitiesApi";
// import cities from "@/db";
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
      options: HTMLOptionsCollection,
      cities: {},
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
      try {
        const weatherServerData = await weatherApi.getWeatherByPlace(
          query,
          this.lang
        );
        this.weather = mapper.map(weatherServerData, this.lang);
      } catch (ex) {
        alert(ex);
      }
    },
    async findCities(query: string) {
      const citiesServerData = await citiesApi.getCitiesByName(query, this.lang);
      const cities = citiesServerData.data.suggestions
        .map((elem: any) => {
          return elem.data.city ? elem.data.city : "";
        })
        .filter((elem: any) => elem);
      this.cities = new Set(cities);
      console.log(this.cities);
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
        this.weather = mapper.map(weatherServerData, this.lang);
      },
      (error) => {
        console.error(error);
      }
    );
  },
});
</script>

<style scoped>
.main {
  margin: 100px auto;
  max-width: 652px;
}
.main__wrapper {
  position: relative;
}
.main__search-form {
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main__language-selector-form {
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