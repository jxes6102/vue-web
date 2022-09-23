<template lang='pug'>
div(class="w-[310px] md:w-[400px] h-auto flex flex-col items-center justify-start bg-slate-50")
  div(class="flex flex-wrap justify-center items-center")
    div(v-for="(item, index) in land[0].length")
      div(
        v-for="(items, indexs) in land"
        class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] m-[2px] flex justify-center items-center bg-lime-400 "
        @click="action(indexs,index)"
      ) {{land[indexs][index].display}}
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
        land.value[i] = []
        for(let j = 0;j<8;j++) {
          land.value[i][j] = {
            isBoom:false,
            flag:false,
            display:0,
          }
        }
      }
      console.log(land.value)

      const action = (x, y) => {
        console.log(land.value)
        console.log(x, y, land.value[x][y])
        land.value[x][y].display = 'q'
      }

      return {
        land,
        action,
      }
    }
  }
</script>
