<template>
  <section class="wrapper" :class="wrapper_state">
    <div class="wrapper__card">
      <div class="content wrapper__content">
        <div class="content__weather">
          <p class="content__description">{{ weather.description }}</p>
          <img class="content__img" :src="getURL(weather.status)" alt="sun" />
        </div>
        <img class="content__line" src="@/assets/img/line.png" alt="line" />
        <div class="content__data">
          <p class="content__place">{{ weather.place }}</p>
          <p class="content__day">
            {{
              weather.date.toLocaleString(lang, {
                weekday: "long",
              })
            }}
          </p>
          <p class="content__degC">{{ weather.degC }}°</p>
          <p class="content__degF">{{ weather.degF }} F</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { WeatherStatus } from "@/businessLogic/enum/WeatherStatus";
import { defineComponent } from "vue";
export default defineComponent({
  name: "weather-card",
  props: {
    weather: {
      type: Object,
      required: true,
    },
    lang: {
      type: String,
      default: "ru",
    },
  },
  methods: {
    getURL(name: WeatherStatus) {
      return require(`@/assets/img/${WeatherStatus[name].toLowerCase()}.png`);
    },
  },
  computed: {
    wrapper_state: function () {
      return {
        wrapper_rainy: this.weather.status === WeatherStatus.Rain,
        wrapper_sunny: this.weather.status === WeatherStatus.Clear,
        wrapper_cloudy: this.weather.status === WeatherStatus.Clouds,
        wrapper_partlyСloudy:
          this.weather.status === WeatherStatus.PartlyClouds,
      };
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter/Inter-VariableFont_slnt\,wght.ttf")
    format("truetype");
  font-style: normal;
  font-weight: bold;
}

.wrapper {
  max-width: 652px;
  min-height: 462px;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.wrapper_rainy {
  background: linear-gradient(63.82deg, #0539c0 0%, #5bc4ff 125.58%);
}

.wrapper_sunny {
  background: linear-gradient(
    63.82deg,
    #da7211 0%,
    rgba(253, 245, 47, 0.99) 125.58%
  );
}

.wrapper_cloudy {
  background: linear-gradient(63.82deg, #848ccf 0%, #b8bce6 125.57%);
}

.wrapper_partlyСloudy {
  background: linear-gradient(
    63.82deg,
    #05159e 0%,
    #d7fdff 125.57%,
    #84d3ff 125.58%
  );
}

.content {
  box-sizing: border-box;
  max-width: 359px;
  min-height: 138px;
  display: flex;
  gap: 25px;
}

@media (max-width: 500px) {
  .content {
    flex-direction: column;
  }
}

.wrapper__card {
  position: relative;
  top: 136px;
  margin: auto;
  max-width: 424px;
  min-height: 189px;
  background: linear-gradient(
    116.46deg,
    rgba(255, 255, 255, 0.4) 14.63%,
    rgba(255, 255, 255, 0.1) 68.61%,
    rgba(217, 217, 217, 0) 68.61%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 15px;
}

@media (max-width: 500px) {
  .wrapper__card {
    max-width: 270px;
    top: 36px;
    height: 380px;
  }
}

.wrapper__content {
  position: relative;
  top: 25px;
  margin: auto;
}

.content__weather {
  max-width: 188px;
  min-height: 138px;
  position: relative;
  margin: auto;
}

.content__line {
  width: 0px;
  height: 136px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 500px) {
  .content__line {
    display: none;
  }
}

.content__data {
  width: 116px;
  height: 116px;
  margin: auto;
}

.content__description {
  width: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.content__img {
  position: absolute;
  right: 0px;
}

.content__place {
  width: 116px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 4px;
}

.content__day {
  width: 54px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 14px;
}

.content__degC {
  width: 62px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  mix-blend-mode: overlay;
}

.content__degF {
  width: 45px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  mix-blend-mode: overlay;
}
</style>