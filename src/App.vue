


<template>
  <div>
    <button @click="getResponse">кнопка</button>
    <h1>{{ response }}</h1>
  </div>
</template>

<script lang="ts">
import { WeatherApp } from "./businessLogic/WeatherApp";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      weatherApp: new WeatherApp(),
      response: Object,
    };
  },
  methods: {
    async getResponse(): Promise<any> {
      this.response = await this.weatherApp.getWeather(35, 139);
    },
  },
});
</script>

<style>
</style>