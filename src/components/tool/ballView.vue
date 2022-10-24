<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90"
  @click.self="close"
)
  div(
    :class="[!transitionStatus || 'transition-all duration-200 ease-in-out']"
    class="absolute w-[100px] h-[100px] left-0 bottom-0"
    ref="flyItem"
    draggable="true"
    @touchstart.prevent="touchStart"
    @touchmove.prevent="touchmove"
    @touchend="touchEnd"
    @dragover="dragover"
    @dragend="dragend"
  )
    img(
      :class="[!dargStatus || 'opacity-0']"
      class="w-full h-full"
      src="../images/ball2.png" alt="ball"
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
      const transitionStatus = ref(false)
      const dargStatus = ref(false)
      let touchKey = null

      const touchStart = (e) => {
        if (!touchKey && (touchKey !== 0)) touchKey = e.changedTouches[0].identifier
        if (multiStatus(e)) return false
        transitionStatus.value = false
      }

      const touchmove = (element) => {
        if (multiStatus(element)) return false
        flyItem.value.style.top = element.changedTouches[0].clientY - 50 + 'px'
        flyItem.value.style.left = element.changedTouches[0].clientX - 50 + 'px'
      }

      const touchEnd = (element) => {
        if (multiStatus(element)) return false
        flyItem.value.style.top = countY(element.changedTouches[0].clientY)
        flyItem.value.style.left = countX(element.changedTouches[0].clientX)
        transitionStatus.value = true
      }

      const dragover = () => {
        dargStatus.value = true
      }

      const dragend = (e) => {
        flyItem.value.style.top = countY(e.clientY)
        flyItem.value.style.left = countX(e.clientX)
        dargStatus.value = false
      }

      const countY = (y) => {
        if (y < 140 ) return 90 + 'px'
        else if (y > window.innerHeight - 100) return window.innerHeight - 100 + 'px'
        else return y + 'px'
      }

      const countX = (x) => {
        if (x < window.innerWidth / 2 ) return 0 + 'px'
        else return window.innerWidth - 100 + 'px'
      }

      const multiStatus = (e) => {
        let target = true
        for (let item of e.changedTouches) if (item.identifier === touchKey) target = false
        return target
      }

      return {
        close,
        flyItem,
        transitionStatus,
        dargStatus,
        dragover,
        dragend,
        touchEnd,
        touchmove,
        touchStart,
      }
    }
  }
</script>
