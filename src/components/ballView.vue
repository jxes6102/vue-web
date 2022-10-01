<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90"
  @click.self="close"
)
  div(
    class="absolute w-[100px] h-[100px] left-0 bottom-0"
    ref="flyItem"
    @touchmove.prevent="touchmove"
    @touchend="touchEnd"
  )
    img(
      class="w-full h-full"
      src="./images/ball2.png" alt="ball"
    )
</template>
<script>
  // @ is an alias to /src
  import { ref,inject } from 'vue'
  export default {
    name: 'ballView',
    components: {
    },
    setup() {
      const close = inject('close')
      const flyItem = ref(null)
      // console.log('flyItem', flyItem)
      const touchmove = (element) => {
        // console.log(flyItem.value.style)
        // console.log(element.touches[0])
        flyItem.value.style.top = element.changedTouches[0].clientY - 50 + 'px'
        flyItem.value.style.left = element.changedTouches[0].clientX - 50 + 'px'
      }

      const touchEnd = (element) => {
        console.log('w: ', window.innerWidth, 'h',window.innerHeight)
        // console.log('w: ',flyItem.value.style.left)
        // console.log('h: ',flyItem.value.style.top)
        // console.log('w: ',element.changedTouches[0].clientX)
        // console.log('h: ',element.changedTouches[0].clientY)
        if (element.changedTouches[0].clientX < 50 ) {
          flyItem.value.style.top = countY(element.changedTouches[0].clientY)
          flyItem.value.style.left = 0 + 'px'
        }
        if (element.changedTouches[0].clientX >= window.innerWidth - 50 ) {
          flyItem.value.style.top = countY(element.changedTouches[0].clientY)
          flyItem.value.style.left = window.innerWidth - 100 + 'px'
        }
        if (element.changedTouches[0].clientX < window.innerWidth / 2 ) {
          flyItem.value.style.top = countY(element.changedTouches[0].clientY)
          flyItem.value.style.left = 0 + 'px'
        } else {
          flyItem.value.style.top = countY(element.changedTouches[0].clientY)
          flyItem.value.style.left = window.innerWidth - 100 + 'px'
        }
      }

      const countY = (y) => {

        if (y < 80 ) {
          console.log('1',y)
          return 80 + 'px'
        } else if (y > window.innerHeight - 100) {
          console.log('2',y)
          return window.innerHeight - 100 + 'px'
        } else {
          console.log('3',y)
          return y
        }
      }
      return {
        close,
        flyItem,
        touchEnd,
        touchmove
      }
    }
  }
</script>
