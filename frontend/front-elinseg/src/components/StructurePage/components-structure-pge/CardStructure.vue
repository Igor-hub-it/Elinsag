<template>
  <div class="card-structure mx-auto">
    <div  class="my-auto d-flex justify-content-around">
        <div class="card-structure__img my-auto">
            <slot name="img">

            </slot>
        </div>
        
    <div class="card-structure__title my-auto fw-bold">
        <slot name="title" />
    </div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../../assets/scss/styles.scss';

.card-structure {
    width: 390px;
    height: 110px;
    background-color: $gray;
    border-radius: 15px;
    border: 2px solid black;
    padding: 0.5rem;
    

    &__img img {
        margin-top: 4px;

    }

    &__title {
        font-size: 28px;
    }
}

</style>