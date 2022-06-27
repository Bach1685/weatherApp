<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">lang</option>
    <option v-for="option of options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { translater } from "@/lang";
import { store } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "language-selector-form",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      // type: any,
      default: () => [],
    },
  },
  methods: {
    changeOption(event: any) {
      store.commit(
        "setPlaceholder",
        translater.getTranslateById(1, event.target.value)
      );
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<style>
.select {
  font-size: 20px;
  width: 50px;
}
</style>