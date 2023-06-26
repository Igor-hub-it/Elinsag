<script setup>
import ContactPerson from './components-contacts-page/ContactPerson.vue';
import ContactsMap from './components-contacts-page/ContactsMap.vue';

const president = {
    name: 'Гергенов Элбэк Лопсонович',
    post: 'Предстедатель',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto, animi voluptatibus minima distinctio quaerat sapiente asperiores deleniti optio eligendi soluta, suscipit saepe consequuntur eaque?',
    date: '10.10.2022',
    phone: '+7 (950) 384-54-98',
    contacts: [
      {
        icon: 'vk',
        link: 'https://vk.com/jomasion',
        title: 'vk'
      },
      {
        icon: 'instagram',
        link: 'https://instagram.com/gergenovelbek?igshid=MjAxZDBhZDhlNA==',
        title: 'instagram'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/Gergenov_Elbek',
        title: 'telegram'
      }, 
      {
        icon: 'email',
        link: '',
        title: 'bsoelinseg21@gmail.com'
      }
    ],
    photo: 'president'
  }

const vicePresident = {
    name: 'Ринчино Арюна Баторовна',
    post: 'Заместитель председателя',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam animi, excepturi hic modi quo sapiente!', 
    date: '15.10.2022',
    phone: '+7 (924) 353-14-26',
    contacts: [
      {
        icon: 'vk',
        link: 'https://vk.com/rinchinoooo',
        title: 'vk'
      },
      {
        icon: 'instagram',
        link: 'https://instagram.com/rinchino_a?igshid=MjAxZDBhZDhlNA==',
        title: 'instagram'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/a_ar_raa',
        title: 'telegram'
      }, 
      {
        icon: 'email',
        link: '',
        title: 'soelinseg21@gmail.com'
      }
    ],
    photo: 'vice-president'
  }


</script>


<template>
  <div class="contacts-page container-xl">
    <div class="contacts-page__info">
      <div class="contacts-page__info-person d-flex">
        <ContactPerson style="margin-right: 3rem">
          <template v-slot:name>
            {{ president.name }}
          </template>
          <template v-slot:post>
            {{ president.post }}
          </template>
          <template v-slot:text>
            {{ president.text }}
          </template>
          <template v-slot:date>
            {{ president.date }}
          </template>
          <template v-slot:phone>
            {{ president.phone }}
          </template>
          <template v-slot:contacts>
            <a class="contact-info__link" v-for="contact in president.contacts" :key="contact" :href="contact.link">
              <img :src="`/social/${contact.icon}.svg`" :alt="contact.icon"/>
              <span class="contact-info__title">
                {{ contact.title }}
              </span>
            </a>
            
          </template>
        </ContactPerson>

        <div class="contacts-page__info-img">
          <img :src="`/persons/${president.photo}.jpg`" alt="">
        </div>

      </div>

      <!-- <hr/> -->

      <div class="contacts-page__info-person d-flex">
        <div class="contacts-page__info-img">
          <img :src="`/persons/${vicePresident.photo}.jpg`" alt="">
        </div>

        <ContactPerson style="margin-left: 3rem">
          <template v-slot:name>
            {{ vicePresident.name }}
          </template>
          <template v-slot:post>
            {{ vicePresident.post }}
          </template>
          <template v-slot:text>
            {{ vicePresident.text }}
          </template>
          <template v-slot:date>
            {{ vicePresident.date }}
          </template>
          <template v-slot:phone>
            {{ vicePresident.phone }}
          </template>
          <template v-slot:contacts>
            <a v-for="contact in vicePresident.contacts" :key="contact" :href="contact.link">
              <img :src="`/social/${contact.icon}.svg`" :alt="contact.icon"/>
              
            </a>
            
          </template>
        </ContactPerson>
      </div>
    </div>

    <div class="contacts-page__map">
      <ContactsMap />
    </div>
  </div>
</template>


<style lang="scss">
@import '../../assets/scss/styles.scss';

.contacts-page {

  margin-bottom: 3rem;
  margin-top: 3rem;

  &__info {
    


    &-img img {
      width: 450px;
      height: 450px;
      object-fit: cover;
    }

    &-person {
      padding-bottom: 3rem;
      margin-bottom: 3rem;
      margin-top: 3rem;
      border-bottom: 1px solid $gray;
    }

    &__link {
      position: relative;
    }

    &__link:hover + .contact-info__title {
      visibility: visible;
    }

  } 
}

.contact-info__title {
  display: none;


}

/* .contact-info__title {
  position: absolute; 
left: -80px; 
transition: 0.3s; 
padding: 15px; 
width: 100px; 
text-decoration: none;  
font-size: 20px;  
border-radius: 0 5px 5px 0;

  &:hover {
      
  } */


</style>