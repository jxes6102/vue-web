<template lang='pug'>
div(class="")
  h1 main view
  .small__view(
    class="w-screen md:w-[50vw]"
  )
  swiper(
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
      //- div {{item}}
      img(:src="require('./image/img'+item+'.jpg')")
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
