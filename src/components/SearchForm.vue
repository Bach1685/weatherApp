<template>
  <form @submit.prevent>
    <div class="search-form">
      <search-string-with-tips
        :placeholderTranslate="translates.enterTheCity"
        :tips="tips"
        @enterQuery="enterQuery"
        v-model:value="query"
      />
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
    tips: {
      type: Object,
    },
  },
  data() {
    return {
      query: "",
      isSendEmptyQuery: false,
    };
  },
  methods: {
    find() {
      console.log(this.query);

      if (this.query === "") {
        this.isSendEmptyQuery = true;
        return;
      }
      this.$emit("find", this.query);
    },
    enterQuery(query: string) {
      this.isSendEmptyQuery = false;
      this.$emit("enterQuery", query);
    },
    choosePlace(place: string) {
      this.query = place;
      this.$emit("choiseCity", place);
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

.danger {
  border: 5px rgb(241, 85, 85) solid;
  border-radius: 10px;
}

.list {
  position: absolute;
}

.list__elem {
  font-family: "Inter";
  font-size: 20px;
  line-height: 1.5;
  max-width: 200px;
  border-radius: 5px;
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
  margin: auto;
  display: block;
}
.btn {
  font-family: "Inter";
  background-color: white;
  border: 2px solid #555555;
  color: black;
  padding: 8px 32px;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px;
  height: 40px;
  margin: auto;
}

@media (max-width: 390px) {
  .btn {
    position: relative;
    left: 70%;
    margin: 0;
  }
}

.btn:hover {
  background-color: #555555;
  color: white;
}

.search-form {
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
}
</style>