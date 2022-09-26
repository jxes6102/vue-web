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
  div(
    v-if="endStatus"
    class="flex flex-wrap justify-center items-center"
  ) 暴了
  div(
    v-if="endStatus"
    class="flex flex-wrap justify-center items-center"
  )
    button(
      class='bg-green-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
      @click="re"
    ) 再玩一次
</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  export default {
    name: 'landmineView',
    components: {
    },
    setup() {
      const endStatus = ref(false)
      const land = ref([])
      let flagBoom = []
      const init = () => {
        endStatus.value = false
        land.value = []
        flagBoom = []

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
        let count = 11
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
        // console.log(flagBoom)
      }
      init()

      const action = (x,y) => {
        // console.log(x,y)
        if(endStatus.value) return false

        if (land.value[x][y].isBoom) {
          land.value[x][y].display = 'x'
          land.value[x][y].check = true
          endStatus.value = true
          return false
        }

        let num = 0
        if (x - 1 >= 0 && y - 1 >= 0) {
          if (land.value[x - 1][y - 1].isBoom) num++
        }
        if (x - 1 >= 0) {
          if (land.value[x - 1][y].isBoom) num++
        }
        if (x - 1 >= 0 && y + 1 < 8) {
          if (land.value[x - 1][y + 1].isBoom) num++
        }
        if (y - 1 >= 0) {
          if (land.value[x][y - 1].isBoom) num++
        }
        if (y + 1 < 8) {
          if (land.value[x][y + 1].isBoom) num++
        }
        if (x + 1 < 10 && y - 1 >= 0) {
          if (land.value[x + 1][y - 1].isBoom) num++
        }
        if (x + 1 < 10) {
          if (land.value[x + 1][y].isBoom) num++
        }
        if (x + 1 < 10 && y + 1 < 8) {
          if (land.value[x + 1][y + 1].isBoom) num++
        }
        land.value[x][y].check = true

        if (!num) {
          if (x - 1 >= 0 && y - 1 >= 0) {
            if (!land.value[x - 1][y - 1].check) action(x - 1,y - 1)
          }
          if (x - 1 >= 0 ) {
            if (!land.value[x - 1][y].check) action(x - 1,y)
          }
          if (x - 1 >= 0 && y + 1 < 8) {
            if (!land.value[x - 1][y + 1].check) action(x - 1,y + 1)
          }
          if (y - 1 >= 0) {
            if (!land.value[x][y - 1].check) action(x,y - 1)
          }
          if (y + 1 < 8) {
            if (!land.value[x][y + 1].check) action(x,y + 1)
          }
          if (x + 1 < 10 && y - 1 >= 0) {
            if (!land.value[x + 1][y - 1].check) action(x + 1,y - 1)
          }
          if (x + 1 < 10) {
            if (!land.value[x + 1][y].check) action(x + 1,y)
          }
          if (x + 1 < 10 && y + 1 < 8) {
            if (!land.value[x + 1][y + 1].check) action(x + 1,y + 1)
          }
        } else {
          land.value[x][y].display = num
        }
        // console.log('=================================')

      }

      const re = () => {
        console.log('re')
        init()
      }

      return {
        land,
        endStatus,
        action,
        re,
      }
    }
  }
</script>
