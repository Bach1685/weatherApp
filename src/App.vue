<template>
  <div class="main">
    <search-form class="search-form"></search-form>
    <weather-card :weatherApp="weatherApp"></weather-card>
    <button @click="getResponse">кнопка</button>
  </div>
</template>

<script lang="ts">
import { WeatherApp } from "./businessLogic/WeatherApp";
import { defineComponent } from "vue";
import SearchForm from "./components/SearchForm.vue";
import WeatherCard from "./components/WeatherCard.vue";
import weatherApi from "./api/WeatherApi/WeatherApi";

export default defineComponent({
  components: {
    SearchForm,
    WeatherCard,
  },
  data() {
    return {
      weatherApp: new WeatherApp(),
      city: "London",
    };
  },
  methods: {
    async getResponse(): Promise<any> {
      const coordinates = await weatherApi.geo(this.city);
      console.log(coordinates);
      const resp = await weatherApi.data(
        coordinates.data[0].lat,
        coordinates.data[0].lon
      );
      console.log(resp);
    },
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