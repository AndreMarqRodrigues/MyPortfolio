<template>
  <div class="NavPosition">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
export default {
  name: "App",
  components: {
    Navigation,
  }
};
</script>

<style scoped>
#NavPosition{
  position: fixed;
  z-index: 1;
}
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
  }

</style>