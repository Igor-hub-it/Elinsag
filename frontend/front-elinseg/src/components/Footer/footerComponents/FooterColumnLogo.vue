<script setup>
import Button from "../../Global/Button.vue";

</script>

<template>
    <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
        <router-link :to="'/'" class="column-logo__logo m-2">
            <img src="../../../assets/logo/white-logo.svg" alt="">
        </router-link>

        <div class="column-logo__button">
             <Button class="m-3">
                Связаться с нами
             </Button>
        </div>
        
      </div>
</template>


<style lang="scss">
@import '../../../assets/scss/styles.scss';

.column-logo {
    &__logo img {
        width: 5.5rem;
        fill: $white;
    }
}

</style>