<template>
  <section class="card sunny">
    <div class="content"></div>
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
.card {
  position: relative;
  max-width: 652px;
  height: 462px;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.rainy {
  position: relative;
  width: 652px;
  height: 462px;

  background: linear-gradient(63.82deg, #0539c0 0%, #5bc4ff 125.58%);
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.sunny {
  position: relative;
  width: 652px;
  height: 462px;

  background: linear-gradient(
    63.82deg,
    #da7211 0%,
    rgba(253, 245, 47, 0.99) 125.58%
  );
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
.cloudy {
  position: relative;
  width: 652px;
  height: 462px;

  background: linear-gradient(63.82deg, #848ccf 0%, #b8bce6 125.57%);
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.partly-cloudy {
  position: relative;
  width: 652px;
  height: 462px;

  /* bg */

  background: linear-gradient(
    63.82deg,
    #05159e 0%,
    #d7fdff 125.57%,
    #84d3ff 125.58%
  );
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
.content {
  box-sizing: border-box;
  position: absolute;
  width: 424px;
  height: 189px;
  left: 114px;
  top: 136px;

  background: linear-gradient(
    116.46deg,
    rgba(255, 255, 255, 0.4) 14.63%,
    rgba(255, 255, 255, 0.1) 68.61%,
    rgba(217, 217, 217, 0) 68.61%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
}
</style>