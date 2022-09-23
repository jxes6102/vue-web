<template lang='pug'>
div(class="w-[310px] md:w-[400px] h-auto flex flex-col items-center justify-start bg-slate-50")
  div(class="flex flex-wrap justify-center items-center")
    div(v-for="(item, index) in land[0].length")
      div(
        v-for="(items, indexs) in land"
        class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] m-1 flex justify-center items-center bg-lime-400 "
      ) {{index+ ',' +indexs}}
</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  export default {
    name: 'landmineView',
    components: {
    },
    setup() {
      const land = ref([])
      for(let i = 0;i<10;i++) {
        const temp = new Array(8).fill({
          isboom:false,
          flag:false,
        })
        land.value.push(temp)
      }
      console.log(land.value)

      return {
        land
      }
    }
  }
</script>
