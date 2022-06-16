<template>
  <form class="form" @submit.prevent>
    <input class="input" v-model="query" placeholder="Введите город..." />
    <button class="btn" @click="find">Поиск</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      query: "",
    };
  },
  methods: {
    find() {
      this.$emit("find", this.query);
    },
  },
});
</script>

<style>
.input {
  font-size: 20px;
  height: 40px;
}
.btn {
  background-color: white;
  border: 2px solid #555555;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px;
}

.btn:hover {
  background-color: #555555;
  color: white;
}
.form {
  max-width: 316px;
}
</style>