<template lang='pug'>
div(class="w-[100vw] md:w-[50vw] h-[80vh] md:h-[90vh] flex flex-col items-center justify-start")
  div(class="p-1 mine-flex-center")
    input(
      v-model="guessNum"
      :class="[ \
        errorMessage ? 'border border-red-500' : 'border border-gray-500', \
      ]"
      class="w-[50%] p-2 bg-white focus:outline-none focus:shadow-outline rounded-md py-2 px-2 block appearance-none leading-normal"
      type=''
      placeholder='輸入要猜的數字'
    )
    button(
      class='bg-blue-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-blue-500'
      @click="action"
    ) 送出
    button(
      class='bg-red-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-red-500'
      @click="tipStatus = !tipStatus"
    ) 提示
  div(v-if="errorMessage" class="text-base text-rose-600") {{errorMessage}}
  div(class="w-full flex mt-1 p-2 justify-around items-center")
    div 數字
    div AB
    div(v-if="tipStatus") 提示
  div(
    ref="mainView"
    class="w-full h-auto max-h-[45vh] md:max-h-[55vh] mt-2 overflow-auto"
  )
    div(v-for="item in data" class="w-full flex p-2 justify-around items-center")
      div(class="w-1/3") {{item.guessNum}}
      div(class="w-1/3") {{item.AB}}
      div(class="w-1/3" v-if="tipStatus") {{item.tip}}
  div(v-if="endStatus" class="w-full h-auto overflow-auto flex flex-col")
    div(class="my-1 text-xl text-red-700") 猜中了 共猜了{{times}}次
    div()
      button(
        class='bg-green-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
        @click="madeNum"
      ) 再玩一次
</template>
<script>
  // @ is an alias to /src
  import { ref, nextTick } from 'vue'
  export default {
    name: 'guessView',
    components: {
    },
    setup() {
      const data = ref([])
      const guessNum = ref(null)
      const errorMessage = ref('')
      const endStatus = ref(false)
      const tipStatus = ref(false)
      let trueNum = ''
      const mainView = ref(null)
      const times = ref(0)

      const madeNum = () => {
        endStatus.value = false
        data.value = []
        let target = ''
        guessNum.value = null
        times.value = 0

        const base = ['0','1','2','3','4','5','6','7','8','9']
        while(target.length < 4) {
          const random = base[Math.floor(Math.random() * 10)]
          if (!target.includes(random)) target += random
        }
        trueNum = target
        console.log('trueNum', trueNum)
      }

      madeNum()

      const checkGuessNum = (val) => {
        let errMessage = ''
        if(!val) errMessage = '請輸入數字'
        else if (val.length !== 4) errMessage = '長度須為4'
        else if (isNaN(val)) errMessage = '只能輸入數字'
        // else if (val.split('').some(x => val.split('').indexOf(x) !== val.split('').lastIndexOf(x))) errMessage = '數字不能重覆'
        else if (new Set(val.split('')).size !== val.split('').length) errMessage = '數字不能重覆'
        return errMessage
      }

      const action = () => {
        errorMessage.value = checkGuessNum(guessNum.value)
        if(errorMessage.value || endStatus.value) return false

        times.value++
        madeAB()

        nextTick(() => {
          mainView.value.scrollTop = mainView.value.scrollHeight
        })
      }

      const madeAB = () => {
        let a = 0
        let b = 0
        let aTip = []
        let bTip = []
        for(let i = 0; i < guessNum.value.length ; i++) {
          if(guessNum.value.charAt(i) === trueNum.charAt(i)) {
            a++
            aTip.push(trueNum.charAt(i))
          } else if (trueNum.includes(guessNum.value.charAt(i))) {
            b++
            bTip.push(trueNum.charAt(trueNum.indexOf(guessNum.value.charAt(i))))
          }
        }

        const alltip =  (a ? "A:" + aTip.toString() : '') + (b ? " B:" + bTip.toString() : '')
        data.value.push({guessNum:guessNum.value, AB:a+'A'+b+'B', tip:alltip })
        if(a === 4) endStatus.value = true
      }

      return {
        guessNum,
        data,
        errorMessage,
        endStatus,
        mainView,
        tipStatus,
        times,
        madeNum,
        action,
      }
    }
  }
</script>
