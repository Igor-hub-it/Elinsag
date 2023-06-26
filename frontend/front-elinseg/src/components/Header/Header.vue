<script setup>

const nav = [
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
  <header class="header">
    <div class="container-xl d-flex justify-content-between h-100 my-auto">
      <router-link :to="'/'" class="header__logo my-auto">
        <img src="../../assets/logo/logo1.svg" alt="logo">
      </router-link>
      <div class="header__search my-auto">
        <!-- реализовать поиск -->
        поиск по сайту
      </div>
      <div class="header__nav my-auto d-flex justify-content-between">
        <div class="header__nav-nav">
          <p class="header__nav-item dropbtn" style="text-decoration-line: underline">
            О нас
          </p>
          <div class="dropdown-content">
            <router-link v-for="link in nav" :key="link" :to="`${link.link}`">
              {{ link.name }}
            </router-link>
          </div>
        </div>
        <router-link :to="'all_news'" class="header__nav-item">
          Мероприятия
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';

header {
  width: 100%;
  height: 5.5rem;
  background-color: $gray;
}

.header {

&__logo img {
  width: 4.5rem;
}

  &__nav {
    width: 200px;

    &-item {
      color: black;
      font-size: 18px;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }

    &-nav {
      position: relative;
      display: inline-block;

      &:hover .dropdown-content {display: block;} 

      &:hover .dropbtn {
        opacity: 0.5;
      }

    }
  }
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}


</style>