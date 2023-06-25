<script setup>

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

</script>

<template>
  <header class="header">
    <div class="container-xl d-flex justify-content-between h-100 my-auto">
      <div class="header__logo my-auto">
        <img src="../../assets/logo/LOGO.svg" alt="logo">
      </div>
      <div class="header__search my-auto">
        <!-- реализовать поиск -->
        поиск по сайту
      </div>
      <div class="header__nav my-auto d-flex justify-content-between">
        <a href="/" class="header__nav-item">
          О нас
        </a>
        <a href="/" class="header__nav-item">
          Мероприятия
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';

header {
  width: 100%;
  height: 5rem;
  background-color: $yellow-color;
}

.header {
  &__nav {
    width: 200px;

    &-item {
      color: black;
      font-size: 16px;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
}

</style>