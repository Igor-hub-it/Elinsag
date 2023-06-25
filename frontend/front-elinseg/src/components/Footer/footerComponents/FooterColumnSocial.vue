<script setup>

const links = [
    {
        name: 'Вконтакте',
        img: 'vk',
        link: 'https://vk.com/bso_elinseg'
    },
    {
        name: 'Instagram',
        img: 'instagram',
        link: 'https://instagram.com/buryat_vl?igshid=MjAxZDBhZDhlNA=='
    }
]

</script>

<template>

    <div class="column-social col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0 fw-bold m-3 mb-3 text-light">
            Мы в соц. сетях
        </h5>

        <ul class="list-unstyled m-2">
          <li v-for="link in links" :key="link" class="m-2">
            <a :href="link.link" class="column-social__link text-light">
                {{ link.name }}

                <img class="column-social__icon" :src="`/social/${link.img}.svg`" alt="">
            </a>
          </li>
        </ul>
      </div>
  
</template>

<style lang="scss">

.column-social {

    &__link {
        font-size: 16px;

        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }

    &__icon {
        width: 1.7rem;
    }


}

</style>