<template lang='pug'>
div(class="w-[350px] md:w-[500px] h-[80vh] md:h-[90vh] mt-[-10px] flex flex-col items-center justify-start")
  div(class="flex-wrap mine-flex-center")
    div(
      v-if="viewStatus && !endText"
      class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] m-1 mine-flex-center text-5xl bg-green-400"
      v-for="(item,index) in data" :key="index"
      @click="action(item)"
      v-text="displayStatus ? item : ''"
    )
    div(
      v-else
      class="flex justify-end items-end text-4xl mt-10"
    ) {{endText}}
  div(class="mine-flex-center mt-10")
    div(
      v-if="!viewStatus"
      class="text-4xl"
    ) 猜{{trueNum}}
    button(
      v-if="!data.length"
      v-text="hasChange ? '再玩一次' : '開始'"
      class='bg-green-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-500'
      @click="play"
    )
</template>
<script>
  // @ is an alias to /src
  import { ref, watch } from 'vue'
  export default {
    name: 'memoryView',
    components: {
    },
    setup() {
      const data = ref([])
      const trueNum = ref(null)
      const viewStatus = ref(true)
      const playStatus = ref(false)
      const displayStatus = ref(true)
      const endText = ref('')
      const hasChange = ref(false)

      const setRandomNum = () => {
        data.value = []
        while(data.value.length < 9) {
          const random = Math.floor(Math.random() * 99) + 1
          if (!data.value.includes(random)) data.value.push(random)
        }
        trueNum.value = data.value[Math.floor(Math.random() * 10)]
      }

      const play = () => {
        displayStatus.value = true
        if (hasChange.value) {
          playStatus.value = false
          endText.value = ''
        }
        if (!playStatus.value) {
          setRandomNum()
          setTime()
        }
      }

      const setTime = () => {
        viewStatus.value = true
        setTimeout(() => {
          viewStatus.value = false
          setTimeout(() => {
            playStatus.value = true
            viewStatus.value = true
            displayStatus.value = false
          }, 3000)
        }, 5000)
      }

      const action = (val) => {
        if (!playStatus.value) return false
        if (val === trueNum.value) endText.value = '猜對了'
        else endText.value = '猜錯了'
        data.value = []
      }

      watch(() => endText.value ,() => {
        hasChange.value = true
      })

      return {
        data,
        viewStatus,
        trueNum,
        endText,
        hasChange,
        playStatus,
        displayStatus,
        play,
        setRandomNum,
        action,
      }
    }
  }
</script>
