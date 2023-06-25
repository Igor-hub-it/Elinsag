<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';

const emits = defineEmits(['update:modelValue'])

const { modelValue } = defineProps({
  modelValue: Object,
  title: String,
  img: String,
  description: String,
  date: String

})

const value = ref(modelValue);

watch(value, () => {
  emits('update:modelValue', value)
})

// const news = {
//         title: 'Название новости',
//         img: 'dbk',
//         description: '"БСО ""Элинсэг"" пригласило новоиспеченных студентов на ""Посвящение в первокурсники"", где студенты отметили наступление лучших годов жизни. Посвящение прошло 2 октября в 14:00 на кругах, где ребята успешно прошли квест и получили призы. Студенты смогли познакомиться друг с другом и весело провести время."',
//         date: '2.10.2022'
//     }

</script>

<template>
  <div class="page-news" v-model="value">
      <div class="page-news__title">

      </div>
      <div class="page-news__img">

     </div>
     <div class="page-news__description">

     </div>
     <div class="page-news__date">

     </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';





</style>