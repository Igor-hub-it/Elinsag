<script>
export default {
  name: "PageNews",
  // props: ['news_'],
  data() {
    return {
      id: this.$route.params.Pid,
      title: 'details',
      news: [
        {
          id: 1,
          title: 'Посвящение',
          img: 'posvat',
          description: '"БСО ""Элинсэг"" пригласило новоиспеченных студентов на ""Посвящение в первокурсники"", где студенты отметили наступление лучших годов жизни. Посвящение прошло 2 октября в 14:00 на кругах, где ребята успешно прошли квест и получили призы. Студенты смогли познакомиться друг с другом и весело провести время."',
          date: '2.10.2022',
          photos: [
            'posvat1', 'posvat2', 'posvat3'
          ]
        },
        {
          id: 2,
          title: 'Экскурсии',
          img: 'eks',
          description: '"В 2022 году в ДВФУ поступило рекордное количество первокурсников и далеко не все успели посетить самые красочные и запоминающиеся места Владивостока. Именно поэтому специально для первокурсников БСО «Элинсэг» провело экскурсию по достопримечательностям и историческим местам города у моря. За 6 часов экскурсанты посетили 9 локаций: фуникулёр, набережную Цесаревича, Старый Дворик ГУМа, Площадь Борцов Революции, Морской Вокзал Владивостока, Арбат, Сквер Городов-побратимов, Миллионку, и Спортивную Набережную. В разделе ""Мероприятия"" сообщества ВКонтакте участники смогли проголосовать за удобное для тебя время начала экускурсии. Также был доступен чат ВК, где провожающие  поддерживали связь с экскурсантами."',
          date: '23.10.2022',
          photos: [
            'eks1', 'eks2', 'eks3'
          ]
        },
        {
          id: 3,
          title: 'Удэшын амаралта',
          img: 'hallowen',
          description: '"29 октября в коворкинге Аякс прошел ""Удэшын амаралта"", где участники смогли окунуться в атмосферу героического эпоса «Гэсэр» и помогли главному герою победить силы Атай Улаана.- ""Сайн байна, эрхим зоригтой сэрэгшэд! Ами наhаяа, бэеэ гамнангүй зоригтойгоор дайлалдаhан тандаа халуун баярые хүргэнэб! Танай хүсөөр, танай зоримгойhоо Алтай Улааниие илабабди! © Гэсэр"" Все испытания проходили в виде игропрактик, где гости могли насладиться высочайшим актёрским мастерством организаторов, сторителлингом о мифологии тюрко-монгольских народов и атмосферой героического эпоса. А после сокрушительной победы над злыми демонами ребята отпраздновали это боовами - бурятскими сладкими угощениями.',
          date: '29.10.2022',
          photos: [
            'hallowen1', 'hallowen2', 'hallowen3'
          ]
        },
        {
          id: 4,
          title: 'День национальной одежды',
          img: 'dno',
          description: '"31 марта Элинсэг провели ""День Национальной Одежды"". Делегации продемонстровали свои национальные наряды и поделились ее уникальными особенностями, историей и культурным значением. Будь то красочный саронг, элегантное кимоно или потрясающее сари, всем не терпелось узнать больше о разнообразии и красоте различных национальных стилей одежды. Но это еще не все, конкурсанты соревновались за то, чтобы завоевать сердце аудитории и забрать приз. День был полнон различных интерактивов и незабываемых воспоминаний, а также был проведен розыгрыш среди учатников мероприятия. ""День Национальной Одежды"" стал возможностью открыть для себя красоту традиционной одежды и узнать больше о различных культурах!"',
          date: '31.03.2023',
          photos: [
            'dno1', 'dno2', 'dno3'
          ]
        }, {
          id: 5,
          title: 'Спортивное землячество',
          img: 'sport-zem',
          description: "Элинсэг пригласило жителей Владивостока на ежегодное спортивное землячество среди студентов ДВФУ, которое прошло 7 мая в ДВФУ. Гостей ждала насыщенная развлекательная программа, вкусный обед на свежем воздухе, а также времяпрепровождение в веселой компании. Во время мероприятия все участники успели пройти спортивную эстафету, поиграть волейбол, поучаствовать в викторине, а также традиционно узнать сильнейшего с помощью Бухэ Барилдаан",
          date: '07.05.2023',
          photos: [
            'sport-zem1', 'sport-zem2', 'sport-zem3'
          ]
        },
        {
          id: 6,
          title: 'Мисс Азия',
          img: 'miss-asia',
          description: "Традиционно Элинсэг принял участие в организации ежегодного межнационального конкурса красоты и таланта 'Мисс Азия ДВФУ - 2023' совместно с якутской студенческой организацией «Кэскил». В этом году уже на этапе кастинга свое желание выступить в конкурсе проявили студенты ДВФУ из России, Индии, Китая, Кореи, Монголии, Бурятии, Якутии и Тувы. На протяжении 2 месяцев участницы конкурса проходили через различные этапы, где они продемонстрировали свою эрудицию, умения ораторского мастерства, спортивный талант. Завершающим испытанием стал большой концерт, на котором каждая участница раскрыла свою уникальность через индивидуальный творческий номер, национальный костюм, а также общий танец.",
          date: '02.04.2023 - 26.05.2023',
          photos: [
            'miss-asia1', 'miss-asia2', 'miss-asia3'
          ]
        },
        {
          id: 7,
          title: 'День Бурятской Культуры',
          img: 'dbk',
          description: "В 2023 году Республика Бурятия отмечает свой 100-летний юбилей! Это стало большим поводом порадоваться за свой родной край, и поэтому 17 июня Элинсэг решил поделиться красотой и традициями родины в День Бурятской Культуры!Собравшиеся на праздничном мероприятии смогли ближе познакомиться с культурой и историей Бурятии, посмотреть на национальные наряды, попробовать бурятскую кухню, принять участие в видео-квизе, оценить свои навыки в каллиграфии и кастоме одежды, а также поиграть в национальные игры. Элинсэг считает важным показать то, что делает Бурятию такой особенной и прекрасной.",
          date: '17.06.2023',
          photos: [
            'dbk1', 'dbk2', 'dbk3'
          ]
        }
      ]
    }
  },
  methods: {
    // printDetails(data) {
    //   console.log(data)
    // }
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
  <div class="page-news container-xl">
    <div v-for="item in news"
         :key="item.id">
      <div v-if="id == item.id">
        <div class="page-news__title">
          {{ item.title }}
        </div>

        <div class="page-news__content mx-auto">
          <div class="page-news__img">
            <img :src="`/news-page/${item.img}.jpg`"
                 alt="">

          </div>
          <div class="page-news__description">
            {{ item.description }}
          </div>

          <hr>

          <div class="page-news__mini-title">
            Как это было?
          </div>
          <div class="page-news__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vero nam mollitia nobis suscipit obcaecati reprehenderit ipsam doloribus eligendi reiciendis ipsum esse est quam molestiae porro magnam. Voluptatem fuga quae quo aperiam, nisi ex ipsum, consequuntur magni rerum eum atque ut sint, qui eos beatae esse illo odit delectus. Perferendis quas neque aperiam adipisci tenetur. Voluptatibus porro aut voluptates voluptas laborum deleniti dolorum magni fugit enim, sit non earum, dolores blanditiis odio quae reiciendis nulla. Obcaecati voluptate exercitationem molestias eos laudantium sapiente sequi eaque magnam quis tempore facere quidem nemo ipsa nobis magni, dicta, nostrum ea pariatur commodi quae blanditiis? Voluptatibus est voluptatum placeat fugiat recusandae? Aut expedita, perspiciatis veritatis et quibusdam itaque aliquid laboriosam sapiente eos, labore perferendis recusandae placeat dolorem consequatur doloribus illum maxime at culpa assumenda deserunt adipisci eius? Amet, inventore. Ducimus sed atque dolorem ullam aperiam rem unde alias, corrupti laborum recusandae doloribus molestias fugiat debitis excepturi, necessitatibus expedita ad perferendis consectetur, autem dicta! Eaque nostrum totam officiis culpa ea unde obcaecati consequuntur impedit explicabo, nesciunt dolorum accusamus quae! Totam vero quibusdam maiores ad, accusamus repudiandae excepturi atque sed ex esse quam harum, earum amet velit provident deserunt. Cum, nostrum impedit! Itaque alias velit praesentium modi?
          </div>

          <hr>

          <div class="page-news__photos d-flex justify-content-between">
            <img v-for="photo in item.photos" :key="photo" :src="`/news-page/${photo}.jpg`" alt="">
          </div>

          <hr>

        

          <div class="page-news__date">
            {{ item.date }}
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';

.page-news {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  &__title {
    @include title;
    text-decoration-line: underline;
  }

  &__content {
    width: 100%;
    text-align: center;

  }

  &__img img {
    width: 100%;
    max-height: 530px;
    object-fit: cover;
  }

  &__description {
    font-size: 16px;
    text-align: justify;
    margin-top: 2rem;
    margin-bottom: 2rem;

  }

  &__mini-title {
    font-weight: bold;
    font-size: 22px;
    text-align: start;
    margin-bottom: 0.5rem;

  }

  &__text {

    text-align: justify;
    margin-bottom: 1rem;

  }

  &__photos img {
    max-width: 400px;
    max-height: 315px;
    object-fit: cover;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  &__date {
    text-align: end;
    font-weight: bolder;

  }


}

hr {
  margin-bottom: 2rem;
}
</style>