<script>
import { useRouter } from 'vue-router'
import Button from './Button.vue'

const router = useRouter();

export default {
  components: { Button }, 
    name: "CardNews",
    props: {
        news_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        toDetails(id) {
            this.$router.push({name: 'news', params: {Pid: id}})
      }
    }
}

</script>

<template>

    <div class="card-news card h-100" @click="toDetails(news_data.id)">
        <div class="card-news__img card-img-top">
            <img :src="`/examples/${news_data.img}.jpg`" alt="">
        </div>

        <div class="card-body">
            <div class="card-news__title">
                {{ news_data.title }}
            </div> 
        </div>

        <div class="card-footer">
            <div class="card-news__date">
                {{ news_data.date }}
            </div> 
          </div>   

        </div>

  
</template>

<style lang="scss">
@import './../../assets/scss/styles.scss';

.card-news {

    text-align: center;
    width: 300px;

    &__title {
        font-size: 1rem;
        font-weight: bold;
    }

    &__img img {
        width: 100%;

    }

    &__date {
        font-size: 14px;
    }

    &:hover {
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        cursor: pointer;
    }
}

</style>