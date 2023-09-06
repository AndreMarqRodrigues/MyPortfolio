<template>
  <div class="app-conteiner">
    <AboutPageScene />
    <AboutMeCard/>
  </div>
</template>

<script>
import AboutPageScene from '../components/AboutPageScene.vue';
import AboutMeCard from '../components/AboutMeCard.vue';

export default {
  name: "About",
  components: {
    AboutPageScene,
    AboutMeCard
  },
  mounted() {
    console.log("About view component is mounted!");
  },
}
</script>

<style scoped>
.app-container {
  position: relative; /* Set the container to relative positioning */
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* Set the canvas z-index to be lower than the Navbar */
}

.NavbarVue{
  z-index: 1;
}
</style>
