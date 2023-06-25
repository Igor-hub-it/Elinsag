<script setup>
import ContactsPageVue from './components/ContactsPage/ContactsPage.vue';
import MainPage from './components/MainPage/MainPage.vue';
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <Header />
    <!-- <MainPage /> -->

    <router-view/>

    <Footer />

  </div>
</template>

<style lang="scss">
body,
html,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p {
  margin: 0;
  padding: 0;
}
</style>
