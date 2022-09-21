<template lang='pug'>
div(class="w-[350px] md:w-[500px] h-[80vh] md:h-[90vh] flex flex-col items-center justify-start bg-white")
  div(class="flex flex-wrap justify-center items-center")
    div(
      v-if="viewStatus && !endText"
      class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] m-1 flex items-center justify-center text-5xl bg-green-400"
      v-for="(item,index) in data" :key="index"
      @click="action(item)"
    ) {{item}}
    div(v-else) {{endText}}
  div(v-if="!viewStatus") 猜{{trueNum}}
  button(
    v-text="hasChange ? '再玩一次' : '開始'"
    class='bg-red-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-red-500'
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
      const time = ref(5)
      const trueNum = ref(null)
      const viewStatus = ref(true)
      const playStatus = ref(false)
      const endText = ref('')
      const hasChange = ref(false)

      const setRandomNum = () => {
        data.value = []
        while(data.value.length < 9) {
          const random = Math.floor(Math.random() * 99) + 1
          if (!data.value.includes(random)) data.value.push(random)
        }
        trueNum.value = data.value[Math.floor(Math.random() * 10)]
        console.log('data', data.value)
        console.log('trueNum', trueNum.value)
      }

      const play = () => {
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
          }, 3000)
        }, 3000)
      }

      const action = (val) => {
        if (!playStatus.value) return false
        console.log(val)
        if (val === trueNum.value) {
          console.log('right')
          endText.value = 'right'
        } else {
          console.log('error')
          endText.value = 'error'
        }

      }

      const rePlay = () => {
        playStatus.value = false
        endText.value = ''
        play()
      }

      watch(() => endText.value ,() => {
        hasChange.value = true
      })

      return {
        time,
        data,
        viewStatus,
        trueNum,
        endText,
        hasChange,
        playStatus,
        play,
        setRandomNum,
        action,
        rePlay,
      }
    }
  }
</script>
