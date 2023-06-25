<script setup>
import TextInfoPage from './components-info-page/TextInfoPage.vue';

const targets = [
  'Развитие, продвижение и сохранение культуры и ценностей бурятского народа',
  'Повышение национального самосознания',
  'Сотрудничество, взаимодействие и обмен опытом с другими организациями',
  'Помощь в саморазвитии, самореализации членов Организации путем передачи опыта и знаний',
  'егулярное проведение мероприятий направленных на поддержку талантливых студентов'
]

const images = [
  'dbk', 'dbk', 'dbk', 'dbk'
]

</script>


<template>
  <div class="info-page container-xl">
        <div class="info-page__title">
          Об Элинсэг
        </div>

        <div class="info-page__description">
          
          <TextInfoPage>
            <template v-slot:title>
              Видение
            </template>
            <template v-slot:text>
              Мы являемся источником поддержки студентов преимущественно из Республики Бурятия, Забайкальского Края и Иркутской области во Владивостоке, создаем условия для активного участия в жизни и устойчивом развитии бурятского общества, а также для раскрытия потенциала студентов
            </template>
          </TextInfoPage>

          <div class="info-page__slider d-flex justify-content-between">
            <img v-for="img in images" :key="img" :src="`/public/examples/${img}.jpg`" :alt="img">
          </div>

          <TextInfoPage>
            <template v-slot:title>
              Цели Организации
            </template>
            <template v-slot:text>
              <ul>
                <li
                v-for="item in targets"
                :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </template>
          </TextInfoPage>

          
        </div>
  </div>
</template>


<style lang="scss">
@import '../../assets/scss/styles.scss';

.info-page {
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 16px;

     &__title {
      @include title;
     }

     &__description {

     }

     &__slider img {
      width: 300px;
      margin-top: 1rem;
      margin-bottom: 1rem;
     }
}

</style>