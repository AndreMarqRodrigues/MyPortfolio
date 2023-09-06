<template>
    <body>
        <div class="app-container">
            <portfolioScene/>
        </div>    
        <main>
            <PortfolioMarkupVue/>
        </main>
    </body>
</template>

<script>
import PortfolioMarkupVue from '../components/PortfolioMarkup.vue';
import portfolioScene from '../components/PortfolioScene.vue';


export default {
    components: {
        portfolioScene,
        PortfolioMarkupVue
    }
}
</script>

<style scoped>
.app-container{
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>