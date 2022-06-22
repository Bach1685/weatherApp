<template>
  <form @submit.prevent>
    <div class="search-form">
      <div class="input-tips-list">
        <input
          class="input"
          v-model="query"
          :placeholder="`${translates.enterTheCity}...`"
          @keypress="keypress"
        />
        <ul class="list">
          <li
            class="list__elem"
            @click="choiseCity(city)"
            v-for="city of cities"
            :key="city"
          >
            {{ city }}
          </li>
        </ul>
      </div>
      <button class="btn" @click="find">{{ translates.search }}</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "search-form",
  props: {
    translates: {
      type: Object,
      required: true,
    },
    cities: {
      type: Object,
    },
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    find() {
      this.$emit("find", this.query);
    },
    keypress() {
      this.$emit("keypress", this.query);
    },
    choiseCity(city: string) {
      console.log(city);
      this.$emit("choiseCity", city);
    },
  },
});
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter/Inter-VariableFont_slnt\,wght.ttf")
    format("truetype");
  font-style: normal;
  font-weight: normal;
}

.list__elem {
  font-family: "Inter";
  font-size: 20px;
  line-height: 1.5;
  max-width: 200px;
  border-radius: 10px;
  background-color: white;
  color: black;
}
.list__elem:hover {
  cursor: pointer;
  background-color: #555555;
  color: white;
}
.input {
  font-size: 20px;
  height: 40px;
  max-width: 200px;
  font-family: "Inter";
}
.btn {
  font-family: "Inter";
  background-color: white;
  border: 2px solid #555555;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px;
  height: 70px;
}

.btn:hover {
  background-color: #555555;
  color: white;
}
.search-form {
  max-width: 350px;
  display: flex;
}
</style>