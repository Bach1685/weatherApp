<template>
  <div class="main">
    <search-form @find="find" class="search-form"></search-form>
    <weather-card :weather="weather" class="main__wrapper"></weather-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchForm from "@/components/SearchForm.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import { weatherApi } from "@/api/WeatherApi/WeatherApi";
import { Mapper } from "@/businessLogic/Mapper";
import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";

export default defineComponent({
  components: {
    SearchForm,
    WeatherCard,
  },
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
    };
  },
  methods: {
    async find(query: string) {
      try {
        const weatherServerData = await weatherApi.getWeatherByPlace(query);
        this.weather = Mapper.map(weatherServerData);
      } catch (ex) {
        alert(ex);
      }
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const weatherServerData = await weatherApi.getWeatherByCoordinates(
          position.coords.latitude,
          position.coords.longitude
        );
        this.weather = Mapper.map(weatherServerData);
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
.search-form {
  margin: 20px auto;
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