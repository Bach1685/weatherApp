<template>
   <input
          class="search-string"
          :class="{ danger: isSendEmptyQuery }"
          @keypress="enterQuery"
          :placeholder="`${placeholderTranslate}...`"
          :value="query"
        />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
name: "search-string",

});
</script>

<style>

</style>