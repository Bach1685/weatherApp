


<template>
  <div>
    <button @click="getResponse">кнопка</button>
    <input v-model="city" />
    <p>{{ weatherApp }}</p>
  </div>
</template>

<script lang="ts">
import { WeatherApp } from "./businessLogic/WeatherApp";
import { defineComponent } from "vue";
export default defineComponent({
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