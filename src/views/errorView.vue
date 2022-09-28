<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-center")
  div(class="my-3 text-4xl") 此頁面不存在
  button(
    class='bg-green-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
    @click="back"
  ) 回首頁
</template>
<script>
  // @ is an alias to /src
  import { useRouter } from 'vue-router'
  export default {
    name: 'errorView',
    components: {
    },
    setup() {
      const router = useRouter()
      const back = () => {
        router.push('/')
      }

      return {
        back,
      }
    }
  }
</script>
