<template>
   <div class="search-string-with-tips">
       <search-string/>
        <ul class="tips">
          <li
            class="tip"
            @click="choosePlace(tip)"
            v-for="tip of tips"
            :key="tip"
          >
            {{ tip }}
          </li>
        </ul>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
name: "search-string-with-tips",
  props: {
    placeholderTranslate: {
      type: String,
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
  methods:{
    enterQuery(event: any) {
      this.isSendEmptyQuery = false;
      this.$emit("enterQuery", this.query);
    },
    choosePlace(place: string) {
      this.query = place;
      this.$emit("choosePlace", place);
    },
  }
})
</script>

<style scoped>

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

.tips {
  position: absolute;
}

.tip {
  font-family: "Inter";
  font-size: 20px;
  line-height: 1.5;
  max-width: 200px;
  border-radius: 5px;
  background-color: white;
  color: black;
}
.tip:hover {
  cursor: pointer;
  background-color: #555555;
  color: white;
}
.search-string {
  font-size: 20px;
  height: 40px;
  max-width: 200px;
  font-family: "Inter";
  margin: auto;
  display: block;
}
</style>