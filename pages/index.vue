<template>
  <div>
    <Header />

    <Hero />
    <LargeCardDisplay
      v-for="cardInfo in LargeCardInfo"
      :key="cardInfo.id"
      :cardSection="cardInfo"
    />
  </div>
</template>

<script>
import { LargeCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      LargeCardInfo: LargeCardSections,
    };
  },
  components: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Playfair+Display:400,700i,900i";
* {
  box-sizing: border-box;
}

body {
  /* font-family: "Playfair Display", serif; */
  /* color: #acaabe; */
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
