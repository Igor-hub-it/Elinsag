<script setup>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps';

// const map = yandexMap;

</script>

<template>

    <div class="contacts-map">
        <div class="contacts-map__title">
            Где мы находимся
        </div>
        <div class="contacts-map__map">

        </div>
    </div>
  
</template>


<style lang="scss">
@import '../../../assets/scss/styles.scss';

.contacts-map {

    &__title {
        @include title;
    }

    &__map {

    }
}


</style>