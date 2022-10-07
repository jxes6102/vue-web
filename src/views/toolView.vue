<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div(class="w-auto h-auto flex flex-wrap items-center justify-center")
    div(
      class="w-[150px] h-[150px] bg-gray-300 m-3 rounded-sm hover:bg-gray-200 hover:scale-105 flex items-center justify-center"
      v-for="(item, index) in data"
      @click="action(item)"
    ) {{item}}
  component(v-if="choseItem" :is="choseItem")
</template>
<script>
  // @ is an alias to /src
  import { ref, provide } from 'vue'
  import move from '@/components/ballView.vue'
  export default {
    name: 'toolView',
    components: {
      move
    },
    setup() {
      // const data = ref(['ball', 'bg', 'ball', 'bg', 'bg', 'ball'])
      const data = ref(['move'])
      const choseItem = ref('')

      const action = (name) => {
        // console.log(name)
        choseItem.value = name
      }

      const close = () => {
        choseItem.value = ''
      }
      provide('close', close)

      return {
        data,
        choseItem,
        action,
      }
    }
  }
</script>
