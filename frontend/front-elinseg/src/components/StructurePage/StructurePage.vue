<script setup>
import CardStructure from './components-structure-pge/CardStructure.vue';
import TextStructure from './components-structure-pge/TextStructure.vue';

</script>


<template>
  <div class="partners-page container-xl">
    <div class="partners-page__title">
      Структура организации
    </div>

    <div class="partners-page__com-team">
      <div class="partners-page__com-team_title">
        Командирский состав
      </div>
      <div class="partners-page__com-team_scheme w-100 mb-5">
        <CardStructure class="mb-5">
          <template v-slot:img>
            <img src="../../assets/structure/superviser.svg" alt="">
          </template>
          <template v-slot:title>
            Супервайзер
          </template>
        </CardStructure>
        <CardStructure>
          <template v-slot:img>
            <img src="../../assets/structure/president.svg" alt="">
          </template>
          <template v-slot:title>
            Председатель
          </template>
        </CardStructure>
        <div class="arrow">
          <img src="../../assets/structure/Arrow.svg" alt="">
        </div>
        <CardStructure>
          <template v-slot:img>
            <img src="../../assets/structure/management.svg" alt="">
          </template>
          <template v-slot:title>
            Управление
          </template>
        </CardStructure>
      </div>
    </div>

    <div class="partners-page__apparat">
      <div class="partners-page__apparat_title">
        Аппарат
      </div>
      <div class="partners-page__apparat-scheme">
        <CardStructure>
          <template v-slot:img>
            <img src="../../assets/structure/apparat.svg" alt="">
          </template>
          <template v-slot:title>
            Аппарат
          </template>
        </CardStructure>
        <img src="../../assets/structure/Arrow 2.svg" alt=""/>
        <img src="../../assets/structure/Arrow 3.svg" alt=""/>

        <div class="d-flex justify-content-around mb-5">
          <CardStructure>
            <template v-slot:img>
              <img src="../../assets/structure/expert.svg" alt="">
            </template>
            <template v-slot:title>
              Экспертный совет
            </template>
          </CardStructure>
          <CardStructure>
            <template v-slot:img>
              <img src="../../assets/structure/ispolnitel.svg" alt="">
            </template>
            <template v-slot:title>
              Исполнительный офис
            </template>
          </CardStructure>
        </div>

        <hr class="mb-5">

        <TextStructure class="mb-5" />
        
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import '../../assets/scss/styles.scss';

.partners-page {
  text-align: center;
  
    
  &__title {
    @include title;
  }

  &__com-team {

    &_title {
      @include mini-title;
    }

    &_scheme {
      text-align: center;
      
    }
  }

  &__apparat {

    &_title {
      @include mini-title;
    }

    &_scheme {

    }
  }
}

</style>