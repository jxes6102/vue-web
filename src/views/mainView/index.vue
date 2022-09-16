<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-center bg-[#98fb98]")
  div(class="w-full h-auto flex items-center justify-center")
    //- h1 main view
    swiper(
      class="w-[65vw] md:w-[40vw] md:left-[100px]"
      :loop="false"
      :autoplay="false"
      :slidesPerView="1"
      :initialSlide="0"
      :speed="1000"
      :spaceBetween="5"
    )
      swiper-slide(
        v-for="(item, index) of lists"
        :key="item"
      )
        //- div {{item}}
        div(class="")
          img(
            class="w-full rounded-[20px]"
            :src="require(`${item}`)"
          )
  div(class="w-full h-auto flex items-center justify-center mt-4")
    swiper(
      class="w-[65vw] md:w-[40vw] md:left-[100px]"
      :loop="false"
      :autoplay="false"
      :slidesPerView="5"
      :initialSlide="0"
      :speed="1000"
      :spaceBetween="10"
    )
      swiper-slide(
        v-for="(item, index) of lists"
        :key="item"
      )
        div(class="")
          img(
            class="w-full opacity-50"
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
      ])

      return {
        lists,
      }
    }
  }
</script>
