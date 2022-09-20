<template lang='pug'>
div(class="w-[100vw] md:w-[50vw] h-[70vh] md:h-[90vh] flex flex-col items-center justify-start bg-[#ffffff]")
  div(class="flex p-2 justify-center items-center")
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
      @click="madeNum"
    ) 提示
  div(v-if="errorMessage" class="text-base text-rose-600") {{errorMessage}}
  div(class="w-full flex p-2 justify-around items-center")
    div 數字
    div AB
    div 提示
  div(class="w-full h-[50vh] min-h-[50vh] overflow-auto")
    div(v-for="item in data" class="w-full flex p-2 justify-around items-center")
      div {{item.guessNum}}
      div {{item.AB}}
      div {{item.tip}}

</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  import { checkGuessNum } from '@/utils/valid'
  export default {
    name: 'guessView',
    components: {
    },
    setup(prop, {emit}) {
      const data = ref([])
      const guessNum = ref(null)
      const errorMessage = ref('')
      let trueNum = ''

      const action = () => {
        errorMessage.value = checkGuessNum(guessNum.value)
        if(errorMessage.value) return false
        madeAB()
      }

      const madeNum = () => {
        let target = ''
        const base = ['0','1','2','3','4','5','6','7','8','9']
        while(target.length < 4) {
          const random = base[Math.floor(Math.random() * 10)]
          if (!target.includes(random)) target += random
        }
        trueNum = target
        console.log('trueNum', trueNum)
      }
      madeNum()
      const madeAB = () => {
        let a = 0
        let b = 0
        for(let i = 0; i < guessNum.value.length ; i++) {
          if(guessNum.value.charAt(i) === trueNum.charAt(i)) {
            a++
          } else if (trueNum.includes(guessNum.value.charAt(i))) {
            b++
          }
        }
        data.value.push(
          {guessNum:guessNum.value, AB:a+'A'+b+'B', tip:'none'}
        )
        console.log(a+'A'+b+'B')

      }

      return {
        guessNum,
        data,
        action,
        errorMessage,
        madeNum,
      }
    }
  }
</script>
