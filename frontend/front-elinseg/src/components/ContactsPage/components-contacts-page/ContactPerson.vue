<script setup>

</script>

<template>


    <div class="contact-info my-auto">

        <div class="contact-info__name">
            <slot name="name"/>
        </div>
        
        <div class="contact-info__post">
           <span class="contact-info__tags font-monospace">Должность:</span>  <slot name="post" />
        </div>

        <div class="contact-info__text">
           <span class="contact-info__tags font-monospace">О себе:</span>  <slot name="text" />
        </div>

        <div class="contact-info__date">
        <span class="contact-info__tags font-monospace">Дата назначения:</span> <slot name="date" />
        </div>

        <div class="contact-info__phone">
            <span class="contact-info__tags font-monospace">Телефон:</span> <slot name="phone" />
        </div>

        <div class="contact-info__contacts d-flex">
            <span class="contact-info__tags font-monospace mt-1">Контакты:</span> <slot name="contacts" />
            
            
        </div>

    </div>
  
</template>

<style lang="scss">
@import '../../../assets//scss/styles.scss';

.contact-info {
    font-size: 18px;

    margin-bottom: 2rem;
    /* text-align: center; */

    &__tags {
        font-weight: bolder;
        font-size: 16px !important;
        text-decoration-line: underline !important;
    }

    &__name {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    &__post {
        margin-bottom: 1rem;

    }

    &__text {
        margin-bottom: 1rem;

    }

    &__date {
        margin-bottom: 1rem;

    }

    &__phone {
        margin-bottom: 1rem;

    }

    &__contacts {
        margin-bottom: 1rem;

    }

    &__contacts img {
        width: 2rem;
        margin: 0 0.5rem 0.5rem 1rem;

        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }

    


}

</style>