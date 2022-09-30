<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90"
  @click.self="close"
)
  div(
    class="absolute w-[100px] h-[100px] left-0 bottom-0"
    ref="flyItem"
    @touchmove="touchmove"
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
      // window.innerWidth
      return {
        close,
        flyItem,
        touchmove
      }
    }
  }
</script>
