<template>
  <div class="app-container">
    <MainPageScene class="MainPageScene"/>
    <PresentationCard />
  </div>
</template>

<script>
import MainPageScene from '../components/MainPageScene.vue';
import PresentationCard from '../components/PresentationCard.vue';

export default {
    name: "Home",
    components: {
    MainPageScene,
    PresentationCard,
    },
};
</script>

<style scoped>
.app-container {
  position: relative; 
}
.MainPageScene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind the content */
}


</style>
