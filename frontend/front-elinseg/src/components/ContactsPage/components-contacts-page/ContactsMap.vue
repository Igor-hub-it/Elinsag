<script setup>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps';

// const map = yandexMap;

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

</script>

<template>

    <div class="contacts-map">
        <div class="contacts-map__title">
            Где мы находимся
        </div>
        <!-- <div class="contacts-map__map">
            <yandex-map :settings="settings">
                Markers
            </yandex-map>
        </div> -->
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