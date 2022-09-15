<template lang='pug'>
div(class="w-screen h-[100vh] flex items-center justify-center")
  //- h1 main view
  swiper(
    class="w-[60vw] md:w-[40vw]"
    :loop="false"
    :autoplay="false"
    :slidesPerView="1"
    :initialSlide="1"
    :speed="1000"
    :spaceBetween="1"
  )
    swiper-slide(
      v-for="(item, index) of lists"
      :key="item"
    )
      div(class="w-[60vw] md:w-[40vw] flex items-center justify-center")
        img(
          class="w-full"
          :src="require('./image/img'+item+'.jpg')"
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
      const lists = ref([1,2,3])

      return {
        lists
      }
    }
  }
</script>
