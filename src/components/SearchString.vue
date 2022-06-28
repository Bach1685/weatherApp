<template>
  <input
    class="search-string"
    @keypress="enterQuery"
    :placeholder="`${placeholder}...`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "search-string",
  methods: {
    ...mapMutations({ enterQuery: "setQuery" }),
  },
  computed: {
    ...mapGetters({ placeholder: "getPlaceholder" }),
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter/Inter-VariableFont_slnt\,wght.ttf")
    format("truetype");
  font-style: normal;
  font-weight: normal;
}
.search-string {
  font-size: 20px;
  height: 40px;
  max-width: 200px;
  font-family: "Inter";
  margin: auto;
  display: block;
}
.danger {
  border: 5px rgb(241, 85, 85) solid;
  border-radius: 10px;
}
</style>