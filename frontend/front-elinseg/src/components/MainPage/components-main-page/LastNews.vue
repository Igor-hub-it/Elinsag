<script setup>

const last_news = {
    title: 'Предстоящие мероприятия',
    img: ''
}


</script>


<template>
        <div class="last-news w-100">
            <img src="../../../assets/examples/dbk.jpg"
                 alt=""
                 class="last-news__img w-100">

                 <div class="last-news__block">
                    <div class="last-news__title">
                        {{ last_news.title }}
                    </div>
            
                    <div class="last-news__button">
                        <Button>
                            Подробнее
                        </Button>
                    </div>
                </div>
            
        </div>
</template>


<style lang="scss">
@import '../../../assets/scss/styles.scss';

.last-news {
    margin-top: 3rem;
    position: relative;
    margin-bottom: 3rem;

    &__shadow {
        background: #000;
        z-index: 1;
    }

    &__img {
        max-height: 500px;
        object-fit: cover;
        
        filter: brightness(40%);
    }

    &__block {
        position: absolute;
        top: 40%;
        left: 30%;
        color: $white;
        text-align: center;
        font-weight: bold;
        text-decoration-line: underline;
    }

    &__title {
        font-size: 36px;
        margin-bottom: 1rem;
    }

    
}

</style>