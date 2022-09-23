<template lang='pug'>
div(class="w-[310px] md:w-[400px] h-auto flex flex-col items-center justify-start")
  div(class="flex flex-wrap justify-center items-center")
    div(v-for="(item, index) in land[0].length")
      div(
        v-for="(items, indexs) in land"
        :class="[land[indexs][index].check ? 'bg-[#fcfccf]' : 'bg-[#79fcac]']"
        class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 border-[#b59ec2] flex justify-center items-center "
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
      const init = () => {
        for(let i = 0;i<10;i++) {
          land.value[i] = []
          for(let j = 0;j<8;j++) {
            land.value[i][j] = {
              isBoom:false,
              flag:false,
              display:0,
              check:false,
            }
          }
        }
        madeBoom()
      }

      const madeBoom = () => {
        let count = 15
        for(let i = 0;i<count;) {
          const x = Math.floor(Math.random() * 10)
          const y = Math.floor(Math.random() * 8)
          if(!land.value[x][y].isBoom){
            land.value[x][y].isBoom = true
            i++
          }
        }
        console.log(land.value)
      }
      init()

      const action = (x, y) => {
        land.value[x][y].display = 'q'
        land.value[x][y].check = true
        console.log(land.value)
        console.log(x, y, land.value[x][y])
      }

      return {
        land,
        action,
      }
    }
  }
</script>
