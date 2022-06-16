<template>
  <section class="card main__card card_sunny">
    <div class="card__inner-card">
      <div class="content card__content">
        <div class="weather">
          <p class="weather__status">Cолнечно{{ weatherApp.status }}</p>
          <img
            class="weather__img"
            src="../../src/assets/img/sun.png"
            alt="sun"
          />
        </div>
        <img class="line" src="../../src/assets/img/Line.png" alt="line" />
        <div class="data">
          <p class="data__location">{{ weatherApp.city }}</p>
          <p class="data__day">{{ weatherApp.weekDay }}</p>
          <p class="data__deg">{{ weatherApp.deg }}</p>
          <p class="data__degF">{{ weatherApp.degF }} F</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    weatherApp: {
      type: Object,
      required: true,
    },
    city: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/Inter/Inter-VariableFont_slnt\,wght.ttf")
    format("truetype");
  font-style: normal;
  font-weight: normal;
}

.card {
  max-width: 652px;
  height: 462px;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.main__card {
  position: relative;
}

.card_rainy {
  background: linear-gradient(63.82deg, #0539c0 0%, #5bc4ff 125.58%);
}

.card_sunny {
  background: linear-gradient(
    63.82deg,
    #da7211 0%,
    rgba(253, 245, 47, 0.99) 125.58%
  );
}

.card_cloudy {
  background: linear-gradient(63.82deg, #848ccf 0%, #b8bce6 125.57%);
}

.card__partly-cloudy {
  background: linear-gradient(
    63.82deg,
    #05159e 0%,
    #d7fdff 125.57%,
    #84d3ff 125.58%
  );
}

.content {
  box-sizing: border-box;
  width: 359px;
  height: 138px;
  display: flex;
  justify-content: space-between;
}

.card__inner-card {
  position: absolute;
  left: 114px;
  top: 136px;
  width: 424px;
  height: 189px;
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

.card__content {
  margin: 25px auto;
  width: 359px;
}

.weather {
  width: 188px;
  height: 138px;
}

.line {
  width: 0px;
  height: 136px;
  left: 365px;
  top: 162px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.data {
  width: 116px;
  height: 116px;
}

.weather__status {
  width: 48px;
  /* height: 19px; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.weather__img {
  margin-left: 70px;
}

.data__location {
  width: 116px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 4px;
}

.data__day {
  width: 54px;
  height: 17px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 14px;
}

.data__deg {
  width: 62px;
  height: 44px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  mix-blend-mode: overlay;
}

.data__degF {
  width: 45px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  mix-blend-mode: overlay;
}
</style>