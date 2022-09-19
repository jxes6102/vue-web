<template lang='pug'>
div(class="overflow-auto w-screen h-[100vh] min-h-[100vh] flex flex-col items-center justify-center")
  swiper(
    @swiper="onSwiper"
    class="w-[80vw] md:w-[35vw]"
    :loop="false"
    :autoplay="false"
    :slidesPerView="1"
    :initialSlide="nowSlide"
    :speed="1000"
    :spaceBetween="5"
  )
    swiper-slide(
      v-for="(item, index) of lists"
      :key="item"
    )
      div(class="")
        img(
          class="w-full rounded-[20px]"
          :src="require(`${item}`)"
          @click="change"
        )
  swiper(
    class="w-[80vw] md:w-[35vw] mt-5"
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
          :class="[ \
            nowSlide === index ? 'opacity-100' : 'opacity-50', \
          ]"
          class="w-full"
          :src="require(`${item}`)"
          @click="action(item)"
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
    props: {
    },
    setup() {
      const lists = ref([
        './image/img2.jpg',
        './image/img3.jpg',
        './image/img5.jpg',
        './image/img6.jpg',
        './image/img4.jpg',
      ])
      const nowSlide = ref(0)
      let swiperElement = null

      const onSwiper = (item) => {
        swiperElement = item
        swiperElement.on('slideChange', () => {
          nowSlide.value = swiperElement.realIndex
        })
      }

      const action =  (item) => {
        const key = lists.value.indexOf(item)
        swiperElement.slideTo(key, 1000, false)
        nowSlide.value = key
      }

      const change = (element) => {
        // offset menu 偏移量
        const screenWidthCenter = window.innerWidth / 2
        if ((screenWidthCenter > element.clientX) && (!swiperElement.isBeginning)) swiperElement.slidePrev(1000, false)
        else if ((screenWidthCenter <= element.clientX) && (!swiperElement.isEnd)) swiperElement.slideNext(1000, false)
      }

      return {
        lists,
        nowSlide,
        action,
        onSwiper,
        change,
      }
    }
  }
</script>
