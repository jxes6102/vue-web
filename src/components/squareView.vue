<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90 overflow-x-hidden overflow-y-auto flex items-center justify-center"
  @click.self="close"
)
  section(
    class="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] overflow-hidden bg-[#111] flex flex-wrap items-center justify-center gap-2"
  )
    i(
      v-for="(items, indexs) in count"
      class="relative w-[5px] h-[5px] md:w-[18px] md:h-[18px] bg-[#222] gap-1"
      :style="getRandom()"
    )
</template>
<script>
  // @ is an alias to /src
  import { ref,inject,computed,onMounted } from 'vue'
  import store from '@/store'
  export default {
    name: 'squareView',
    components: {
    },
    setup() {
      store.commit('setLoad', true)
      const close = inject('close')
      const colNum = ref(23)
      const rowNum = ref(25)
      const count = computed(() => colNum.value*rowNum.value)
      const arr = ref([1,12,8,6,4,18,5,2,3,11,14,22,3,27,21,15,16,2,22,7,21,10,20])
      const getRandom = () => {
        return '--i:' + arr.value[Math.floor(Math.random() * 23)]
      }

      onMounted(async() => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        store.commit('setLoad', false)
      })

      return {
        close,
        count,
        getRandom
      }
    }
  }
</script>
<style scoped>
section i:nth-child(5n+1) {
  animation: colorchange 2s infinite,degchange 5s infinite ;
  animation-delay: calc(-1s * var(--i));
}
section i:nth-child(5n+2) {
  animation: colorchange 3s infinite,degchange 5s infinite ;
  animation-delay: calc(-1.5s * var(--i));
}
section i:nth-child(5n+3) {
  animation: colorchange 4s infinite,degchange 5s infinite ;
  animation-delay: calc(-2s * var(--i));
}
section i:nth-child(5n+4) {
  animation: colorchange 5s infinite,degchange 5s infinite ;
  animation-delay: calc(-2.5s * var(--i));
}
section i:nth-child(5n+5) {
  animation: colorchange 6s infinite,degchange 5s infinite ;
  animation-delay: calc(-3s * var(--i));
}
@keyframes colorchange {
  0%,20% {
    background-color: #222;
  }
  60% {
    background-color: #0f0;
  }
  80%,100% {
    background-color: #222;
  }
}
@keyframes degchange {
  0%{
    filter: hue-rotate(0deg);
  }
  100%{
    filter: hue-rotate(360deg);
  }
}

</style>
