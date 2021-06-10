<template>
  <div>
    <b-navbar id="header" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/"> <Logo></Logo> </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="projects">Portfolio</b-nav-item>
            <b-nav-item to="bio">Bio</b-nav-item>
            <b-nav-item to="contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script src="../assets/js/Hero.js"></script>
<script>
import Logo from "../components/logo";
export default {
  name: "name",
  mixins: [],
  components: {
    Logo,
  },
  data() {
    return {};
  },
  model: {},
  props: {},
  methods: {},
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforDestroy() {},
  destroy() {},
};
</script>

<style lang="scss" scoped></style>
