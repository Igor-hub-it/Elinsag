<script setup>

</script>

<template>
    <div class="card-partners d-flex w-100 justify-content-between">
        <div class="card-partners__img">
            <slot name="img"/>
        </div>
        <div class="card-partners__content">
            <div class="card-partners__title">
                <slot name="title"/>
            </div>
            <div class="card-partners__text">
                <slot name="text" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../../assets/scss/styles.scss';

.card-partners {
    font-size: 1.2rem;

    border: 2px solid $blue;
    margin-bottom: 1rem;
    padding: 1rem;

    &__content {

    }

    &__title {
        @include title;
        margin-bottom: 1rem;
        font-size: 2rem;
        margin-right: 1rem;
    }

    &__text {
        margin-right: 1rem;

    }

    &__img img {
        max-width: 400px;
        z-index: 5;
    }
}

</style>