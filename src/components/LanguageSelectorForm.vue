<template>
  <div>
    <select class="select" :value="modelValue" @change="changeOption">
      <option v-for="option of options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
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
  float: right;
  font-size: 20px;
  width: 50px;
}
</style>