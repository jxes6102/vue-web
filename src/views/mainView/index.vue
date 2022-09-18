<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-center ")
  div(class="w-full h-auto flex items-center justify-center")
    swiper(
      @swiper="onSwiper"
      class="w-[80vw] md:w-[40vw] md:left-[100px]"
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
  div(class="w-full h-auto flex items-center justify-center mt-4")
    swiper(
      class="w-[80vw] md:w-[40vw] md:left-[100px]"
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
  import { ref, computed } from 'vue'
  import store from '@/store'
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
      bgColor: {
        type: String,
        default: () => '#ffffff',
      },
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

      const isMobile = computed(() => store.state.isMobile)
      const change = (element) => {
        // 200 menu 偏移量
        const screenWidthCenter = isMobile.value ? window.innerWidth / 2 : window.innerWidth / 2 + 200
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
