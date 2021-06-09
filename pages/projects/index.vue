<template>
  <div>
    <Nav />
    <Header></Header>
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
  data() {
    return {
      largeCardInfo: LargeCardSections,
    };
  },
};
// console.log(largeCardInfo.slice(0, 1));
</script>

<style lang="scss" scoped></style>
