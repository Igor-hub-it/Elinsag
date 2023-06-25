<script setup>

const links = [
    {
        name: 'Об Элинсэг',
        link: 'info'
    },
    {
        name: 'Структура',
        link: 'structure'
    },
    {
        name: 'Партнёры',
        link: 'partners'
    },
    {
        name: 'Контакты',
        link: 'contacts'
    }
]

</script>

<template>
    <div class="col-lg-3 col-md-6 mb-4 mb-md-0 column-about-us">
        <h5 class="text-uppercase fw-bold mt-3">О нас</h5>

        <ul class="list-unstyled mb-0">
            <li v-for="item in links"
                :key="item"
                class="m-2">
                <router-link :to="`${item.link}`"
                   class="column-about-us__link  ">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import '../../../assets/scss/styles.scss';

.column-about-us {

    color: $white;


    &__link {
        font-size: 16px;
        color: white;


        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }
    
    
}
</style>