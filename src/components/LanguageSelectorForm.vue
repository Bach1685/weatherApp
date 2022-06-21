<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">lang</option>
    <option v-for="option of options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array<any>(),
      default: () => [],
    },
  },
  methods: {
    changeOption(event: any) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  computed: {},
});
</script>

<style>
.select {
  font-size: 20px;
  width: 50px;
}
</style>