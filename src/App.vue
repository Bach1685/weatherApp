


<template>
  <search-form class="center"></search-form>
  <weather-card :weatherApp="weatherApp"></weather-card>
</template>

<script lang="ts">
import { WeatherApp } from "./businessLogic/WeatherApp";
import { defineComponent } from "vue";
import WeatherCard from "./components/WeatherCard.vue";
import SearchForm from "./components/SearchForm.vue";

export default defineComponent({
  components: {
    WeatherCard,
    SearchForm,
  },
  data() {
    return {
      weatherApp: new WeatherApp(),
      city: "",
    };
  },
  methods: {
    async getResponse(): Promise<any> {
      await this.weatherApp.updateWeather(this.city);
    },
  },
});
</script>

<style>
</style>