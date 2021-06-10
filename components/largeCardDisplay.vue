<template>
  <div class="container">
    <h3 class="header">{{ cardSection.title }}</h3>
    <p class="snippet">
      {{ cardSection.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard v-for="card in cardSection.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardSection"],
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 990px) {
  .cards-container {
    flex-direction: column;
  }
}
</style>
