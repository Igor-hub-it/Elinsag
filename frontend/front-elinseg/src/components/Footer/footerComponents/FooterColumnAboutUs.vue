<script setup>

const links = [
    {
        name: 'Об Элинсэг',
        link: ''
    },
    {
        name: 'Структура',
        link: ''
    },
    {
        name: 'Партнёры',
        link: ''
    },
    {
        name: 'Контакты',
        link: ''
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
                <a :href="item.link"
                   class="column-about-us__link text-dark ">
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.column-about-us {


    &__link:hover {
        opacity: 0.5;
        cursor: pointer;
    }
}
</style>