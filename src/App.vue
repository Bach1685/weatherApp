<template>
  <div class="main">
    <search-form @find="find" class="search-form"></search-form>
    <weather-card :weatherApp="weatherData"></weather-card>
  </div>
</template>

<script lang="ts">
import { WeatherData } from "./businessLogic/WeatherData";
import { defineComponent } from "vue";
import SearchForm from "./components/SearchForm.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { weatherApi } from "./api/WeatherApi/WeatherApi";
import { mapper } from "./businessLogic/Mapper";

export default defineComponent({
  components: {
    SearchForm,
    WeatherCard,
  },
  data() {
    return {
      weatherData: new WeatherData(),
      city: "",
    };
  },
  methods: {
    async find(query: any) {
      this.city = query;
      const weatherServerData = await weatherApi.getWeatherByPlace(this.city);
      this.weatherData = mapper.map(weatherServerData);
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const response = await weatherApi.getWeatherByCoordinates(
          position.coords.latitude,
          position.coords.longitude
        );
        this.weatherData = mapper.map(response);
      },
      (error) => {
        console.error(error);
      }
    );
  },
});
</script>

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

.main {
  margin: 100px auto;
  max-width: 652px;
}

.search-form {
  margin: 20px auto;
}
</style>