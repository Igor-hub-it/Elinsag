<script setup>

</script>


<template>
    <div class="info-page__description-block">
        <div class="info-page__description-title">
            <slot name="title"/>
        </div>
        <div class="info-page__description-text">
            <slot name="text" />
        </div>
      </div>
</template>


<style lang="scss">
@import '../../../assets/scss/styles.scss';

.info-page {
    
    &__description {
        &-block {
            margin-bottom: 1rem;
        }

        &-title {
            @include title;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            text-align: start;
        }

        &-text {

        }
    }
}

</style>