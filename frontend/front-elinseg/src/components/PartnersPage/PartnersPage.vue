<script setup>
import CardPartners from './components-partners-news/CardPartners.vue';

const partners = [
  {
    name: 'Дальневосточный Федеральный Университет',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, accusantium?', 
    img: 'dvfu.png'
  },
  {
    name: 'Кэскил',
    text: 'Кэскил - это организация для студентов из Якутии, обучающихся в Приморском крае',
    img: 'keskil.jpg'
  },
  {
    name: 'Амисхал',
    text: '"Автономная некоммерческая организация «Амисхал» г. Владивосток. Целью которой является объединение земляков из Республики Бурятия, Забайкальского края, Иркутской области и укрепление их отношений. Проведение различных мероприятий для земляков, тем самым почитая традиции бурят. Продвижение культуры бурятского народа в г. Владивосток."',
    img: ''
  }
]

</script>


<template>
  <div class="partners-page container-xl">
    <div class="partners-page__title">
        Наши партнёры
    </div>
    <div class="partners-page__main">
      <CardPartners
      v-for="partner in partners"
      :key="partner"
      >
        <template v-slot:img>
          <img :src="`/partners/${partner.img}`" alt="">
        </template>
        <template v-slot:title>
          {{ partner.name }}
        </template>
        <template v-slot:text>
          {{ partner.text }}
        </template>
      </CardPartners>
    </div>
  </div>
</template>


<style lang="scss">
@import '../../assets/scss/styles.scss';

.partners-page {
  margin-top: 3rem;
  margin-bottom: 3rem;
    
  &__title {
    @include title;
  }

  &__main {

  }
}

</style>