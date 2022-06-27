<template>
  <input
    class="search-string"
    @keypress="enterQuery"
    :placeholder="`${placeholder}...`"
    :value="query"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import { store } from "@/store";

export default defineComponent({
  name: "search-string",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapMutations({
      enterQuery: "searchString/setQuery",
      // newQuery: this.query,
    }),
  },
  computed: {
    // ...mapState({placeholder: (state: any) => state.placeholder,}),
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