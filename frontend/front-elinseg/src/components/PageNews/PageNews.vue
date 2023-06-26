<script>
  export default {
    props: {
      news: {
        type: Object,
        required: true
      }
    },
    data() {
      return{
        news: {}
      }
    }
  }

// import { defineProps, defineEmits, watch, ref } from 'vue';



// defineProps({
//   news: Object,
//   default: () => {
//     return ({})
//   }
// }
// )

// const emit = defineEmits(['viewDetails'])

// // const value = ref(modelValue);

// // watch(value, () => {
// //   emits('update:modelValue', value)
// // })

// const news = {
//         title: 'Название новости',
//         img: 'dbk',
//         description: '"БСО ""Элинсэг"" пригласило новоиспеченных студентов на ""Посвящение в первокурсники"", где студенты отметили наступление лучших годов жизни. Посвящение прошло 2 октября в 14:00 на кругах, где ребята успешно прошли квест и получили призы. Студенты смогли познакомиться друг с другом и весело провести время."',
//         date: '2.10.2022'
//     }

</script>

<template>
  <div class="page-news" >
      <div class="page-news__title">
        {{ news.title }}
      </div>
      <div class="page-news__img">
        <img :src="`/examples/${news.img}.jpg`" alt="">

     </div>
     <div class="page-news__description">
      {{ news.description }}
     </div>
     <div class="page-news__date">
      {{ news.date }}
     </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';

.page-news {

  &__img img {
    width: 300px;
  }
}



</style>