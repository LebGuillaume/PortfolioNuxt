<template>
  <NuxtLink :to="`/projects/${card.id}`" class="card">
    <img
      :src="require(`@/assets/img/${card.image || 'friterie.jpg'}`)"
      alt="image site de friterie"
      class="image"
    />
    <h3 class="header">
      {{ card.title }}
    </h3>
    <p class="snippet">{{ card.snippet }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss" scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
}
.image {
  height: 55%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
@media (max-width: 990px) {
  .card {
    width: 100%;
    height: 39rem;
  }
}
@media (max-width: 800px) {
  .card {
    width: 100%;
    height: 30em;
  }
}
</style>
