<template>
  <div class="bg-bio">
    <div class="container">
      <nuxt-link to="/projects">Go back</nuxt-link>
      <h1>
        "Je suis Guillaume et je développe des sites et applications de puis maintenant
        4ans, mes spécialité ? Le design web, l'intégration et de le développement
        javascript"
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: "no-nav-bio",
};
</script>

<style lang="scss" scoped>
.bg-bio {
  background: rgb(34, 33, 33);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 24px;
  }
}
</style>
