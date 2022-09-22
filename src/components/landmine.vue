<template lang='pug'>
div(class="w-[310px] md:w-[400px] h-auto flex flex-col items-center justify-start bg-slate-50")
  div(class="flex flex-wrap justify-center items-center")
    div(
      v-for="item in data"
      class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] m-1 flex justify-center items-center bg-lime-400 "
    ) {{item}}
</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  export default {
    name: 'landmineView',
    components: {
    },
    setup() {
      const data = ref([])
      // 8 10
      for(let i = 0;i<80;i++) {
        data.value.push(i + 1)
      }
      console.log(data.value.length)


      return {
        data
      }
    }
  }
</script>
