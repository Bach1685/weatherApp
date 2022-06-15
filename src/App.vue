


<template>
  <div>
    <button @click="getResponse">кнопка</button>
    <h1>{{ weatherApp }}</h1>
  </div>
</template>

<script lang="ts">
import { WeatherApp } from "./businessLogic/WeatherApp";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      weatherApp: new WeatherApp(),
    };
  },
  methods: {
    async getResponse(): Promise<any> {
      await this.weatherApp.updateWeather(35, 139);
    },
  },
});
</script>

<style>
</style>