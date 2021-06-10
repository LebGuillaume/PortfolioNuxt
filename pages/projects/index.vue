<template>
  <div>
    <div class="container">
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo.slice(0, 1)"
        :key="cardInfo.id"
        :cardSection="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { LargeCardSections } from "@/assets/data.js";

export default {
  head: {
    title: "Portfolio de Guillaume Lebegue Développeur front-end sur Lille",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Portfolio regroupant mes projets de webdesign, d'intégration et de développement front",
      },
    ],
  },
  data() {
    return {
      largeCardInfo: LargeCardSections,
    };
  },
};
// console.log(largeCardInfo.slice(0, 1));
</script>

<style lang="scss" scoped></style>
