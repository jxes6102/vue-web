<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div(class="w-auto h-auto flex flex-wrap items-center justify-center")
    div(
      class="w-[150px] h-[150px] bg-[#66CCCC] m-3 rounded-lg hover:opacity-[0.8] hover:scale-105 flex items-center justify-center"
      v-for="(item, index) in data"
      @click="action(item)"
    ) {{item}}
  component(v-if="choseItem" :is="choseItem")
</template>
<script>
  // @ is an alias to /src
  import { ref, provide } from 'vue'
  import move from '@/components/ballView.vue'
  import scroll from '@/components/scrollView.vue'
  export default {
    name: 'toolView',
    components: {
      move,
      scroll
    },
    setup() {
      const data = ref(['move','scroll'])
      const choseItem = ref('')

      const action = (name) => {
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
