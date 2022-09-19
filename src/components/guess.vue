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
    ) 提示
  div(v-if="errorMessage" class="text-base text-rose-600") {{errorMessage}}
  div(class="flex p-2 justify-center items-center")
    div 數字
    div AB
    div 提示
  div(v-for="item in data")
    div {{item}}

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
      const data = ref([1,2,3])
      const guessNum = ref(null)
      const errorMessage = ref('')

      const action = () => {
        // console.log('action')
        errorMessage.value = checkGuessNum(guessNum.value)
      }
      return {
        guessNum,
        data,
        action,
        errorMessage
      }
    }
  }
</script>
