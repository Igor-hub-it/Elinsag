<script setup>

</script>


<template>
    <div class="info-main w-100">
        <div class="info-main__title d-flex justify-content-center">
            <p>
                Немного об Элинсэг
            </p>
            
        </div>

        <div class="info-page__info d-flex justify-content-between">
            <p class="info-main__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae quaerat accusamus debitis similique nostrum sit cupiditate et veritatis consectetur suscipit molestias excepturi tenetur assumenda, unde est alias, minima impedit optio? Perferendis soluta, iusto similique corporis natus quisquam repellat minima sint odio perspiciatis, eveniet officiis expedita, necessitatibus nulla repudiandae dolor? Perferendis ex aperiam nihil, necessitatibus eveniet vero odit cumque reiciendis voluptatibus fugit? Eum quod vel eos nobis nostrum quam culpa, quidem ipsa sequi sit ab, corporis repudiandae quas exercitationem maxime nam, rerum libero. Voluptates adipisci, libero in animi repellendus temporibus delectus veniam dignissimos saepe accusantium, iusto laboriosam alias deserunt dicta molestiae aut quae placeat quam tempore minima similique natus tenetur officia necessitatibus. Odit perspiciatis dolores debitis aut nam consectetur dignissimos, omnis, corrupti, rerum cumque nesciunt quia et a assumenda. Maxime dolore illo voluptatibus atque alias adipisci neque earum, sequi voluptates ea? Magni voluptatem, nemo iste perferendis ipsum blanditiis quaerat voluptas.
                </p>
                <div class="info-main__img">
                    <img src="../../../assets/examples/dbk.jpg" alt="" class="">
                </div>
        </div>

        
    </div>
</template>


<style lang="scss">
@import '../../../assets/scss/styles.scss';

.info-main {
    margin-top: 3rem;
    margin-bottom: 3rem;

    &__title p {
        @include title;
    }

    &__text {
        margin-right: 3rem;
        font-size: 16px;
    }

    &__img {
        margin-left: 2rem;
        max-width: 700px;
    }

    &__img img {
        max-width: 700px;
    }

}

</style>