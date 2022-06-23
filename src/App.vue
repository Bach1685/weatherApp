<template>
  <div class="app" @click="clearCitiesTip">
    <language-selector-form
      v-model="lang"
      :options="languages"
      class="app__language-selector-form"
    />
    <search-form
      @find="findWeather"
      :translates="searchFormTranslates"
      :cities="cities"
      class="app__search-form"
      @cityWordPress="findCities"
      @choiseCity="findWeather"
    ></search-form>
    <weather-card
      :weather="weatherData"
      :lang="lang"
      class="app__wrapper"
    ></weather-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTranslates } from "./hooks/useTranslates";
import { useWeather } from "./hooks/useWeather";
import { useCities } from "./hooks/useCities";

export default defineComponent({
  setup() {
    const { lang, languages, searchFormTranslates } = useTranslates();
    const { cities, debounce, findCities, clearCitiesTip } = useCities(
      lang.value
    );
    const { weatherData, findWeather } = useWeather(lang.value, cities.value);

    return {
      lang,
      languages,
      searchFormTranslates,
      cities,
      debounce,
      findCities,
      clearCitiesTip,
      weatherData,
      findWeather,
    };
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