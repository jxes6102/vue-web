<template lang='pug'>
div(class="w-full h-[100vh] flex items-center justify-center")
  //- h1 main view
  swiper(
    class="w-[60vw] md:w-[30vw]"
    :loop="false"
    :autoplay="false"
    :slidesPerView="1"
    :initialSlide="0"
    :speed="1000"
    :spaceBetween="1"
  )
    swiper-slide(
      v-for="(item, index) of lists"
      :key="item"
    )
      //- div {{item}}
      div(class="w-[60vw] md:w-[30vw]")
        img(
          class="w-full"
          :src="require(`${item}`)"
        )
</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  import SwiperCore, { Autoplay } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css';
  export default {
    name: 'mainView',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const lists = ref([
        './image/img2.jpg',
        './image/img3.jpg',
        './image/img5.jpg',
        './image/img6.jpg',
        './image/img4.jpg',
        './image/img1.jpg',
      ])

      return {
        lists,
      }
    }
  }
</script>
