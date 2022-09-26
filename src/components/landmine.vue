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
      const flagBoom = []
      const init = () => {
        for(let i = 0;i<10;i++) {
          land.value[i] = []
          for(let j = 0;j<8;j++) {
            land.value[i][j] = {
              isBoom:false,
              flag:false,
              display:'',
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
            flagBoom.push(x + ',' +y)
            i++
          }
        }
        // console.log(land.value)
        console.log(flagBoom)
      }
      init()

      const action = (x, y) => {
        if (land.value[x][y].isBoom) land.value[x][y].display = 'x'
        else land.value[x][y].display = 'o'
        count(x,y)

        land.value[x][y].check = true
        // console.log(land.value)
        // console.log(x, y, land.value[x][y])

      }

      const count = (x,y) => {
        console.log(x,y)
        let num = 0
        if (x - 1 >= 0 && y - 1 >= 0) {
          if (land.value[x - 1][y - 1].isBoom) {
            num++
          }
        }
        if (y - 1 >= 0) {
          if (land.value[x][y - 1].isBoom) {
            num++
          }
        }
        if (x - 1 >= 0 && y + 1 < 8) {
          if (land.value[x - 1][y + 1].isBoom) {
            num++
          }
        }
        if (y - 1 >= 0) {
          if (land.value[x][y - 1].isBoom) {
            num++
          }
        }
        if (y + 1 < 8) {
          if (land.value[x][y + 1].isBoom) {
            num++
          }
        }
        if (x + 1 < 10 && y - 1 >= 0) {
          if (land.value[x + 1][y - 1].isBoom) {
            num++
          }
        }
        if (x + 1 < 10) {
          if (land.value[x + 1][y].isBoom) {
            num++
          }
        }
        if (x + 1 < 10 && y + 1 < 8) {
          if (land.value[x + 1][y + 1].isBoom) {
            num++
          }
        }


        land.value[x][y].display = num

      }

      return {
        land,
        action,
      }
    }
  }
</script>
