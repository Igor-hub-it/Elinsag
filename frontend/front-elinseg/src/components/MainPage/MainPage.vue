<script setup>
import LastNews from './components-main-page/LastNews.vue';
import InfoMain from './components-main-page/InfoMain.vue';
import LastNewsSlider from './components-main-page/LastNewsSlider.vue';

</script>


<template>
  <main class="main-page container-xl">
    <LastNews />

    <InfoMain />

    <LastNewsSlider />
  </main>
</template>


<style lang="scss">

.main-page {
    margin-top: 2rem;
}

</style>