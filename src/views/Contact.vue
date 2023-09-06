<template>
  <main class="background">
  <div class="form">
    <ContactForm />
  </div>
  </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  components: {
    ContactForm
  }
}
</script>
<style lang="scss" scoped>
.background{
  position: fixed;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
.form{
  margin-bottom: 10rem;
}
</style>

