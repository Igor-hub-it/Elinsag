<script setup>

</script>

<template>

    <div class="card-news card h-100">
        <div class="card-news__img card-img-top">
            <slot name="img"></slot>
        </div>

        <div class="card-body">
            <div class="card-news__title">
                <slot name="title"></slot>
            </div> 
        </div>

        <div class="card-footer">
            <div class="card-news__date">
                <slot name="date"></slot>
            </div> 
          </div>        
    </div>

  
</template>

<style lang="scss">
@import './../../assets/scss/styles.scss';

.card-news {

    text-align: center;
    width: 300px;

    &__title {
        font-size: 1rem;
        font-weight: bold;
    }

    &__img img {
        width: 100%;

    }

    &__date {
        font-size: 14px;
    }

    &:hover {
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        cursor: pointer;
    }
}

</style>