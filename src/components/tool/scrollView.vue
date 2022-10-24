<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90 overflow-x-hidden overflow-y-auto mine-flex-center"
  @click.self="close"
  @scroll="handleScroll"
)
  div(class="w-2/3 h-[5000px] bg-purple-100")
div(class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto")
  div(
    :class="[ \
      data > 200 && data < 500 ? 'scale-[2.5]' : 'scale-100', \
      data > 700 && data < 1000 ? 'shake' : '', \
    ]"
    class="text-4xl font-extrabold transition-all duration-300 ease-in-out"
  ) {{data}}
</template>
<script>
  // @ is an alias to /src
  import { ref,inject } from 'vue'
  export default {
    name: 'scrollView',
    components: {
    },
    setup() {
      const close = inject('close')
      const data = ref(0)
      const handleScroll = (e) => {
        data.value = Math.floor(e.target.scrollTop)
      }

      return {
        close,
        data,
        handleScroll
      }
    }
  }
</script>
<style scoped>
.shake {
  animation: shake 2s infinite ;
}
@keyframes shake {
  0% {
    transform: none;
  }
  15% {
    transform: translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);
  }
  30% {
    transform: translate3d(20%,0,0) rotate3d(0,0,1,3deg);
  }
  45% {
    transform: translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);
  }
  60% {
    transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg);
  }
  75% {
    transform: translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);
  }
  100% {
    transform: none;
  }
}

</style>
