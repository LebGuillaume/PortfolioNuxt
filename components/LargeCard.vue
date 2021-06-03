<template>
  <div class="card">
    <img
      :src="require(`@/assets/img/${card.image || 'friterie.jpg'}`)"
      alt="image site de friterie"
      class="image"
    />
    <h3 class="header">
      {{ card.title }}
    </h3>
    <p class="snippet">{{ card.snippet }}</p>
    <a :href="card.link">Voir le site</a>
  </div>
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
</style>
